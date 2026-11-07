#!/usr/bin/env node
/**
 * YouTube comment collector (YouTube Data API v3) — không cần cài package (Node >= 18).
 *
 * Ví dụ:
 *   node scripts/youtube/yt-comments.mjs --q "camera wifi gia dinh" --out research/hoang-nam-phat/youtube/raw/camera-wifi
 *   node scripts/youtube/yt-comments.mjs --video https://youtu.be/xxxx --video yyyy --out research/.../raw/review-ezviz
 *
 * Tham số:
 *   --q <từ khoá>            Tìm video theo từ khoá (lặp lại được). Mỗi lần search tốn 100 quota.
 *   --video <id|url>         Lấy comment của video cụ thể (lặp lại được).
 *   --max-videos <n>         Số video mỗi từ khoá (mặc định 10, tối đa 50).
 *   --max-comments <n>       Số comment mỗi video (mặc định 100). Mỗi trang 100 comment = 1 quota.
 *   --order relevance|time   Thứ tự comment (mặc định relevance).
 *   --published-after <date> Chỉ lấy video đăng sau ngày này (YYYY-MM-DD).
 *   --region VN --lang vi    Mặc định VN / vi.
 *   --out <path-không-đuôi>  Ghi <path>.json (đầy đủ) + <path>.txt (gọn, để đọc). Bắt buộc.
 *
 * Quota mặc định 10.000 đơn vị/ngày: 1 search = 100, videos.list = 1, 1 trang comment = 1.
 * Không lưu tên/kênh của người comment (tránh dữ liệu cá nhân).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const API = 'https://www.googleapis.com/youtube/v3';

// ---------- env ----------
function loadEnv(file = resolve(process.cwd(), '.env')) {
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/i);
    if (!m || line.trim().startsWith('#')) continue;
    const val = m[2].replace(/^['"]|['"]$/g, '');
    if (process.env[m[1]] === undefined) process.env[m[1]] = val;
  }
}

// ---------- args ----------
function parseArgs(argv) {
  const multi = new Set(['q', 'video']);
  const out = { q: [], video: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : 'true';
    if (multi.has(key)) out[key].push(val);
    else out[key] = val;
  }
  return out;
}

function videoIdFrom(input) {
  const m = input.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : input.trim();
}

// ---------- api ----------
let quotaUsed = 0;
async function api(path, params, cost) {
  const url = new URL(`${API}/${path}`);
  for (const [k, v] of Object.entries({ ...params, key: process.env.YOUTUBE_API_KEY })) {
    if (v !== undefined && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url);
  quotaUsed += cost;
  const body = await res.json();
  if (!res.ok) {
    const reason = body?.error?.errors?.[0]?.reason ?? res.status;
    const err = new Error(`${path}: ${reason} — ${body?.error?.message ?? ''}`);
    err.reason = reason;
    throw err;
  }
  return body;
}

async function searchVideos(q, { maxVideos, region, lang, publishedAfter }) {
  const data = await api('search', {
    part: 'snippet', type: 'video', q, maxResults: Math.min(maxVideos, 50),
    regionCode: region, relevanceLanguage: lang, order: 'relevance',
    publishedAfter: publishedAfter ? new Date(publishedAfter).toISOString() : undefined,
  }, 100);
  return data.items.map((it) => it.id.videoId);
}

async function videoDetails(ids) {
  const result = [];
  for (let i = 0; i < ids.length; i += 50) {
    const data = await api('videos', { part: 'snippet,statistics', id: ids.slice(i, i + 50).join(',') }, 1);
    for (const v of data.items) {
      result.push({
        id: v.id,
        url: `https://www.youtube.com/watch?v=${v.id}`,
        title: v.snippet.title,
        channel: v.snippet.channelTitle,
        publishedAt: v.snippet.publishedAt,
        views: Number(v.statistics.viewCount ?? 0),
        likes: Number(v.statistics.likeCount ?? 0),
        commentCount: Number(v.statistics.commentCount ?? 0),
      });
    }
  }
  return result;
}

async function videoComments(videoId, { maxComments, order }) {
  const comments = [];
  let pageToken;
  while (comments.length < maxComments) {
    let data;
    try {
      data = await api('commentThreads', {
        part: 'snippet', videoId, maxResults: 100, order, textFormat: 'plainText', pageToken,
      }, 1);
    } catch (e) {
      if (e.reason === 'commentsDisabled') return { disabled: true, comments };
      throw e;
    }
    for (const t of data.items) {
      const s = t.snippet.topLevelComment.snippet;
      comments.push({
        text: s.textDisplay.replace(/\s+/g, ' ').trim(),
        likes: s.likeCount,
        replies: t.snippet.totalReplyCount,
        publishedAt: s.publishedAt,
      });
    }
    pageToken = data.nextPageToken;
    if (!pageToken) break;
  }
  return { disabled: false, comments: comments.slice(0, maxComments) };
}

// ---------- main ----------
async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  if (!process.env.YOUTUBE_API_KEY) {
    console.error('Thiếu YOUTUBE_API_KEY trong .env (xem .env.example).');
    process.exit(1);
  }
  if (!args.out || (!args.q.length && !args.video.length)) {
    console.error('Cần --out và ít nhất một --q hoặc --video. Xem header file để biết cách dùng.');
    process.exit(1);
  }

  const opts = {
    maxVideos: Number(args['max-videos'] ?? 10),
    maxComments: Number(args['max-comments'] ?? 100),
    order: args.order ?? 'relevance',
    region: args.region ?? 'VN',
    lang: args.lang ?? 'vi',
    publishedAfter: args['published-after'],
  };

  const ids = new Set(args.video.map(videoIdFrom));
  for (const q of args.q) (await searchVideos(q, opts)).forEach((id) => ids.add(id));

  const videos = await videoDetails([...ids]);
  for (const v of videos) {
    const { disabled, comments } = await videoComments(v.id, opts);
    v.commentsDisabled = disabled;
    v.comments = comments.sort((a, b) => b.likes - a.likes);
    process.stderr.write(`✓ ${v.comments.length.toString().padStart(4)} cmt — ${v.title}\n`);
  }
  videos.sort((a, b) => b.views - a.views);

  const payload = {
    queries: args.q, fetchedAt: new Date().toISOString(), options: opts, quotaUsed,
    totalComments: videos.reduce((n, v) => n + v.comments.length, 0), videos,
  };

  const outBase = resolve(process.cwd(), args.out.replace(/\.(json|txt)$/, ''));
  mkdirSync(dirname(outBase), { recursive: true });
  writeFileSync(`${outBase}.json`, JSON.stringify(payload, null, 2));

  const txt = [
    `# Queries: ${args.q.join(' | ') || '(video chỉ định)'} — fetched ${payload.fetchedAt}`,
    `# ${videos.length} video, ${payload.totalComments} comment, quota ~${quotaUsed}`,
    '',
    ...videos.flatMap((v) => [
      `## [${v.id}] ${v.title}`,
      `${v.url} | ${v.channel} | ${v.publishedAt.slice(0, 10)} | ${v.views} views | ${v.commentCount} cmt${v.commentsDisabled ? ' | COMMENTS DISABLED' : ''}`,
      ...v.comments.map((c) => `- (${c.likes}👍 ${c.replies}↩) ${c.text}`),
      '',
    ]),
  ].join('\n');
  writeFileSync(`${outBase}.txt`, txt);

  console.log(JSON.stringify({ out: `${outBase}.json`, txt: `${outBase}.txt`, videos: videos.length, comments: payload.totalComments, quotaUsed }));
}

main().catch((e) => {
  console.error(`Lỗi: ${e.message}`);
  if (e.reason === 'quotaExceeded') console.error('Hết quota ngày — thử lại sau 14:00 (giờ VN, reset 0h Pacific).');
  process.exit(1);
});
