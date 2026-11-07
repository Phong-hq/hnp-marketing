# Khuôn báo cáo tóm tắt (skill `hnp-research`)

File: `research/<brand-slug>/reports/<YYYY-MM-DD>-<loai>-<chu-de>.md`. Quy tắc nguồn, định dạng số/ngày, phân biệt Sự thật/Nhận định: giống `templates/research-output.md`.

````markdown
---
brand: hoang-nam-phat
brand_name: Hoàng Nam Phát
report_id: R20261107-gia          # R<YYYYMMDD>-<loai>
loai: gia                         # doi-thu | gia | tu-khoa | kenh | xu-huong | noi-dung | tong-hop
cau_hoi: "Giá E50UG hiện tại thế nào?"   # nguyên văn yêu cầu của người dùng
date: 2026-11-07
confidence: TB                    # Cao | TB | Thấp
sources: 6
depends_on: ["10", "21"]          # file nền đã đọc
brief: research/hoang-nam-phat/briefs/2026-11-07-gia-e50ug.md
---

# <Tiêu đề ngắn> — Hoàng Nam Phát

## Kết luận
2–3 câu trả lời thẳng câu hỏi, có [n].

## Phát hiện chính
- 3–5 bullet, mỗi bullet có [n].

## Dữ liệu
Bảng markdown đã kiểm chứng. Giá ghi kèm nơi bán, ngày, có phải khuyến mãi không.

## Đối chiếu file nền
| File · mục | Trước | Nay | Nguồn |
|-----------|-------|-----|-------|
| 21 · Bảng so sánh | ... | ... | [2] |
(Không có thay đổi → ghi `Không có thay đổi`.)

## Đề xuất hành động
1. Tối đa 3 việc, gắn với khác biệt của HNP. Dựa trên giả định → `[GIẢ ĐỊNH]`.

## Dành cho Content
### Insight
| ID | Insight | Bằng chứng | Độ tin cậy |
|----|---------|-----------|-----------|
| R20261107-gia-I1 | ... | [1][3] | Cao |

### Proof points
| ID | Điều có thể nói công khai | Nguồn |
|----|--------------------------|-------|
| R20261107-gia-P1 | ... | [2] |

### Cần tránh
- Claim chưa xác minh, model ngoài danh mục... — lý do

## Cần cập nhật file nền
- `21-competitors.md · Bảng so sánh`: cũ → mới ([n], YYYY-MM-DD)
(Không có → ghi `Không có`.)

## Khoảng trống dữ liệu
- Điều chưa xác minh — vì sao — cách bổ sung

## Nguồn
1. [Tiêu đề](URL) — truy cập YYYY-MM-DD
````
