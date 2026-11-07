---
brand: hoang-nam-phat
report_id: R20261107-xu-huong
loai: xu-huong
cau_hoi: "/hnp-research-chat → chọn 'tin tức mới' (hiểu là tin mới của 5 hãng chủ lực từ sau đợt khảo sát 01/11)"
date: 2026-11-07
confidence: Thấp-TB
sources: 7
depends_on: ["brand.md", "claude/research/2026-11-01-xu-huong-5-hang.md"]
brief: research/hoang-nam-phat/briefs/2026-11-07-xu-huong-tin-moi-5-hang.md
---

# Tin mới 5 hãng (01–07/11/2026) — Hoàng Nam Phát

> Phạm vi: MikroTik, UniFi, Ruijie, Hikvision, Grandstream. Công cụ tìm kiếm không phải Google VN; không vào được FB/TikTok của hãng hay nhà phân phối VN.

## Kết luận
- Trong 7 ngày qua **không có tin nào ảnh hưởng trực tiếp tới 5 model HNP đang bán** (E50UG, RG-EG105G-V3, RG-EG406XS-P, RG-RAP62, RG-RAP2200(E)): không EOL, không đổi bảo hành, không khuyến mãi hãng tìm thấy.
- Tin đáng chú ý nhất là của UniFi: dịch vụ lưu trữ đám mây trả phí và bản vá bảo mật cho console. Cả hai đều chưa có xác nhận hiệu lực tại Việt Nam.
- MikroTik, Ruijie, Hikvision, Grandstream: **không tìm thấy tin mới trong khoảng 01–07/11**.

## Phát hiện chính
- UniFi Cloud Storage ra mắt ngày 02/11: dịch vụ lưu trữ ngoài cho UniFi Drive và UniFi Protect, giá 5 USD/TB/tháng, không phí tải dữ liệu về; khởi điểm chỉ có vùng US East, các vùng khác "dự kiến" [1][2].
- UniFi OS 5.1.35 phát hành 03/11 cho Dream Machine, Cloud Gateway, Enterprise Firewall, chỉ sửa một lỗ hổng bảo mật; đang ở kênh Release Candidate, phát hành dần [3]. Cùng thời điểm có UniFi OS 6.0.17 cho NVR/NAS doanh nghiệp, có cả bản vá bảo mật [4].
- Grandstream: bản mới nhất thấy được vẫn là AP WiFi 7 GWN7671 (29/10), đã có trong đợt 01/11 [5]. Chưa thấy sản phẩm mới tháng 11.
- Ruijie: trang tiếng Việt của hãng có RG-RAP72, RAP72-Wall, RAP72Pro-OD [6]. Việc có trang **chưa chứng minh có hàng chính hãng tại VN**; ở đợt 01/11, trang RAP72Pro từng ghi "chưa có tại khu vực của bạn".
- Hikvision: chưa kiểm chứng được Hik-Connect 7 / HIKO AI miễn phí hay tính phí. Các trang giá tìm thấy là trang tổng hợp, không phải nguồn của hãng → **không dùng**.

## Dữ liệu
| Hãng | Sự kiện | Ngày | Ảnh hưởng tới HNP | Nguồn |
|---|---|---|---|---|
| UniFi | UniFi Cloud Storage, 5 USD/TB/tháng, vùng US East | 02–03/11 | Thấp: dịch vụ đám mây, chưa rõ dùng được ở VN, độ trễ từ VN chưa biết | [1][2] |
| UniFi | UniFi OS 5.1.35 (vá bảo mật, RC, phát dần) | 03/11 | Trung bình nếu khách đang dùng console UniFi do HNP cung cấp | [3] |
| UniFi | UniFi OS 6.0.17 cho NVR/NAS (vá bảo mật, RC) | ~04/11 | Thấp–TB: chỉ liên quan khách dùng UniFi Protect NVR | [4] |
| Grandstream | GWN7671 AP tường WiFi 7, 2 cổng PoE out | 29/10 | Chưa rõ có ở VN; ngoài danh mục HNP | [5] |
| Ruijie | Trang VN của RAP72 series | không rõ ngày | Chưa rõ có hàng tại VN | [6] |
| MikroTik / Hikvision | Không tìm thấy tin mới trong 01–07/11 | – | – | – |

## Đối chiếu file nền
| Mục brand.md | Trước | Nay | Nguồn |
|---|---|---|---|
| Model đang trưng bày (mục 3) | Không có EOL (đợt 01/11) | Không đổi, chưa thấy EOL mới | – |
| Khuyến mãi UniFi giảm 20% (mục 3) | Chương trình riêng HNP | Không tìm thấy KM hãng | – |
| Sản phẩm UniFi/Ruijie gắn nhầm nhãn MikroTik (mục 7) | Còn tồn tại | Chưa kiểm lại | – |

## Đề xuất hành động
1. Với khách đang dùng UniFi do HNP bán: nhắn kiểm tra và cập nhật UniFi OS khi bản 5.1.35 hiện ra ở kênh chính thức. Đây là nội dung dịch vụ hậu mãi, không phải quảng cáo. [GIẢ ĐỊNH: HNP đã bán console UniFi cho khách, cần xác nhận]
2. Không đưa UniFi Cloud Storage vào nội dung bán hàng cho tới khi xác nhận với nhà phân phối UniFi VN về khả năng kích hoạt và vùng lưu trữ.
3. Chưa cần nội dung "tin nóng"; ưu tiên 3 mẫu nội dung bền (WiFi 6 hay WiFi 7, Hik-Connect, 2.5G) đã đề xuất ngày 01/11.

## Dành cho Content
### Insight
| ID | Insight | Bằng chứng | Độ tin cậy |
|---|---|---|---|
| R20261107-xu-huong-I1 | Tuần qua không có thay đổi từ hãng buộc HNP phải sửa thông tin sản phẩm đang bán | Không thấy EOL/bảo hành/KM mới | TB |
| R20261107-xu-huong-I2 | UniFi vừa vá bảo mật console, là cơ hội nhắc khách cũ về cập nhật firmware | [3] | TB |

### Proof points
| ID | Điều có thể nói công khai | Nguồn |
|---|---|---|
| R20261107-xu-huong-P1 | Hãng UniFi vừa phát hành bản UniFi OS 5.1.35 có vá bảo mật cho console; đang phát hành dần | [3] |

### Cần tránh
- Không nói UniFi Cloud Storage "có tại Việt Nam" hoặc đưa giá USD như giá bán của HNP.
- Không nêu tên mã lỗi bảo mật (CVE) hay mô tả chi tiết lỗ hổng trong nội dung quảng cáo.
- Không hứa Hik-Connect/HIKO AI miễn phí.
- Không nhắc GWN7671, RAP72 series như hàng HNP có sẵn khi chưa xác nhận.

## Cần cập nhật file nền
- Chưa có thay đổi nào cần ghi vào `brand.md`.

## Khoảng trống dữ liệu
- Chưa lấy được tin trong tuần từ MikroTik, Ruijie, Hikvision (không thấy bài đăng ngày 01–07/11).
- Không có dữ liệu từ nhà phân phối VN về hàng WiFi 7 (RAP72, GWN7671).
- Hik-Connect 7 / HIKO AI: điều kiện sử dụng và chi phí chưa kiểm chứng.
- Bản vá UniFi OS 5.1.35 mới thấy từ một nguồn tin công nghệ (simon42); nên xác nhận lại trên trang phát hành của UniFi.

## Nguồn
1. [UniFi Cloud Storage Revealed – NAS Compares](https://nascompares.com/2026/11/03/unifi-cloud-storage-revealed-better-option-than-backblaze/) — truy cập 07/11/2026
2. [UniFi Cloud Storage – Hardwareluxx](https://www.hardwareluxx.de/index.php/news/software/browser-und-internet/70842-unifi-cloud-storage-ubiquiti-startet-eigenen-cloud-speicher-fuer-protect-und-drive.html) — truy cập 07/11/2026
3. [UniFi OS 5.1.35 – simon42](https://www.simon42.com/unifi-os-5-1-35-kernel-luecke/) — truy cập 07/11/2026
4. [Ubiquiti Release Notes Nov 2026 – Releasebot](https://releasebot.io/updates/ubiquiti) — truy cập 07/11/2026
5. [Grandstream GWN7671 – Cloud Communications Alliance](https://www.cloudcommunications.com/news/grandstream-introduces-new-wall-mounted-wi-fi-7-access-point) — truy cập 07/11/2026
6. [RG-RAP72 – Reyee Việt Nam](https://reyee.ruijie.com/vi-vn/products/reyee-wireless/reyee-indoor-ap/rg-rap72/) — truy cập 07/11/2026
7. [Ubiquiti Community](https://community.ui.com/) — truy cập 07/11/2026
