---
brand: hoang-nam-phat
brief_id: B20261114-tong-hop-chon-router-mikrotik
loai: tong-hop
report:
date: 2026-11-14
han_dung:
status: da-viet
persona: ["P-ky-thuat-vien", "P-sme-van-phong", "P-chu-quan"]
kenh: ["Website", "Facebook"]
---

# Brief: Chọn router MikroTik theo quy mô — 6 mã từ hEX S đến CCR2116

## Mục tiêu
Giúp khách tự xếp nhu cầu của mình vào đúng mức router MikroTik (từ văn phòng nhỏ tới hệ thống 10G), để không mua dư hoặc mua thiếu, rồi nhắn Zalo HNP chốt model. Đo bằng tin nhắn Zalo hỏi MikroTik và (khi có Search Console) hiển thị cho từ khoá tên model.

## Đối tượng
- `P-ky-thuat-vien`: thợ/IT biết RouterOS, cần so nhanh cổng, license, nguồn, thông lượng (31-I4, 31-I5).
- `P-sme-van-phong`: văn phòng nhiều WAN, VLAN, chi nhánh, cần biết lúc nào phải lên dòng CCR (31-I13).
- `P-chu-quan`: quán/cửa hàng, chỉ cần biết mức nhỏ nhất đủ dùng.
- Mức hiểu biết: trung bình đến cao. Giải nghĩa ngắn các từ SFP, SFP+, license level, nguồn kép.

## Thông điệp chính
- **Chọn MikroTik theo số cổng, tốc độ đường truyền và người vận hành, không chọn theo con số lớn nhất.**
- MikroTik linh hoạt nhưng cần người biết RouterOS hoặc thợ cấu hình; HNP hỗ trợ cấu hình (31-I5, 10-P5).
- Số thông lượng của hãng là kết quả đo trong phòng thử nghiệm; bật nhiều rule, queue, VPN thì chạy thực tế thấp hơn (30-I3: khách nghi ngờ số quảng cáo, nói rõ điều kiện tạo niềm tin).
- Tư vấn đúng nhu cầu, tránh đầu tư dư thừa (10-I2).

## Góc content đề xuất
| # | Góc / tiêu đề gợi ý | Kênh | Định dạng | Dựa trên |
|---|---------------------|------|-----------|----------|
| 1 | "Chọn router MikroTik theo quy mô: 6 mã từ hEX S đến CCR2116" — 4 câu hỏi tự xác định nhu cầu, 6 mã xếp theo mức, bảng so nhanh, FAQ | Website | Bài blog 1.200–1.500 từ, mục lục, bảng, FAQ 5–6 câu | 10-I2, 31-I5 |
| 2 | "Văn phòng bạn cần MikroTik nào? 6 mức từ nhỏ đến lớn" — mỗi mã 1 dòng, mời nhắn Zalo số WAN, số cổng, tốc độ gói cước | Facebook | 1 bài 150–220 từ + 1 ảnh bảng | 10-I2 |

## Dữ liệu được phép dùng
Chỉ dùng thông số trong `content/hoang-nam-phat/2026-11-14-gioi-thieu-mikrotik/website.md` (lấy từ trang chính hãng mikrotik.com, truy cập 2026-11-14). Tóm tắt:

| Mã | Điểm chính (theo hãng) | Hợp với |
|----|------------------------|---------|
| E60iUGS (hEX S 2025) | 5 × 1G, SFP 2.5G, USB 3.0, PoE-out Ether5, L4, routing ~3,6 Gbps (1518B, không rule) | Gia đình, cửa hàng, văn phòng nhỏ |
| L009UiGS-RM | 8 × 1G, SFP 2.5G, rack, không quạt, L5, ~3,4 Gbps / ~970 Mbps (25 filter rules) | Văn phòng có tủ mạng |
| RB5009UG+S+IN | 7 × 1G, 1 × 2.5G, SFP+ 10G, 4 nhân, 1 GB RAM, 3 cách cấp nguồn, L5, ~9,9 Gbps / ~9,4 Gbps (25 filter rules) | Đường truyền ≥ 1 Gbps, cần cổng 2.5G |
| RB1100AHx4 | 13 × 1G, rack 1U, nguồn kép AC + PoE-in, không quạt, L6, IPsec ~1 Gbps (1 tunnel AES-128) | Nhiều cổng, VPN chi nhánh, không cần 10G |
| CCR2004-16G-2S+ | 16 × 1G, 2 × SFP+ 10G, 4 GB RAM, nguồn kép, 2 quạt, L6, ~35 Gbps / ~8,7 Gbps (25 filter rules) | SME nhiều WAN, VLAN, uplink 10G |
| CCR2116-12G-4S+ | 13 × 1G, 4 × SFP+ 10G, 16 nhân, 16 GB RAM, nguồn kép, L6, ~39 Gbps (cả khi 25 filter rules), L3HW ~51 Gbps | Hệ thống 10G, nhiều chi nhánh, ISP |

| Proof point | ID |
|---|---|
| Hàng chính hãng, CO/CQ, hóa đơn điện tử | 10-P1, 10-P4 |
| Giao toàn quốc, miễn phí nội thành TP.HCM | 10-P3 |
| Tư vấn và cài đặt tận nơi, hỗ trợ 08:00–18:00 | 10-P5 |

## Từ ngữ của khách
- `cân bằng tải`, `2 WAN`, `gộp băng thông` — khách hỏi router MikroTik (30, 41)
- `chịu tải bao nhiêu user`, `đường 1Gb` — cách khách đo nhu cầu (30, 31)
- `RouterOS`, `cấu hình`, `nhờ thợ` — rào cản khi chọn MikroTik (31-I5)
- Từ khoá web: chính `chọn router mikrotik`; phụ `mikrotik rb5009 giá`, `mikrotik ccr2004`, `mikrotik l009`, `hex s 2025`, `router mikrotik cho văn phòng` (chưa có trong 41, chưa có số lượt tìm kiếm).

## Cần tránh
- Nêu giá cụ thể hoặc giá USD của hãng; chỉ ghi "giá tham khảo, liên hệ 0937.813.788".
- Nói "có sẵn hàng"/"đang bán" khi HNP chưa xác nhận (6 mã chưa thấy trên website).
- Dùng số thông lượng như cam kết thực tế; luôn ghi "theo bảng test của hãng".
- Số "user" tối đa cho từng mã (hãng không công bố).
- Nêu thời hạn bảo hành; hứa 24/7; nhắc Cần Thơ; nêu tên đối thủ.
- Nêu tín hiệu cổng ether1 của E50UG (chưa xác minh, 31-I14).

## Quy tắc thương hiệu
- Tone: tư vấn, rõ ràng, ngôi "chúng tôi"; tiêu đề dạng câu hỏi quyết định mua như bài review E50UG (10-brand · Tone).
- Phương châm: "Chính hãng – Giá tốt – Hỗ trợ tận tâm".
- CTA: hotline/Zalo 0937.813.788 + hoangnamphat.vn. Địa chỉ: TP.HCM.

## Yêu cầu đầu ra
- Website: 1 bài blog 1.200–1.500 từ (góc 1), mục lục, bảng so nhanh 6 mã, FAQ 5–6 câu, CTA Zalo đầu và cuối; 2 ô ảnh kèm `pomelli.md`.
- Facebook: 1 bài 150–220 từ (góc 2) + gợi ý ảnh bảng.
- Người viết ghi đường dẫn bài đã viết vào đây và đổi `status: da-viet`.

## Bài đã viết (2026-11-14, status nhap)
- `content/hoang-nam-phat/2026-11-14-tong-hop-chon-router-mikrotik/blog.md`
- `content/hoang-nam-phat/2026-11-14-tong-hop-chon-router-mikrotik/pomelli.md`
- `content/hoang-nam-phat/2026-11-14-tong-hop-chon-router-mikrotik/facebook.md`
