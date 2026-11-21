---
name: hnp-research
description: "Khi cần research marketing cho Hoàng Nam Phát (đối thủ, giá model, từ khóa SEO, kênh social, xu hướng hãng/sản phẩm, ý tưởng nội dung) hoặc chạy full/nhóm research: giao agent, kiểm chứng, rồi lưu báo cáo tóm tắt + brief cho người/AI viết content vào repo."
---

# HNP Research — research → báo cáo → brief content

Biến một yêu cầu research ngắn thành brief chuẩn, giao agent chạy, kiểm chứng kết quả, rồi **lưu 2 file vào repo**:
1. **Báo cáo tóm tắt** — `research/<slug>/reports/<YYYY-MM-DD>-<loai>-<chu-de>.md` (khuôn `templates/report.md`)
2. **Brief content** — `research/<slug>/briefs/<YYYY-MM-DD>-<loai>-<chu-de>.md` (khuôn `templates/content-brief.md`)

`<slug>` mặc định `hoang-nam-phat`. `<chu-de>`: không dấu, gạch nối, ≤ 5 từ (vd `e50ug`, `cnttshop-thang-11`).

## Bước 1 — Nạp ngữ cảnh thương hiệu

1. Đọc `research/<slug>/10-brand.md` — nguồn sự thật về thương hiệu (hãng phân phối, chính sách, kênh, tone).
2. Đọc thêm file liên quan nếu có: `21-competitors.md` (đối thủ, bảng giá), `22-vendor-products.md` (model mới), `31-customers.md` (persona `P-...`), `40-channels.md` (tên kênh chuẩn), `41-seo-keywords.md` (từ khoá), `00-summary.md`, `content/<slug>/learnings.md` (bài học từ bài đã đăng — ưu tiên góc content đã chứng minh hiệu quả) và `content/<slug>/web-log.md` (số liệu web, nếu có).
3. Chưa có `10-brand.md` → báo người dùng và đề xuất chạy `brand-profile` trước. Người dùng vẫn muốn chạy ngay → làm tiếp, ghi rõ trong báo cáo "chưa có hồ sơ thương hiệu", mọi so sánh với thương hiệu đánh dấu `[GIẢ ĐỊNH]`.
4. Trích sẵn cho brief agent: đối thủ, bảng giá, từ khoá, hãng & danh mục, hiện trạng kênh, mục `Khoảng trống dữ liệu`.

## Bước 2 — Phân loại yêu cầu

**Chế độ A — Câu hỏi nhanh** (không ghi đè file `NN-*.md`):

| Loại | Ví dụ | Đầu ra chính |
| --- | --- | --- |
| `doi-thu` | "soi CNTTShop tháng này" | Bảng kênh, follower, tần suất đăng, chiêu bán, mức đe doạ |
| `gia` | "giá E50UG hiện tại" | Bảng giá theo nơi bán, thấp/cao nhất, vị trí giá HNP |
| `tu-khoa` | "ai đang top 'switch cisco'" | Top 10 SERP, ai chạy Ads, loại trang đang thắng |
| `kenh` | "đối thủ làm TikTok thế nào" | Format, tần suất, chủ đề, tương tác ước lượng |
| `xu-huong` | "Ruijie đang có gì mới" | Model mới, khuyến mãi hãng, chính sách bảo hành |
| `noi-dung` | "chủ đề bài viết cho router" | Câu hỏi người dùng hay tìm, khoảng trống nội dung |

**Chế độ B — Research nền** ("chạy full", "chạy nhóm 2", "dùng market-competitors…"): chạy các agent trong `.claude/agents/` theo đúng quy trình ở `CLAUDE.md` (đợt, phụ thuộc, `00-summary.md`, dựng `sources.md`), loại = `tong-hop`. Sau đó vẫn làm Bước 5–6 bên dưới.

**Chế độ C — Khoảng trống SEO** ("tuần này viết gì cho SEO", "phân tích khoảng trống", "gap-analysis"): giao agent `gap-analysis`; loại = `noi-dung`. Agent này tự ghi báo cáo + brief `loai: seo` (khác chế độ A: không dùng Bước 3, không spawn `general-purpose`). Skill chỉ làm Bước 4 (kiểm chứng) và Bước 6 (`sources.md`). Cần số liệu web đã nhập bằng `content-measure`.

**Chế độ D — Trend** ("quét trend", "có trend nào hợp để đăng không", "trend-scout"): giao agent `trend-scout`; loại = `xu-huong`. Agent tự ghi báo cáo + brief `loai: trend`. Skill làm Bước 4 và Bước 6, và nhắc người dùng: bài trend chỉ Facebook/TikTok, phải qua `content-review` + duyệt tay, quá `han_dung` thì bỏ. Luật lọc ở `research/<slug>/trend-rules.md`.

Thiếu đối tượng cụ thể (model, đối thủ, từ khoá) → lấy mặc định từ file research và ghi rõ đã lấy gì. Chỉ hỏi lại khi yêu cầu hiểu được theo nhiều loại và đoán sai thì tốn công.

## Bước 3 — Giao agent (chế độ A)

- Spawn agent `general-purpose` với brief bên dưới. Yêu cầu gồm nhiều loại độc lập → mỗi loại một agent, chạy song song.
- Không dùng các agent `NN` cho câu hỏi nhanh (chúng ghi đè file nền).
- Không có tool Agent → tự chạy brief bằng WebSearch/WebFetch.

Brief gửi agent (điền `{...}`):

```
Bạn là agent research marketing cho Hoàng Nam Phát (HNP) – phân phối thiết bị mạng, camera, tổng đài IP chính hãng, TP.HCM, bán toàn quốc. Website hoangnamphat.vn.

NHIỆM VỤ: {loại} – {mô tả cụ thể}
ĐỐI TƯỢNG: {model / đối thủ / từ khoá}
NGỮ CẢNH TỪ FILE RESEARCH ({tên file}, cập nhật {updated}):
{trích đoạn liên quan: bảng giá, đối thủ, kênh...}

QUY TẮC:
- Chỉ ghi dữ liệu tìm thấy thực tế, mỗi dòng dữ liệu kèm URL nguồn và ngày truy cập.
- Không tìm được → ghi "không tìm thấy", không ước đoán thành số liệu.
- Giá: ghi đúng giá niêm yết, nói rõ có phải giá khuyến mãi/flash sale không. Ưu tiên ≥2 nguồn.
- Số follower/lượt xem: ghi kèm ngày xem.
- Không truy cập trang yêu cầu đăng nhập, không điền form.
- Trả lời tiếng Việt. KHÔNG ghi file.

ĐẦU RA (đúng thứ tự):
1. TÓM TẮT: 3–5 ý chính.
2. DỮ LIỆU: bảng markdown.
3. THAY ĐỔI SO VỚI FILE RESEARCH: mục nào mới, mục nào đã khác (cũ → mới).
4. GỢI Ý CHO CONTENT: insight, câu hỏi/nỗi đau khách, từ ngữ khách dùng (nguyên văn + nguồn).
5. NGUỒN: danh sách URL thật đã truy cập.
```

## Bước 4 — Kiểm chứng

Không chuyển thẳng kết quả agent. Kiểm:
- Mỗi con số có nguồn? Không có → gắn `[CHƯA KIỂM CHỨNG]` hoặc bỏ.
- Giá lệch >15% so với giá trong `21-competitors.md`/`22-vendor-products.md` → mở lại 1 nguồn để xác nhận.
- Model/hãng không có trong `10-brand.md` → giữ trong báo cáo, gắn `(ngoài danh mục HNP)`; **không** đưa vào brief content bán hàng.
- Mâu thuẫn giữa các agent → ghi cả hai, nêu nguồn.

## Bước 5 — Viết 2 file

### 5a. Báo cáo tóm tắt — theo `templates/report.md`
- `report_id`: `R<YYYYMMDD>-<loai>` (trùng trong ngày → thêm `-2`). ID insight/góc/proof: `<report_id>-I1`, `-A1`, `-P1`.
- Chế độ B: báo cáo tóm tắt **những gì lần chạy này thay đổi/phát hiện**, trỏ về ID gốc (`21-I3`…) — không chép lại `00-summary.md`, không tạo ID mới cho insight đã có.

### 5b. Brief content — theo `templates/content-brief.md`
- Điền `loai` trong frontmatter: `seo` (chế độ C), `trend` (chế độ D, kèm `han_dung`), còn lại `tong-hop`.
- Viết cho **người hoặc AI viết content** chưa đọc báo cáo: đủ ngữ cảnh, không cần mở file khác vẫn viết được.
- Chỉ dùng insight/proof đã kiểm chứng; mỗi ý trỏ ID nguồn (`R20261107-gia-P2`, `31-I1`…).
- Persona dùng ID `P-...` từ `31-customers.md`; tên kênh theo `40-channels.md`. Chưa có file đó → mô tả ngắn và ghi `[GIẢ ĐỊNH]`.
- Yêu cầu chỉ để nắm thông tin, không có góc content nào dùng được → vẫn tạo brief, ghi `status: khong-de-xuat` và lý do.

### Quy tắc thương hiệu (áp dụng cho brief & mọi nội dung mẫu)
- Giá ghi "tham khảo"; chỉ dùng model/giá/hãng có trong danh mục HNP.
- Không hứa hỗ trợ 24/7. Địa chỉ chỉ ghi TP.HCM, không nhắc Cần Thơ.
- CTA: hotline/Zalo **0937.813.788** + **hoangnamphat.vn**.
- Phương châm: **"Chính hãng – Giá tốt – Hỗ trợ tận tâm"**.
- Khác biệt để nhấn: tư vấn đúng nhu cầu, thi công, chính hãng có hoá đơn.
- Không so sánh/nêu tên đối thủ trong nội dung quảng cáo.

## Bước 6 — Lưu, đồng bộ & trả lời

1. Ghi 2 file ở Bước 5 (tạo thư mục `reports/`, `briefs/` nếu chưa có).
2. Dựng lại `research/<slug>/sources.md` (quy tắc trong `templates/research-output.md`), gom cả nguồn của file báo cáo mới.
3. Có dữ liệu mới thay thế dữ liệu trong file nền (giá, follower, đối thủ mới…) → **không tự sửa** `NN-*.md`; ghi khối `## Cần cập nhật file nền` trong báo cáo, dạng `file · mục: cũ → mới (nguồn, ngày)`, và hỏi người dùng có muốn cập nhật không.
4. Trả lời người dùng:
   - **Kết luận** — 2–3 câu trả lời thẳng câu hỏi.
   - **Dữ liệu chính** — bảng ngắn đã kiểm chứng.
   - **Đề xuất hành động** — tối đa 3 việc; dựa trên giả định → `[GIẢ ĐỊNH]`.
   - Đường dẫn 2 file đã lưu (link markdown) + số nguồn.
   - Chế độ B: in thêm khối "Trả về" của từng agent như `CLAUDE.md` yêu cầu.
