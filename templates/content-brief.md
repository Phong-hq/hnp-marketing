# Khuôn brief content (skill `hnp-research`)

File: `research/<brand-slug>/briefs/<YYYY-MM-DD>-<loai>-<chu-de>.md`.
Người đọc: người hoặc AI viết content **chưa đọc báo cáo** — brief phải tự đủ ngữ cảnh. Chỉ chứa thông tin đã kiểm chứng; mỗi ý trỏ ID nguồn.

````markdown
---
brand: hoang-nam-phat
brief_id: B20261107-gia            # B<YYYYMMDD>-<loai>
report: research/hoang-nam-phat/reports/2026-11-07-gia-e50ug.md
date: 2026-11-07
status: san-sang                   # san-sang | khong-de-xuat | da-viet
persona: ["P-chu-nha-pho"]          # ID từ 31-customers.md
kenh: ["Facebook", "TikTok"]         # tên chuẩn theo 40-channels.md
---

# Brief: <tên chủ đề>

## Mục tiêu
1–2 câu: nội dung này để làm gì (nhận biết / tư vấn / chốt đơn / SEO), đo bằng gì.

## Đối tượng
- Persona: `P-...` — họ là ai, đang gặp vấn đề gì, đang tìm gì (dựa trên `31-I...`).
- Mức hiểu biết kỹ thuật: thấp / trung bình / cao.

## Thông điệp chính
- **1 câu** khách cần nhớ.
- 2–3 ý hỗ trợ, mỗi ý trỏ ID (`R...-I1`, `21-I2`).

## Góc content đề xuất
| # | Góc / tiêu đề gợi ý | Kênh | Định dạng | Dựa trên |
|---|---------------------|------|-----------|----------|
| 1 | ... | Facebook | Bài + ảnh so sánh | R20261107-gia-I1 |

## Dữ liệu được phép dùng
| Nội dung | Ghi chú dùng | ID / nguồn |
|----------|-------------|-----------|
| Giá tham khảo E50UG: ... (ngày ...) | Ghi "giá tham khảo" | R20261107-gia-P1 |

## Từ ngữ của khách
- `cụm từ khách dùng` — ngữ cảnh (nguồn)
- Từ khoá SEO (nếu bài web): chính / phụ.

## Cần tránh
- Claim chưa xác minh, model ngoài danh mục, so sánh/nêu tên đối thủ, hứa 24/7, nhắc Cần Thơ...

## Quy tắc thương hiệu
- Tone: (lấy từ `10-brand.md` · Tone & nhận diện).
- Phương châm: "Chính hãng – Giá tốt – Hỗ trợ tận tâm".
- CTA: hotline/Zalo 0937.813.788 + hoangnamphat.vn. Địa chỉ: TP.HCM.

## Yêu cầu đầu ra
- Số bài / độ dài / định dạng cho từng kênh (vd: 1 bài Facebook 150–250 chữ + 1 kịch bản TikTok 30–45s).
- Người viết ghi đường dẫn bài đã viết vào đây và đổi `status: da-viet`.
````
