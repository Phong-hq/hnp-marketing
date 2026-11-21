---
description: Xem trạng thái repo và đề xuất luồng/agent nên chạy tiếp (research, chọn chủ đề, viết–duyệt–đăng–đo)
argument-hint: "[brand-slug] (mặc định: hoang-nam-phat)"
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(git status:*)
---

# Đề xuất luồng chạy tiếp theo

Brand slug: `$ARGUMENTS` (để trống thì dùng `hoang-nam-phat`). Hôm nay: dùng ngày hiện tại của phiên.

**Chỉ đọc, không sửa file, không chạy agent.** Nhiệm vụ: kiểm tra trạng thái rồi đề xuất bước tiếp theo, kèm câu lệnh để người dùng copy chạy.

## Bước 1 · Kiểm tra trạng thái

Đọc (bỏ qua nếu không có, ghi nhận là "chưa có"):

1. **Research nền** — `research/<slug>/NN-*.md`: có file nào trong 8 file (`10-brand`, `20-market`, `21-competitors`, `22-vendor-products`, `30-youtube-comments`, `31-customers`, `40-channels`, `41-seo-keywords`) và `00-summary.md`? Đọc frontmatter `updated` của từng file → file nào cũ hơn 90 ngày.
2. **sources.md** — `research/<slug>/sources.md` có chưa, có cũ hơn report mới nhất không.
3. **Briefs** — mỗi file `research/<slug>/briefs/*.md`: đọc frontmatter `loai`, `status`, `han_dung`, `date`.
   - Brief `loai: trend` có `han_dung` < hôm nay mà `status` chưa là `het-han`/`da-viet` → đánh dấu **quá hạn**.
   - Brief `status: san-sang` mà chưa có thư mục `content/<slug>/<ten-brief>/` → **chờ viết**.
4. **Content** — mỗi thư mục `content/<slug>/<ten-brief>/`: đọc `status` trong frontmatter các file kênh (`facebook.md`, `blog.md`, `zalo.md`…), có `review.md`, `publish.md`, `pomelli.md`, thư mục `images/` không.
5. **Đo lường** — `content/<slug>/log.md`, `web-log.md`, `learnings.md`: có chưa, dòng mới nhất ngày nào; bài `da-dang` nào chưa có số liệu sau ≥ 3 ngày.
6. **Số liệu web chưa nhập** — CSV trong `research/<slug>/raw/web/` mới hơn lần nhập cuối trong `web-log.md`.
7. `research/<slug>/trend-rules.md` có chưa (trend-scout cần).
8. **Hiểu khách** — `updated` của `30-youtube-comments.md`, `31-customers.md`; file trong `research/<slug>/raw/khach/` mới hơn `31`; `.env` có `YOUTUBE_API_KEY` chưa (chỉ kiểm có dòng, không in giá trị).
9. **Thị trường** — `updated` của `21-competitors.md`, `22-vendor-products.md`.

Gắn mỗi đề xuất với 1 trong 5 luồng ở mục "Các luồng chạy" của CLAUDE.md: 1 Research nền · 2 Hiểu khách · 3 Theo dõi thị trường · 4 Chọn chủ đề · 5 Làm bài.

## Bước 2 · Quy tắc đề xuất (ưu tiên từ trên xuống)

| Ưu tiên | Điều kiện | Đề xuất |
|---|---|---|
| 1 | Brief trend sắp/đã quá `han_dung` | Quá hạn → đổi `status: het-han`, bỏ. Còn hạn ≤ 1 ngày → viết/duyệt/đăng ngay |
| 2 | Bài `da-duyet` chưa có `publish.md` | `content-publish` chuẩn bị đăng |
| 3 | Bài đã có `publish.md` nhưng chưa ghi link / chưa `da-dang` | Đăng tay rồi `content-publish` ghi nhận link |
| 4 | Bài `can-sua` | `content-write` sửa theo `review.md` rồi `content-review` lại |
| 5 | Bài `nhap` (blog có `pomelli.md` mà chưa có ảnh trong `images/` → nhắc tạo ảnh Pomelli + `content-images` trước) | `content-review` |
| 6 | Brief `san-sang` chưa có bài | `content-write` |
| 7 | Bài `da-dang` ≥ 3 ngày chưa có số liệu, hoặc có CSV web chưa nhập | `content-measure` |
| 8 | Thiếu research nền (chưa có `10-brand.md`) | **Full research** (4 đợt) |
| 8b | Có file mới trong `raw/khach/` chưa đưa vào `31`, hoặc `31` cũ > 30 ngày | **Luồng 2 · Hiểu khách** (`customer-youtube` → `customer-personas`). Chưa có `YOUTUBE_API_KEY` → chỉ chạy `customer-personas` và nhắc lấy key |
| 8c | `21`/`22` cũ > 30 ngày | **Luồng 3 · Theo dõi thị trường** (`market-vendor-products`, `market-competitors`) |
| 9 | Thiếu một số file nền / file nền cũ > 90 ngày | Chạy lẻ hoặc chạy nhóm tương ứng (theo thứ tự phụ thuộc trong CLAUDE.md) |
| 10 | Không còn brief `san-sang` | Chọn chủ đề: `gap-analysis` nếu có `41-seo-keywords.md` hoặc `web-log.md`; `trend-scout` nếu có `trend-rules.md`. Thiếu cả hai → chạy `channel-seo` trước |
| 11 | `sources.md` chưa có / cũ | Dựng lại `sources.md` |

Không đề xuất bước mà đầu vào chưa có (vd `gap-analysis` khi không có cả `41-seo-keywords.md` lẫn `web-log.md`) — thay vào đó đề xuất bước tạo đầu vào.

## Bước 3 · Trả lời người dùng (tiếng Việt, ngắn)

```
## Trạng thái <slug> — <ngày>
- Research nền: x/8 file (thiếu: ...; cũ: ...)
- Brief: <tên> — <loai>, <status>, hạn <han_dung>
- Content: <thư mục> — <kênh: status>
- Đo lường: log.md <có/chưa>, web-log.md <...>, learnings.md <...>
- Hiểu khách: 30 <ngày/chưa>, 31 <ngày/chưa>, raw/khach <số file mới>, YouTube key <có/chưa>
- Thị trường: 21 <ngày/chưa>, 22 <ngày/chưa>

## Nên làm tiếp (tối đa 3 bước, theo thứ tự)
1. **[Luồng N] <việc>** — vì <lý do 1 câu>
   > <câu lệnh copy được, đúng mẫu ví dụ trong CLAUDE.md>
2. ...

## Việc người dùng tự làm (nếu có)
- vd: đăng bài lên Facebook, tạo ảnh Pomelli, xuất CSV Search Console vào raw/web/ (hoặc gõ `/lay-so-web` để lấy qua Chrome)
```

Câu lệnh mẫu dùng đúng cú pháp trong CLAUDE.md, vd:
- `Dùng content-write viết bài theo brief research/<slug>/briefs/<ten-brief>.md`
- `Dùng content-review duyệt content/<slug>/<ten-brief>`
- `Dùng gap-analysis cho <slug>, tối đa 3 brief`
- `Chạy full research cho Hoàng Nam Phát (hoangnamphat.vn), slug <slug>, theo quy trình trong CLAUDE.md.`
