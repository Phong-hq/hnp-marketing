---
name: hnp-content-chat
description: "Dùng trên claude.ai Project cho Hoàng Nam Phát: chạy các agent và quy trình của repo hnp-marketing (research, gap-analysis SEO, trend-scout, content-write/review/publish/measure) bằng cách đọc định nghĩa agent trong repo trên máy người dùng và làm theo, ghi kết quả thẳng vào repo."
---

# HNP — chạy agent của repo từ Project

Skill này **không chứa logic nghiệp vụ**. Nó là người chạy: đọc định nghĩa agent và quy ước trong repo `hnp-marketing`, làm đúng theo đó, rồi ghi kết quả vào repo. Sửa agent trong repo là skill tự theo bản mới.

Repo: `D:\phong\Github\hoang-nam-phat-marketing\hnp-marketing` · slug mặc định `hoang-nam-phat`.

## Bước 0 — Kết nối repo
1. Dùng công cụ truy cập thư mục máy (liệt kê / đưa file về đọc / ghi file). Chưa có quyền → xin quyền thư mục repo, 1 lần.
2. Không có công cụ hoặc máy không kết nối → nói rõ không đọc được repo, hướng dẫn mở chat này trong ứng dụng Claude trên máy có repo. **Không** tự bịa nội dung agent từ trí nhớ.
3. Đọc `CLAUDE.md` của repo trước mọi việc (cấu trúc, quy ước, phụ thuộc agent, cách chạy, quy ước ID/nguồn).

## Bước 1 — Chọn agent theo yêu cầu

| Người dùng muốn | Agent / quy trình |
|---|---|
| Hỏi nhanh: giá, đối thủ, từ khoá, kênh, tin hãng, chủ đề nội dung | Skill `hnp-research` (đọc `.claude/skills/hnp-research/SKILL.md`, chế độ A) |
| Chạy nền: full / theo nhóm / lẻ | `brand-profile`, `market-overview`, `market-competitors`, `market-vendor-products`, `customer-youtube`, `customer-personas`, `channel-audit`, `channel-seo` theo "Cách chạy" trong `CLAUDE.md` |
| Tuần này viết gì cho SEO | `gap-analysis` |
| Quét trend | `trend-scout` |
| Viết bài từ brief | `content-write` (+ `content-images` cho blog) |
| Duyệt bài | `content-review` |
| Gói đăng / ghi link đã đăng | `content-publish` |
| Nhập số liệu bài đăng và CSV Search Console/GA4 | `content-measure` |

Không rõ → hỏi 1 câu. Yêu cầu gồm nhiều agent → chạy theo thứ tự phụ thuộc trong `CLAUDE.md`.

## Bước 2 — Nạp agent
1. Đọc `.claude/agents/<tên>.md`. Chưa có ở đó → thử `_chep-vao-claude/agents/<tên>.md`. Không có cả hai → báo thiếu file và dừng.
2. Đọc **mọi file mà agent liệt kê trong "Trước khi bắt đầu"/"Đầu vào"** (khuôn `templates/*.md`, file `research/<slug>/NN-*.md`, `content/<slug>/*`, `trend-rules.md`…). File không tồn tại thì làm như agent quy định (thường: ghi vào `Khoảng trống dữ liệu`, không dừng).
3. Agent có `skills: humanizer` → đọc `.claude/skills/humanizer/SKILL.md` và `vi-patterns.md`.
4. Đưa file về đọc theo lô (gọi một lần cho nhiều đường dẫn) để đỡ tốn lượt.

## Bước 3 — Thực hiện
- Làm theo phần thân của agent như hướng dẫn của chính bạn: quy trình, quy tắc riêng, khuôn đầu ra, ID, cách đặt tên file.
- Ánh xạ công cụ: `Read/Glob/Grep` → đọc/liệt kê file repo; `Write/Edit` → ghi file repo; `WebSearch/WebFetch` → tìm kiếm và đọc web.
- Có công cụ giao việc cho agent con và việc độc lập (vd đợt 2 của full research) → chạy song song; không có thì chạy lần lượt.
- Không chạy được: script `node` (vd `scripts/youtube/yt-comments.mjs`) vì không có shell trên máy. Agent cần dữ liệu đó → dùng nguồn công khai khác hoặc nói người dùng chạy script trong Claude Code rồi quay lại.
- Bài trend (`loai: trend`) luôn cần duyệt tay; không đăng bài thay người dùng.

## Giới hạn ghi file
- Chỉ ghi trong `research/` và `content/` (và `templates/` khi người dùng yêu cầu sửa khuôn).
- **Không đọc `.env`. Không ghi `.claude/`, `.git/`, `.env`** — hệ thống chặn; nếu agent yêu cầu ghi chỗ đó thì dừng và nói người dùng tự làm.
- Thư mục `content/` nằm trong `.gitignore`: bài viết chỉ ở máy, không lên git. Nhắc người dùng nếu họ cần đồng bộ.

## Bước 4 — Hoàn tất
1. Ghi file xong **liệt kê thư mục đích để xác nhận có file** rồi mới báo đã lưu.
2. Là "agent chính": sau lần chạy research/gap-analysis/trend-scout, dựng lại `research/<slug>/sources.md` theo quy tắc trong `templates/research-output.md`.
3. Trả lời theo mục "Sau mỗi lần chạy" của `CLAUDE.md` (phát hiện chính + danh sách link nguồn của từng agent, đường dẫn file đã tạo, bước kế tiếp). Không rút gọn phần link.
4. Gợi ý lệnh kế tiếp theo luồng: số liệu → `gap-analysis` / `trend-scout` → `content-write` → `content-review` → `content-publish` → `content-measure`.

## Nguyên tắc
Số liệu phải có nguồn + ngày; không bịa; thiếu thì ghi `Chưa xác minh`. Mọi quy tắc thương hiệu và định dạng lấy từ repo, không từ skill này.
