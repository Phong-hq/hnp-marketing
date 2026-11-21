---
brand: hoang-nam-phat
brand_name: Hoàng Nam Phát
file: trend-rules
status: de-xuat            # de-xuat | da-xac-nhan — người dùng/HNP đổi sang da-xac-nhan sau khi duyệt
updated: 2026-11-08
---

# Quy tắc lọc trend — Hoàng Nam Phát

Agent `trend-scout` đọc file này trước mỗi lần quét. Mọi mục dưới đây là **mặc định đề xuất**, chưa được HNP xác nhận; sửa trực tiếp file này, agent sẽ theo bản mới nhất. Chỉ cần đổi `status: da-xac-nhan` khi đã duyệt.

## 1. Cổng loại bỏ (trượt 1 cổng là loại, không cân nhắc thêm)

| # | Cổng | Loại ngay nếu |
|---|------|---------------|
| G1 | Chủ đề cấm | Chạm vào bất kỳ mục ở phần 2 |
| G2 | Hợp thương hiệu | Phải chế giễu khách hàng, hãng, đối thủ hoặc người thật để trend "chạy" |
| G3 | Cầu nối sản phẩm | Không nối được với nhóm hàng HNP bán qua ≤ 1 bước hợp lý (phần 3) |
| G4 | Còn hạn | Trend đã hạ nhiệt, hoặc không còn đăng kịp trong hạn dùng (phần 5) |
| G5 | Kiểm chứng | Không xác định được trend đến từ đâu (không có nguồn/URL/ngày) |

## 2. Chủ đề cấm (đề xuất)

- Chính trị, tôn giáo, sắc tộc, vùng miền, giới tính, ngoại hình
- Thiên tai, tai nạn, dịch bệnh, án mạng, tang sự
- Drama, scandal, "bóc phốt" liên quan người thật hoặc doanh nghiệp thật
- Nội dung người lớn, cờ bạc, cá độ, vay nóng, tiền ảo
- Tên, mặt, giọng người nổi tiếng; nhạc/âm thanh/clip chưa rõ bản quyền
- Nêu tên hoặc ám chỉ đối thủ; chê bai hãng khác
- Nỗi sợ bị trộm, bị theo dõi, bị lừa dùng để dọa khách mua camera

## 3. Cầu nối trend → sản phẩm

HNP bán: thiết bị mạng, camera, tổng đài IP (chính hãng, có hoá đơn, tư vấn và thi công).

Cầu nối chỉ dựa trên **nỗi đau quen thuộc**, không dựa trên thông số kỹ thuật hay hiệu năng:

| Nỗi đau / tình huống đời thường | Nhóm hàng có thể móc |
|---------------------------------|----------------------|
| Wi-Fi yếu, giật lag, rớt mạng | Thiết bị mạng (router, access point, switch) |
| Nhiều người cùng dùng mạng, họp online, chơi game | Thiết bị mạng |
| Muốn xem lại cửa hàng/nhà khi vắng mặt | Camera |
| Điện thoại bàn, tổng đài cho văn phòng nhỏ | Tổng đài IP |
| Lắp đặt lằng nhằng, dây rối | Dịch vụ tư vấn, thi công |

Quy tắc viết cầu nối:
- Câu móc chỉ gợi ra nỗi đau rồi mời nhắn tư vấn. **Không** thêm thông số, tốc độ, so sánh, giá, hay lời hứa kết quả.
- Mọi số liệu/claim về sản phẩm chỉ lấy từ báo cáo hoặc brief đã kiểm chứng (ID `R...-P<n>`); trend không phải lý do để nới lỏng việc này.

## 4. Kênh và hình thức

- Chỉ **Facebook** và **TikTok**. Không đăng lên Website (tránh loãng chủ đề SEO), không gửi hàng loạt qua Zalo.
- Bài ngắn: Facebook 40–100 chữ + 1 ảnh/meme tự tạo; TikTok kịch bản 10–25 giây.
- Giọng: chuyên nghiệp, thân thiện, dễ hiểu; hài nhẹ về nỗi đau mạng/camera, không lố.
- Mọi bài trend **phải qua `content-review` và được người dùng duyệt tay** trước khi đăng. `trend-scout` không đăng bài.

## 5. Nhịp độ và hạn dùng

- Mỗi lần quét chọn **tối đa 3** trend. Không có trend nào qua cổng → brief `status: khong-de-xuat` (đây là kết quả bình thường).
- `han_dung` mặc định = ngày quét + 2 ngày. Quá hạn mà chưa đăng → brief chuyển `het-han`, không đăng nữa.
- Bài trend không nên chiếm quá khoảng 1/3 lịch đăng, để làn SEO và tư vấn vẫn là chính.

## 6. Cách đánh giá hiệu quả

- Không chấm bài trend chỉ bằng lượt xem. Chỉ coi là hiệu quả nếu có **tin nhắn/lead** hoặc lượt vào trang tăng rõ ràng.
- `content-measure` ghi cột `Loại = trend` để so riêng với bài SEO/tư vấn. Cần ≥ 3 bài trend cùng kênh mới kết luận; ít hơn thì độ tin cậy Thấp.
