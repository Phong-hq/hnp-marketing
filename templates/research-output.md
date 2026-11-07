# Khuôn đầu ra Research (bắt buộc cho mọi research agent)

Mọi file `research/<brand-slug>/NN-*.md` PHẢI theo đúng khuôn dưới đây — cùng frontmatter, cùng thứ tự heading, cùng tên heading. Agent viết content và bước tổng hợp đọc file theo khuôn này, sai heading = mất dữ liệu.

---

## 1. Khuôn file

````markdown
---
brand: hoang-nam-phat            # brand-slug
brand_name: Hoàng Nam Phát
file_id: "21"                    # 10 | 20 21 22 | 30 31 | 40 41 (00 = summary)
group: 2-thi-truong              # 1-thuong-hieu | 2-thi-truong | 3-khach-hang | 4-kenh | 0-tong-hop
agent: market-competitors
title: Phân tích đối thủ cạnh tranh
date: 2026-11-01                 # ngày tạo
updated: 2026-11-01              # ngày cập nhật gần nhất
status: final                    # draft | final
confidence: TB                   # Cao | TB | Thấp — độ tin cậy tổng thể
sources: 18                      # số nguồn trong mục Nguồn
depends_on: ["10"]               # các file research đã đọc
gaps: ["giá sỉ đại lý", "doanh thu đối thủ"]
---

# <title> — <brand_name>

## Tóm tắt
- 3–5 bullet, mỗi bullet là 1 phát hiện quan trọng nhất, có [n].

## <Các mục chuyên môn của agent>
(Theo danh sách mục trong file agent, mỗi mục là một heading `##`.)

## Dành cho Content

### Insight
| ID | Insight | Bằng chứng | Độ tin cậy |
|----|---------|-----------|-----------|
| 21-I1 | ... | [3][5] | Cao |

### Góc content gợi ý
| ID | Góc / thông điệp | Đối tượng | Kênh phù hợp | Dựa trên |
|----|------------------|-----------|--------------|----------|
| 21-A1 | ... | P-chu-nha-pho | TikTok, Facebook | 21-I1 |

### Proof points
| ID | Điều có thể nói công khai (số liệu, chính sách, chứng nhận) | Nguồn |
|----|------------------------------------------------------------|-------|
| 21-P1 | ... | [2] |

### Ngôn ngữ & từ khoá
- `từ/cụm từ` — ngữ cảnh dùng [n]

### Cần tránh
- Khẳng định chưa xác minh, so sánh trực tiếp gây rủi ro pháp lý, chủ đề nhạy cảm... — lý do

## Khoảng trống dữ liệu
- Điều chưa xác minh được — vì sao — cách bổ sung

## Nguồn
1. [Tiêu đề](URL) — truy cập YYYY-MM-DD
2. ...
````

---

## 2. Quy tắc chung

**Định dạng**
- Tiếng Việt, súc tích, ưu tiên bảng/bullet. Không đoạn văn dài quá 4 dòng.
- Heading `##`/`###` giữ **nguyên văn** như khuôn; mục chuyên môn đặt giữa `## Tóm tắt` và `## Dành cho Content`.
- Ngày dạng `YYYY-MM-DD`. Tiền tệ: `1.250.000đ`. Khoảng giá: `1,2–1,8 triệu`.

**ID**
- Dạng `<file_id>-<loại><số>`: `I` = Insight, `A` = Angle (góc content), `P` = Proof point. Ví dụ `30-I3`, `40-A2`.
- ID ổn định: khi cập nhật file, không đánh số lại ID cũ; mục bị loại thì ghi `~~(đã loại)~~` thay vì xoá.
- Mỗi `A` phải trỏ về ít nhất một `I` (cột "Dựa trên"), có thể trỏ sang file khác (`31-I2`).

**Nguồn & độ tin cậy**
- Mọi số liệu/khẳng định có `[n]` trỏ vào mục **Nguồn**.
- Phân biệt **Sự thật** (có nguồn) và **Nhận định** (suy luận): nhận định ghi `(Nhận định · Cao/TB/Thấp)`.
- Không bịa số, không bịa trích dẫn. Không tìm được → ghi `Chưa xác minh` và đưa vào **Khoảng trống dữ liệu** + `gaps`.
- Trích dẫn khách hàng: nguyên văn, trong ngoặc kép, kèm `[n]`; không ghi tên/tài khoản người viết.

**Mục "Dành cho Content"**
- Bắt buộc có đủ 5 tiểu mục. Không có dữ liệu → ghi `Không có` (không xoá heading).
- `Insight`: tối thiểu 3, tối đa 10 — chỉ những gì có thể biến thành thông điệp/nội dung.
- `Proof points`: chỉ điều thương hiệu **được phép nói công khai** và đã xác minh.
- `Cần tránh`: ghi rõ các claim chưa xác minh trong file này để content agent không dùng.

**Cập nhật**
- Chạy lại agent → cập nhật file cũ: giữ phần còn đúng, sửa `updated`, giữ ID.

**Sổ nguồn chung — `research/<brand-slug>/sources.md`**
- **Research agent KHÔNG ghi file này** (các agent chạy song song sẽ ghi đè nhau). Agent chính (người điều phối) dựng lại sổ sau mỗi lần chạy, từ mục `## Nguồn` của tất cả file `NN-*.md` và `reports/*.md` (cột "Dùng trong" ghi `report_id`).
- Một bảng duy nhất, mỗi URL một dòng, **không trùng lặp** (URL đã có → chỉ thêm `file_id` vào cột "Dùng trong" và sửa "Kiểm tra lần cuối"):

  ```markdown
  # Sổ nguồn — <brand_name>
  | URL | Tiêu đề | Loại | Dùng trong | Lần đầu | Kiểm tra lần cuối |
  |-----|---------|------|-----------|---------|-------------------|
  | https://... | ... | Chính hãng | 21, 22 | 2026-11-01 | 2026-11-01 |
  ```
- `Loại` dùng một trong: `Thương hiệu`, `Chính hãng`, `Đối thủ`, `Sàn TMĐT`, `Báo chí`, `Báo cáo ngành`, `Mạng xã hội`, `YouTube`, `Diễn đàn`, `Khác`.
- Sắp xếp theo `Loại` rồi `URL`. Không xoá dòng cũ; link chết → thêm `(hỏng YYYY-MM-DD)` vào Tiêu đề.

**Trả về cho agent gọi** (theo đúng mẫu)

```markdown
**<title>** — `research/<brand-slug>/NN-*.md` · confidence: TB · gaps: 3

Phát hiện chính:
- 3–5 bullet

Link research (N nguồn, đầy đủ trong file & sources.md):
1. [Tiêu đề](URL) — loại
2. ...
```
- Liệt kê **tối đa 15 link quan trọng nhất** (ưu tiên nguồn chính hãng/thương hiệu và nguồn đỡ phát hiện chính); nếu tổng ≤ 15 thì liệt kê hết.
- Link phải là URL thật đã truy cập trong lần chạy — không tạo link đoán.
