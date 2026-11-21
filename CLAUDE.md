# hnp-marketing

Hệ thống research & marketing cho các thương hiệu. Thương hiệu đầu tiên: **Hoàng Nam Phát** (thiết bị mạng & camera — hoangnamphat.vn, fanpage `thietbimanghoangnamphat`).

## Cấu trúc thư mục

```
.claude/agents/          8 research agent + 7 content agent (tên file = tên agent)
.claude/skills/
  ├─ hnp-research/       điều phối research → báo cáo + brief content
  └─ humanizer/          bỏ giọng AI (bản gốc blader/humanizer v3.1.0, MIT) + vi-patterns.md
templates/               khuôn: research-output.md, report.md, content-brief.md, web-metrics.md
scripts/youtube/         yt-comments.mjs — lấy comment YouTube
brand/<brand-slug>/      thông tin thương hiệu gốc (brand.md…), CHỈ trên máy — `brand/` nằm trong .gitignore, không commit/push
research/<brand-slug>/   file nền NN-*.md, sources.md, trend-rules.md, youtube/raw/ — CHỈ trên máy, cả `research/` nằm trong .gitignore, không commit/push
  ├─ reports/            báo cáo tóm tắt mỗi lần research (YYYY-MM-DD-<loai>-<chu-de>.md)
  ├─ briefs/             brief cho người/AI viết content (cùng tên với báo cáo; `loai`: seo | trend | tong-hop)
  ├─ raw/web/            CSV xuất từ Search Console / GA4 (gitignore)
  └─ raw/khach/          câu hỏi khách từ inbox FB/Zalo người dùng dán vào (gitignore)
content/<brand-slug>/
  ├─ <ten-brief>/        facebook.md, blog.md, pomelli.md, images/… + review.md + publish.md
  ├─ log.md              số liệu bài đã đăng (mạng xã hội + cột web)
  ├─ web-log.md          số liệu web theo trang/truy vấn (Search Console, GA4)
  └─ learnings.md        bài học (ID L<n>) — research, gap-analysis & trend-scout lần sau đọc
_archive/                bản cũ không dùng nữa (agents-v1: bộ *-researcher)
.env.example             mẫu biến môi trường → copy thành .env
```

## Các luồng chạy (tổng quan)

Không biết chạy gì tiếp → gõ **`/de-xuat`** (đọc trạng thái repo, đề xuất luồng + câu lệnh).

| # | Luồng | Agent | Khi nào chạy | Đầu ra chính |
|---|-------|-------|--------------|--------------|
| 1 | **Research nền** | 8 agent research (4 đợt) + `00-summary` | Lần đầu; sau đó mỗi quý, hoặc khi đổi định vị/ngành hàng | `research/<slug>/NN-*.md` |
| 2 | **Hiểu khách** | `customer-youtube` → `customer-personas` | Mỗi tháng; khi inbox có nhiều câu hỏi lặp lại; khi ra dòng sản phẩm mới; khi `learnings.md` cho thấy bài không chạm đúng khách | `30-*.md`, `31-customers.md` (cập nhật, giữ ID) |
| 3 | **Theo dõi thị trường** | `market-vendor-products`, `market-competitors` (chạy lẻ) | Hãng ra model mới, đối thủ đổi giá/chạy khuyến mãi; định kỳ mỗi tháng | `22-*.md`, `21-*.md` |
| 4 | **Chọn chủ đề** | `gap-analysis` (SEO) / `trend-scout` (trend) | Mỗi tuần, khi không còn brief `san-sang` | báo cáo + brief |
| 5 | **Làm bài** | `content-write` → `content-images` → `content-review` → `content-publish` → *(đăng tay)* → `content-measure` | Mỗi brief | `content/<slug>/<ten-brief>/`, `log.md`, `learnings.md` |

```
 1 Research nền ─┬──────────────────────────────┐
                 ▼                              ▼
 2 Hiểu khách ──> 31-customers ──> 4 Chọn chủ đề ──> brief ──> 5 Làm bài ──> learnings.md
 3 Theo dõi TT ──> 21/22 ─────────────^                                   │
        ▲                                                                 │
        └────────────── lần sau đọc learnings ◄────────────────────────────┘
```

### Luồng 2 · Hiểu khách

Chạy nhóm 3 độc lập, không cần chạy lại cả research. Nguồn tiếng nói khách hàng:

| Nguồn | Ai lấy | Cách |
|-------|--------|------|
| Comment YouTube | `customer-youtube` | YouTube Data API (cần `YOUTUBE_API_KEY`) |
| Review Shopee/Lazada, Google Maps, Voz/Tinhte, nhóm & fanpage Facebook công khai | `customer-personas` | web search/fetch (Facebook không kéo hàng loạt được) |
| **Inbox Facebook/Zalo, câu hỏi qua điện thoại** của chính HNP | **người dùng** dán vào `research/<slug>/raw/khach/YYYY-MM-DD-inbox.md` (gitignore) | `customer-personas` đọc; bỏ tên/SĐT trước khi trích |

Các bước:
1. (Tuỳ chọn) dán câu hỏi khách tháng này vào `raw/khach/`.
2. `customer-youtube` với từ khoá mới (sản phẩm mới, câu hỏi hay gặp trong inbox).
3. `customer-personas` cập nhật `31-customers.md` — giữ ID, insight mới đánh số tiếp, báo insight mới/đổi.
4. Insight mới có câu hỏi tìm kiếm → chạy `gap-analysis` (hoặc `channel-seo` nếu từ khoá chưa có trong `41`) để thành brief.

> Chạy luồng hiểu khách cho hoang-nam-phat: customer-youtube với từ khoá "camera wifi ezviz", "lắp camera gia đình", rồi customer-personas (đọc thêm raw/khach/).

## Research agents (`.claude/agents/`) — chia theo công dụng

Tên agent = `<nhóm>-<việc>`. Mã file 2 chữ số: **chữ số đầu = nhóm**.

| Nhóm | Câu hỏi trả lời | Agent | File đầu ra |
|------|-----------------|-------|-------------|
| **1 · Thương hiệu** | Mình là ai, bán gì? | `brand-profile` | `10-brand.md` |
| **2 · Thị trường & cạnh tranh** | Bối cảnh ngoài kia ra sao? | `market-overview` | `20-market.md` |
| | Ai đang cạnh tranh, họ làm gì? | `market-competitors` | `21-competitors.md` |
| | Hãng vừa ra sản phẩm gì mới? | `market-vendor-products` | `22-vendor-products.md` |
| **3 · Khách hàng** | Khách nói gì trên YouTube? | `customer-youtube` | `30-youtube-comments.md` (+ `youtube/raw/`) |
| | Khách là ai, cần gì, mua thế nào? | `customer-personas` | `31-customers.md` |
| **4 · Kênh & tăng trưởng** | Nên đánh kênh nào? | `channel-audit` | `40-channels.md` |
| | Khách search gì, lên top thế nào? | `channel-seo` | `41-seo-keywords.md` |
| Tổng hợp | | agent chính | `00-summary.md` |

Tất cả file nằm ở `research/<brand-slug>/` — `<brand-slug>`: tên không dấu, gạch nối, vd `hoang-nam-phat`.

`research/<brand-slug>/sources.md` — sổ gom **mọi link** các agent đã dùng (không trùng lặp, ghi file nào dùng, ngày kiểm tra). Agent chính dựng lại sau mỗi lần chạy.

## Phụ thuộc giữa các agent

```
10 brand ──┬─> 20 market
           ├─> 21 competitors ─┐
           └─> 22 vendor ──────┼─> 30 youtube ──> 31 personas ──┬─> 40 channels
                               │                                └─> 41 seo
                               └────────────────────────────────────^
```

## Content agents (nhóm 5) — chọn chủ đề → viết → đo

Có 2 làn chọn chủ đề, cùng đổ vào một đường viết–duyệt–đăng–đo:

```
Làn SEO  : content-measure (nhập web) ──> gap-analysis ──> brief(seo)  ──┐
Làn trend: trend-scout (quét + lọc theo trend-rules.md) ──> brief(trend) ┤
                                                                         ▼
brief ──> content-write ──> content-review ──> content-publish ──> (người dùng đăng) ──> content-measure ──> learnings.md ──┐
            ↑ humanizer        ↑ humanizer      (gói đăng + UTM)     ghi link: content-publish                               │
            └──── can-sua ─────┘                                                                                             │
        gap-analysis / trend-scout / research lần sau đọc ◄─────────────────────────────────────────────────────────────────┘
```

- **Làn SEO**: bài bền, nhắm người đang cần mua, đăng Website (+ Facebook dẫn về).
- **Làn trend**: bài ngắn sống 2–3 ngày, chỉ Facebook/TikTok, **luôn duyệt tay**, quá `han_dung` thì bỏ. Không đăng lên Website.
- Số liệu web: đưa file vào `research/<slug>/raw/web/` rồi chạy `content-measure` (khuôn `templates/web-metrics.md`). Hai cách lấy: (A) tự xuất CSV từ Search Console/GA4; (B) gõ **`/lay-so-web`**, agent chính mở Chrome trên máy (extension Claude in Chrome, đã đăng nhập Google), chỉ xem và xuất báo cáo, cất file vào `raw/web/` rồi gọi `content-measure`.

| Bước | Agent | Đầu vào | Đầu ra |
|------|-------|---------|--------|
| 0a · Chọn chủ đề SEO | `gap-analysis` | `web-log.md`, `log.md`, `learnings.md`, `41-seo-keywords.md` | báo cáo `loai: noi-dung` + brief `loai: seo` |
| 0b · Chọn trend | `trend-scout` | `trend-rules.md`, web công khai, `learnings.md` | báo cáo `loai: xu-huong` + brief `loai: trend` (có `han_dung`) |
| 1 · Viết | `content-write` | `research/<slug>/briefs/<ten-brief>.md` | `content/<slug>/<ten-brief>/<kenh>.md` (`status: nhap`) |
| 1b · Ảnh blog | `content-images` | ảnh Pomelli người dùng tải về `<ten-brief>/images/` | ảnh đổi tên + alt text gắn vào `blog.md`; kết quả ở cuối `pomelli.md` |
| 2 · Duyệt | `content-review` | thư mục bài | `review.md`; bài → `da-duyet` hoặc `can-sua` |
| 3 · Đăng | `content-publish` | bài `da-duyet` / link sau khi đăng | `publish.md`; bài → `da-dang`; dòng mới trong `log.md` |
| 4 · Đo | `content-measure` | số liệu bài đăng + CSV Search Console/GA4 người dùng đưa | `log.md`, `web-log.md`, `learnings.md` |

Ví dụ:
> Dùng content-measure nhập số liệu web từ research/hoang-nam-phat/raw/web/2026-11-10-gsc-queries.csv
> /lay-so-web hoang-nam-phat   (lấy Search Console + GA4 qua Chrome trên máy rồi nhập luôn)
> Dùng gap-analysis cho hoang-nam-phat, tối đa 3 brief
> Dùng trend-scout cho hoang-nam-phat
> Dùng content-write viết bài theo brief research/hoang-nam-phat/briefs/2026-11-07-gia-e50ug.md
> (Blog) Tạo ảnh trên Pomelli theo `pomelli.md`, tải về `images/` → Dùng content-images gắn ảnh cho content/hoang-nam-phat/2026-11-07-gia-e50ug
> Dùng content-review duyệt content/hoang-nam-phat/2026-11-07-gia-e50ug
> Dùng content-publish chuẩn bị đăng content/hoang-nam-phat/2026-11-07-gia-e50ug
> Đã đăng facebook: <link>, ngày 2026-11-10 — dùng content-publish ghi nhận
> Dùng content-measure ghi số liệu: <dán số liệu>

Viết/duyệt luôn qua skill `humanizer`. Cập nhật humanizer: chỉ chép đè `.claude/skills/humanizer/SKILL.md` + `LICENSE` từ bản gốc, không sửa `vi-patterns.md`.

## Cách chạy

**Full research** — 4 đợt, trong mỗi đợt chạy song song:
1. **Đợt 1:** `brand-profile`
2. **Đợt 2:** `market-overview`, `market-competitors`, `market-vendor-products`
3. **Đợt 3:** `customer-youtube` → xong rồi `customer-personas`
4. **Đợt 4:** `channel-audit`, `channel-seo`
5. **Tổng hợp:** agent chính đọc 8 file → viết `00-summary.md` theo cùng khuôn (`file_id: "00"`); mục chuyên môn: `## SWOT`, `## 5 ưu tiên hành động`. Mục `Dành cho Content` của 00 gom insight/góc/proof point mạnh nhất, **giữ nguyên ID gốc** (vd `30-I3`), không tạo ID mới.

> Chạy full research cho Hoàng Nam Phát (hoangnamphat.vn), slug `hoang-nam-phat`, theo quy trình trong CLAUDE.md.

**Chạy theo nhóm** — chạy các agent trong nhóm theo thứ tự trên; file của nhóm trước chưa có thì agent tự làm với dữ liệu sẵn có và ghi vào `Khoảng trống dữ liệu`:
> Chạy nhóm 2 (Thị trường & cạnh tranh) cho hoang-nam-phat.

**Chạy lẻ:**
> Dùng market-competitors phân tích đối thủ của hoang-nam-phat.
> Dùng market-vendor-products cho hoang-nam-phat, hãng Ezviz, 12 tháng gần nhất.

**Sau mỗi lần chạy (lẻ, nhóm hay full)**, agent chính:
1. Dựng lại `research/<brand-slug>/sources.md` từ mục `## Nguồn` của mọi file `NN-*.md` và `reports/*.md` (khuôn & quy tắc trong `templates/research-output.md`; giữ "Lần đầu" của URL cũ).
2. Báo cáo cho người dùng: với mỗi agent đã chạy, in nguyên khối "Trả về" của agent đó (phát hiện chính + **danh sách link research**), cuối cùng ghi đường dẫn `sources.md` và tổng số nguồn. Không rút gọn hay bỏ phần link.
3. Khi chạy qua skill `hnp-research`: lưu thêm báo cáo tóm tắt (`reports/`, khuôn `templates/report.md`) và brief content (`briefs/`, khuôn `templates/content-brief.md`).

## Khuôn đầu ra (bắt buộc)

Mọi file research theo **`templates/research-output.md`**: cùng frontmatter (`brand`, `file_id`, `group`, `confidence`, `gaps`...), cùng heading, mục `## Dành cho Content` với ID chuẩn `<file_id>-I/A/P<n>` (Insight / Góc content / Proof point). Persona dùng ID `P-<tên>` từ `31-customers.md`; tên kênh chuẩn theo `40-channels.md`. Agent viết content sau này đọc theo khuôn này — sửa khuôn thì cập nhật cả agent content.

## YouTube API

- Copy `.env.example` → `.env`, điền `YOUTUBE_API_KEY` (hướng dẫn lấy key trong file). `.env` đã có trong `.gitignore`.
- Script: `node scripts/youtube/yt-comments.mjs --q "<từ khoá>" --out research/<slug>/youtube/raw/<tên>` (Node ≥ 18, không cần cài gì). Ghi ra `.json` (đầy đủ) + `.txt` (gọn, sort theo like).
- Quota 10.000/ngày, 1 search = 100 → tối đa ~80 từ khoá/ngày.

## Quy ước
- Toàn bộ tài liệu bằng tiếng Việt; mọi số liệu phải có nguồn + ngày truy cập.
- Không bịa số liệu, không bịa trích dẫn khách hàng; thiếu thì ghi "Chưa xác minh".
- Chạy lại agent sẽ cập nhật file cũ (giữ phần còn đúng, sửa `updated`, **giữ nguyên ID**).
