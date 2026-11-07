---
name: hnp-research-chat
description: "Dùng trên claude.ai chat. Khi cần research marketing cho Hoàng Nam Phát (đối thủ, giá model, từ khóa SEO, kênh social, xu hướng hãng/sản phẩm, ý tưởng nội dung): research theo brand.md, kiểm chứng, rồi xuất báo cáo tóm tắt + brief cho người/AI viết content."
---

# HNP Research (bản claude.ai chat)

Biến một yêu cầu research ngắn thành brief chuẩn, research, kiểm chứng, rồi xuất **2 tài liệu**:
1. **Báo cáo tóm tắt** — `research/hoang-nam-phat/reports/<YYYY-MM-DD>-<loai>-<chu-de>.md`
2. **Brief content** — `research/hoang-nam-phat/briefs/<YYYY-MM-DD>-<loai>-<chu-de>.md`

Đường dẫn trên là vị trí trong repo `hnp-marketing`; người dùng sẽ chép 2 tài liệu vào đó. `<chu-de>`: không dấu, gạch nối, ≤ 5 từ.

## Bước 1 — Nạp ngữ cảnh thương hiệu
1. Đọc `brand.md` (và `brand.json` nếu có) trong Project — nguồn sự thật về thương hiệu.
2. Không đọc được → dừng, báo người dùng. Không research khi thiếu ngữ cảnh.
3. Trích sẵn: đối thủ, bảng giá, từ khoá SEO, danh mục & hãng, hiện trạng kênh, tone giọng, các mục [THIẾU].

## Bước 2 — Phân loại yêu cầu

| Loại | Ví dụ | Đầu ra chính |
| --- | --- | --- |
| `doi-thu` | "soi CNTTShop tháng này" | Bảng kênh, follower, tần suất đăng, chiêu bán, mức đe doạ |
| `gia` | "giá E50UG hiện tại" | Bảng giá theo nơi bán, thấp/cao nhất, vị trí giá HNP |
| `tu-khoa` | "ai đang top 'switch cisco'" | Top 10 SERP, ai chạy Ads, loại trang đang thắng |
| `kenh` | "đối thủ làm TikTok thế nào" | Format, tần suất, chủ đề, tương tác ước lượng |
| `xu-huong` | "Ruijie đang có gì mới" | Model mới, khuyến mãi hãng, chính sách bảo hành |
| `noi-dung` | "chủ đề bài viết cho router" | Câu hỏi người dùng hay tìm, khoảng trống nội dung |

Thiếu đối tượng cụ thể → lấy mặc định từ brand.md và ghi rõ đã lấy gì. Chỉ hỏi lại khi yêu cầu hiểu được theo nhiều loại và đoán sai thì tốn công.

## Bước 3 — Research
Tự research bằng web search / web fetch (có tool giao việc cho agent con thì giao, mỗi loại độc lập một agent). Quy tắc:
- Chỉ ghi dữ liệu tìm thấy thực tế, mỗi dòng kèm URL nguồn và ngày truy cập.
- Không tìm được → ghi "không tìm thấy", không ước đoán thành số liệu.
- Giá: đúng giá niêm yết, nói rõ có phải khuyến mãi/flash sale không; ưu tiên ≥ 2 nguồn.
- Follower/lượt xem: kèm ngày xem. Không vào trang cần đăng nhập, không điền form.

## Bước 4 — Kiểm chứng
- Mỗi con số có nguồn? Không → gắn `[CHƯA KIỂM CHỨNG]` hoặc bỏ.
- Giá lệch > 15% so với brand.md → mở lại 1 nguồn để xác nhận.
- Model/hãng không có trong brand.md → giữ trong báo cáo, gắn `(ngoài danh mục HNP)`; không đưa vào brief content.
- Mâu thuẫn giữa các nguồn → ghi cả hai.

## Bước 5 — Viết 2 tài liệu

### 5a. Báo cáo tóm tắt
`report_id` = `R<YYYYMMDD>-<loai>`; ID: `<report_id>-I1` (insight), `-P1` (proof point).

````markdown
---
brand: hoang-nam-phat
report_id: R20261107-gia
loai: gia
cau_hoi: "<nguyên văn yêu cầu>"
date: YYYY-MM-DD
confidence: TB            # Cao | TB | Thấp
sources: <số nguồn>
depends_on: ["brand.md"]
brief: research/hoang-nam-phat/briefs/<cùng tên>.md
---

# <Tiêu đề ngắn> — Hoàng Nam Phát

## Kết luận
2–3 câu trả lời thẳng câu hỏi, có [n].

## Phát hiện chính
- 3–5 bullet, có [n].

## Dữ liệu
Bảng markdown đã kiểm chứng.

## Đối chiếu file nền
| Mục brand.md | Trước | Nay | Nguồn |
|---|---|---|---|

## Đề xuất hành động
1. Tối đa 3 việc, gắn với khác biệt của HNP. Dựa trên mục [THIẾU] → `[GIẢ ĐỊNH]`.

## Dành cho Content
### Insight
| ID | Insight | Bằng chứng | Độ tin cậy |
|---|---|---|---|
### Proof points
| ID | Điều có thể nói công khai | Nguồn |
|---|---|---|
### Cần tránh
- ...

## Cần cập nhật file nền
- `brand.md · mục`: cũ → mới ([n], YYYY-MM-DD)

## Khoảng trống dữ liệu
- ...

## Nguồn
1. [Tiêu đề](URL) — truy cập YYYY-MM-DD
````

### 5b. Brief content
Viết cho người hoặc AI viết content **chưa đọc báo cáo**: đủ ngữ cảnh, chỉ thông tin đã kiểm chứng, mỗi ý trỏ ID.

````markdown
---
brand: hoang-nam-phat
brief_id: B20261107-gia
report: research/hoang-nam-phat/reports/<cùng tên>.md
date: YYYY-MM-DD
status: san-sang          # san-sang | khong-de-xuat
persona: ["<mô tả ngắn hoặc P-...>"]
kenh: ["Facebook", "Website"]
---

# Brief: <chủ đề>

## Mục tiêu
1–2 câu: nhận biết / tư vấn / chốt đơn / SEO; đo bằng gì.

## Đối tượng
- Ai, đang gặp vấn đề gì, đang tìm gì. Mức hiểu kỹ thuật.

## Thông điệp chính
- 1 câu khách cần nhớ.
- 2–3 ý hỗ trợ, mỗi ý trỏ ID.

## Góc content đề xuất
| # | Góc / tiêu đề gợi ý | Kênh | Định dạng | Dựa trên |
|---|---|---|---|---|

## Dữ liệu được phép dùng
| Nội dung | Ghi chú dùng | ID / nguồn |
|---|---|---|

## Từ ngữ của khách
- `cụm từ` — ngữ cảnh (nguồn). Từ khoá SEO chính / phụ (nếu có blog).

## Cần tránh
- ...

## Quy tắc thương hiệu
- Tone: theo brand.md.
- Phương châm: "Chính hãng – Giá tốt – Hỗ trợ tận tâm".
- CTA: hotline/Zalo 0937.813.788 + hoangnamphat.vn. Địa chỉ: TP.HCM.

## Yêu cầu đầu ra
- Số bài / độ dài / định dạng từng kênh (vd 1 bài Facebook 150–250 chữ + 1 blog 800–1.200 chữ có 3–5 ảnh).
````

### Quy tắc thương hiệu (cho brief & nội dung mẫu)
- Giá ghi "tham khảo"; chỉ dùng model/giá/hãng có trong brand.md.
- Không hứa hỗ trợ 24/7. Địa chỉ chỉ ghi TP.HCM, không nhắc Cần Thơ.
- CTA: hotline/Zalo 0937.813.788 + hoangnamphat.vn.
- Khác biệt để nhấn: tư vấn đúng nhu cầu, thi công, chính hãng có hoá đơn.
- Không so sánh/nêu tên đối thủ trong nội dung quảng cáo.

## Bước 6 — Xuất & trả lời
1. Ghi 2 tài liệu:
   - Có quyền ghi file Project → `project_write` đúng 2 đường dẫn ở đầu skill.
   - Không ghi được → in mỗi tài liệu trong **một khối code markdown riêng**, dòng trên khối ghi đường dẫn file, để người dùng copy vào repo.
2. Không tự sửa brand.md/brand.json; thay đổi đã ghi trong mục `Cần cập nhật file nền`.
3. Trả lời ngắn trước 2 tài liệu: **Kết luận** (2–3 câu), **Dữ liệu chính** (bảng ngắn), **Đề xuất hành động** (≤ 3), số nguồn.
