---
brand: hoang-nam-phat
brand_name: Hoàng Nam Phát
file_id: "30"
group: 3-khach-hang
agent: customer-youtube
title: Khách nói gì trên YouTube
date: 2026-11-08
updated: 2026-11-14
status: final
confidence: TB
sources: 73
depends_on: ["10","21","22"]
gaps: ["mẫu B2B vẫn nhỏ (148 comment MikroTik/Ruijie/UniFi); kênh chính hãng VN gần như không có comment", "mã hoá chủ đề bằng từ khoá, chưa đọc tay toàn bộ", "chưa có comment nhắc trực tiếp Hoàng Nam Phát", "UPS Santak/Cyber Power: rất ít comment (63 comment ngoài video DIY)", "Wifi 7 văn phòng: mẫu 19 comment", "tín hiệu E50UG ether1 ~200Mbps chỉ từ video tiếng Bồ/Indonesia, chưa xác minh", "video tiếng Anh/Indonesia/Bồ Đào Nha bị loại khỏi mẫu %"]
---

# Khách nói gì trên YouTube — Hoàng Nam Phát

## Tóm tắt
- Mẫu mã hoá gộp 1.314 comment tiếng Việt (1.023 lượt 2026-11-08 + 291 lượt 2026-11-14, 31 từ khoá): khách quan tâm nhiều nhất là so sánh hãng/chọn mua (~22%), cài đặt & cấu hình (~18%), phủ sóng/mesh (~16%) và hiệu năng/chịu tải (~16%) (% của lượt 1, đa nhãn, tính bằng từ khoá; xem Phạm vi) [1][2][7][23][26].
- Mảng router/AP doanh nghiệp (MikroTik, Ruijie, UniFi) vẫn ít comment (148 comment đã mã hoá, ~11% mẫu): kênh chính hãng VN (MVN, UniFi Việt Nam, Ruijie Reyee Vietnam) 0–8 comment/video; câu hỏi sâu nhất ở MVN (cân bằng tải + NAT để xem camera từ xa, VPN chi nhánh khác hãng, PPPoE MTU). Tín hiệu chưa xác minh: 2 video nước ngoài báo E50UG chỉ ~200Mbps ở cổng ether1 trên đường 1Gb [2][3][8][47][48][52][53][55][56].
- Khách xin giá ngay dưới video và bỏ đi nếu web không có giá (36 comment lượt 1; lượt 2: ~18% trong 99 comment camera Hikvision, ~13% trong 63 comment UPS). Khách camera còn hay hỏi đầu ghi/đầu thu (~25%) và người đã mua camera wifi muốn thêm đầu ghi [5][8][12][13][58][59][60].
- UPS (mảng mới của HNP): comment ít và lệch sang UPS 12V tự chế (84/147 comment ở một video 53.114 view); khách hỏi "dùng được bao lâu", kéo nổi router + switch PoE + đầu ghi không, và lo an toàn. Santak/Cyber Power gần như không có thảo luận [64][65][66][67][68].
- Phân vân Wifi 6 hay Wifi 7: nhiều comment cho rằng Wifi 6 đủ, Wifi 7 cần thiết bị hỗ trợ + 6GHz; một số khách vẫn tin VN chưa cấp phép 6GHz, trong khi nguồn thứ cấp cho biết 5925–6425 MHz đã mở từ 2025 (chưa đối chiếu văn bản gốc) [23][24][25][70][72][73]. Không có comment nào nhắc "Hoàng Nam Phát"; đối thủ (CNTT SHOP, Việt Tuấn, WIFI.COM.VN, Việt Hàn Security) nhận nhiều comment hỏi giá ít phản hồi hiển thị [1][5][12][59][60].

## Phạm vi dữ liệu
| Mục | Giá trị |
|-----|---------|
| Số từ khoá | 18 (7 lượt chạy script, chia nhóm) |
| Video quét | 152 duy nhất; 95 video có comment; 11 video bị loại (lệch chủ đề hoặc không phải tiếng Việt) |
| Comment thô | 1.529 |
| Comment đã mã hoá (mẫu số %) | 1.023 (sau khi loại spam/link/số điện thoại, comment dưới 12 ký tự, comment không phải tiếng Việt) |
| Phân bổ mẫu | mesh/Wifi 7 phổ thông 556; camera 323; MikroTik 69; Ruijie 39; lắp wifi DN 19; UniFi 14; kênh đối thủ 3 |
| Thời gian video | đăng từ 2024-01-01 đến 2026-11 |
| Ngày thu thập | 2026-11-08 |
| Quota dùng | khoảng 1.966 / 10.000 |
| Raw | `research/hoang-nam-phat/youtube/raw/` (mikrotik, ruijie, unifi, lap-wifi, mesh-wifi7, camera, doi-thu: `.json` + `.txt`) |

Từ khoá đã chạy:
- MikroTik: `cấu hình mikrotik cân bằng tải`, `router mikrotik hEX E50UG`, `mikrotik cho quán cafe văn phòng`
- Ruijie: `wifi Ruijie Reyee`, `Ruijie EG105G cân bằng tải`, `wifi ruijie quán cafe`
- UniFi: `wifi unifi văn phòng`, `UniFi U7 wifi 7 review`
- Lắp đặt DN: `lắp wifi cho quán cafe khách sạn`, `thiết kế mạng wifi văn phòng doanh nghiệp`
- Gia đình/Wifi 7: `wifi mesh nhà nhiều tầng`, `wifi 7 có nên mua`, `nên mua router wifi nào`
- Camera: `lắp đặt camera Hikvision`, `camera Ezviz lắp đặt cài đặt`, `camera wifi nên mua hãng nào`
- Đối thủ: `CNTTShop`, `Việt Tuấn thiết bị mạng`

Giới hạn quan trọng:
- Cách mã hoá: lọc spam + gán nhãn chủ đề bằng từ khoá (một comment có thể thuộc nhiều chủ đề, nên tổng % lớn hơn 100%). Các trích dẫn và nhận định bên dưới đọc tay từ top comment theo like. % chỉ là chỉ báo (Nhận định · TB).
- Mẫu lệch: 86% comment đến từ chủ đề gia đình (mesh/Wifi 7, camera) vì video lớn nằm ở đó; video về MikroTik/Ruijie/UniFi chỉ có vài nghìn view, comment ít.
- Video tiếng Anh `digiblur DIY` về lỗi UniFi U7 Pro (647 comment) bị loại khỏi mẫu % nhưng dùng làm tín hiệu tham khảo [44].
- Comment được lấy theo thứ tự `relevance`, tối đa 100 comment/video; không lấy tên người viết.

Bổ sung 2026-11-14 (lượt chạy thứ 2):
| Mục | Giá trị |
|-----|---------|
| Từ khoá mới | 13 (5 lượt chạy script), tổng cộng 31 từ khoá |
| Video | 98 lượt kết quả; 72 video mới (chưa có trong lượt 2026-11-08), 45 video mới có comment; 26 lượt kết quả trùng lượt trước (không đếm lại) |
| Comment thô (video mới) | 412 |
| Comment đã mã hoá (video mới, mẫu số cho bảng "chủ đề mới") | 291 (sau khi loại spam/link/số điện thoại 10, dưới 12 ký tự 30, không phải tiếng Việt 58, lệch chủ đề 23 — video bình lưu điện cửa cuốn) |
| Mẫu gộp | 1.023 + 291 = 1.314 comment đã mã hoá; % của bảng cũ vẫn tính trên 1.023 (không tính lại) |
| Phân bổ mẫu mới | Hikvision/camera lắp đặt 99; UPS 147 (84 ở một video UPS DIY 12V); B2B mới 26 (MikroTik/Ruijie/UniFi/kênh chính hãng); Wifi 7 văn phòng 19 |
| Thời gian video | đăng từ 2024-01-01 đến 2026-11 |
| Ngày thu thập | 2026-11-14 |
| Quota dùng | 1.403 (432 + 217 + 215 + 324 + 215); tổng hai lượt ~3.369 |
| Raw | `research/hoang-nam-phat/youtube/raw/` thêm: `b2b-moi`, `kenh-chinh-hang`, `hikvision-lap`, `ups`, `wifi7-vanphong` (`.json` + `.txt`) |

Từ khoá mới (2026-11-14):
- B2B: `mikrotik e50ug`, `ruijie reyee cấu hình`, `unifi việt nam`, `ruijie rap2200`
- Kênh chính hãng: `Ruijie Reyee Việt Nam chính hãng`, `MikroTik Việt Nam`
- Hikvision: `báo giá lắp camera hikvision trọn gói`, `camera hikvision có nên mua`
- UPS: `UPS cho camera`, `bộ lưu điện UPS cho văn phòng`, `UPS Santak Cyber Power`
- Wifi 7 văn phòng: `wifi 7 cho văn phòng`, `access point wifi 7 doanh nghiệp`

Giới hạn thêm:
- Mẫu mới nhỏ và lệch: 84/147 comment UPS đến từ một video tự chế UPS 12V giá 108K (bị chê về dung lượng pin); video UPS Santak/Cyber Power chỉ có 0–15 comment. Ngoài video này, mẫu UPS còn 63 comment. Kênh chính hãng VN: 23 comment tải về, 14 đã mã hoá.
- Nhiều video kết quả của `ruijie rap2200`/`mikrotik e50ug` là tiếng Indonesia/Bồ Đào Nha/Anh (58 comment loại); chỉ dùng làm tín hiệu tham khảo, ghi rõ ngôn ngữ [47][48].
- % của mẫu mới mã hoá bằng từ khoá + đọc tay top comment (Nhận định · TB), không ghép vào % bảng cũ.

## Video nguồn
Top 15 theo mức liên quan tới danh mục của Hoàng Nam Phát (các video còn lại trong `## Nguồn`).
| Tiêu đề | Kênh | Views | Số comment | Link |
|---------|------|-------|-----------|------|
| Cấu hình Cân bằng tải PPPoE và 1 WAN trên Router Mikrotik | CNTT SHOP | 4.475 | 41 | [2] |
| Cấu hình cân bằng tải PCC 2 WAN trên MikroTik (RouterOS v7+) | Công Nghệ Việt Tuấn | 3.698 | 17 | [3] |
| Review Router Mikrotik hEX refresh E50UG | CNTT SHOP | 2.771 | 11 | [4] |
| Review Router Mikrotik RB760iGS cho DN vừa và nhỏ | CNTT SHOP | 5.245 | 12 | [5] |
| Thiết kế mạng PPPoE Server quản lý hộ dân | Mikrotik Viet Nam (MVN) | 1.777 | 23 | [6] |
| Router cân bằng tải Ruijie RG-EG105G V3 - 2 WAN - 100 user | Góc Công Nghệ.com | 4.684 | 21 | [7] |
| Router cân bằng tải Ruijie RG-EG105G V2 | CAMERA PHAN RANG BEST BUY | 2.242 | 14 | [8] |
| Cân bằng tải tối ưu mạng nhà hàng, khách sạn, quán cafe #ruijie | Demo 055 | 2.041 | 15 | [9] |
| Cải tạo mạng LAN, WiFi và lắp cân bằng tải Ruijie (Long Biên) | Góc Công Nghệ.com | 2.511 | 9 | [10] |
| Review Unifi U7 Lite - quán cà phê, văn phòng, khách sạn | WIFI.COM.VN | 573 | 11 | [12] |
| Unifi U7 Pro Max test tại nhà | Công Nghệ Việt Tuấn | 589 | 4 | [13] |
| Hướng dẫn cài lại camera Ezviz khi đổi nhà mạng | Thiết bị công nghệ Văn Tư | 121.853 | 44 | [17] |
| So sánh camera Imou Titan Pro và Imou S7XFP Pro | THẮNG CAMERA | 24.568 | 122 | [16] |
| Đây là lý do Wi-Fi nhà bạn cực chậm dù đóng gói cao | Vật Vờ Studio | 171.068 | 393 | [23] |
| 3 con router mesh trong nhà mình | Duy Luân Dễ Thương | 73.611 | 307 | [26] |
| Nên lắp Camera có đầu ghi hay Camera Wifi? | 88 Media | 26.734 | 19 | [58] |
| Camera nhìn đêm như ngày - AI ColorVu Hikvision 1B47G3 | Việt Hàn Security | 14.666 | 33 | [59] |
| Khám phá Camera Hikvision TandemVu 3 mắt góc nhìn 180 độ | Việt Hàn Security | 7.825 | 21 | [60] |
| Hướng dẫn cài đặt camera Hikvision 2 mắt TandemVu | THẮNG CAMERA | 5.475 | 11 | [61] |
| Mua có 108K mà Xài Quá Được Việc (UPS 12V cho camera/wifi) | VŨ SỸ TRƯỜNG | 53.114 | 97 | [64] |
| Hướng dẫn cách sử dụng bộ lưu điện UPS Santak TG500 | TOÀN TÂM UPS | 12.563 | 15 | [65] |
| UPS cho Wifi Camera không lo mất điện chạy xuyên đêm | Mr Chế | 5.146 | 12 | [67] |
| [Người mới] Cân bằng tải (PCC) và mở cổng (NAT Port) trên Router Mikrotik | Mikrotik Viet Nam (MVN) | 6.336 | 8 | [52] |
| Giải pháp Wi-Fi 7 từ TP-Link: router, mesh và AP cho doanh nghiệp | Tinh tế | 15.304 | 14 | [70] |

Chín dòng cuối là video mới (2026-11-14); số comment ở đó là số comment tải về (tối đa 100/video). Bảng cũ giữ nguyên.

## Chủ đề khách quan tâm
Mẫu số: 1.023 comment đã mã hoá; đa nhãn; % làm tròn. Hàm ý marketing là Nhận định.

| Chủ đề | % | Trích nguyên văn | Hàm ý marketing |
|--------|---|------------------|-----------------|
| So sánh hãng / chọn mua | ~22% | "Về app thì app của Ezviz ngon hơn." [15] · "Hệ dân dụng tốt nhất hiện tại thì asus nắm trùm rồi, còn hệ công nghiệp enterprise thì ko bàn tới 😂😂" [26] · "Em đang phân vân con này với asus rt1800 hp, nhờ anh tư vấn thêm" [43] | Khách so Ruijie/UniFi/MikroTik với Asus, TP-Link Omada, Xiaomi, Tenda. Cần bài "chọn đúng thiết bị theo số user và ngân sách" (10-A1) |
| Cài đặt & cấu hình | ~18% | "Đầu số ma vùng điền số điện động Ko dc" [18] · "E vào đc tất cả nhưng khi kết nối thì ko tìm thấy thiết bị" [18] · "em lowtech, mua con này về tự set úp dễ không shop" [4] | Khách tự cài; lo ngại độ khó là rào cản mua. Dịch vụ cấu hình tại chỗ/từ xa của HNP là điểm bán |
| Phủ sóng / mesh / nhiều tầng | ~16% | "Nếu 1 modem nhà mạng + 3 con rg-rap62 thì có thể mesh đc với nhau mà k cần cân bằng tải k a" [7] · "Rujie phụ tầng 2 và tâng 3 có xung ip modem chính viettel ko b nhỉ thấy mạng yếu cam hay ngoại tuyến ( bắt modem chính ở gần modem)" [10] · "Xin hỏi wifi không dây có thể kích sóng được không vậy.. bạn ơi..." [33] | Khách nhầm giữa mesh, repeater, AP có dây, cân bằng tải. Cần nội dung phân biệt đơn giản và sơ đồ đấu nối |
| Hiệu năng / chịu tải | ~16% | "ai nói con này chịu tải 100 user là ng.u. bây giờ lấy 80 user tải toren. dám bảo đảm ko treo ko." [8] · "Chạy 20 user bị táo bón luôn😂" [8] · "Mã này không bật fastrack có lên được 1Gbps không ạ" [4] | Con số "100 user" bị nghi ngờ. Cần nói "user" nghĩa là gì (thiết bị đồng thời, loại truy cập) thay vì lặp số hãng |
| Wifi 6 / Wifi 7, thiết bị đầu cuối | ~11% | "Với người dùng phổ thông thì wifi 6 là quá tốt rồi. Bao giờ thiết bị wifi 7 rẻ hơn thì dùng :))" [24] · "Router wifi 7 giá rẻ và tầm trung đa phần không có 6GHz, chỉ có 5GHz, là phiên bản thiếu của wifi 7 mà thôi." [23] · "Cho hỏi điện thoại nào đã mở để thấy mạng wifi 7 6ghz ở vietnam?" [28] | Có chỗ cho bài "Wifi 7 có đáng mua không: khi nào dùng Wifi 6 là đủ, khi nào lên Wifi 7 (AP Ruijie RAP7x, UniFi U7)" |
| Tư vấn mua / còn hàng | ~6% | "mình cần tư vấn dùng cho gia đình" [34] · "Router này dùng được cho gia đình nhu cầu cao không shop ơi, loanh quanh từ 10 - 30 thiết bị chủ yếu xem YouTube, MXH, chạy Camera , chơi game ạ ... Gia đình đang dùng gói cước 1000Mbps tới từ Viettel" [5] | Khách gia đình hỏi thiết bị chuyên dụng: cần checklist "bao nhiêu thiết bị / gói cước nào / mấy tầng" |
| Giá | ~5% | "Trên web để giá tham khảo đi, ít nhất giá thời điểm. Chứ người quan tâm vào xem ko có giá nó chuyển luôn chứ ko có thời gian ib với liên hệ đâu bác." [5] · "Xin Giá shop ơi" [12] · "Giá bao nhiêu vậy nè?" [13] | Tín hiệu mạnh: không để giá là mất khách. Website HNP nên hiện giá tham khảo; video nên gắn giá trong mô tả/bình luận ghim |
| Lưu trữ / thẻ nhớ / đầu ghi | ~4% | "Thẻ 64Gb ghi liên tục khoảng bao lâu a" [15] · "Con titan thẻ 12gb lưu dk bao nhiêu ngày vậy anh" [35] · "Bấm vô đám mây có tốn tiền hông anh" [45] | Câu hỏi lặp: tính số ngày lưu theo dung lượng thẻ, cloud có phí không |
| Cân bằng tải / nhiều WAN | ~2% (nhưng mật độ cao trong nhóm MikroTik/Ruijie) | "Cân bằng tải trên mik nó đã rối rắm rồi, a hướng dẫn còn tăng phần phức tạp, bó tay thật" [3] · "Dùng 1 wan thì cân bằng tải làm gì?" [7] · "Xin hỏi Admin,gộp băng thông 2 đường internet trên router Mik L009UiGS-RM có lên được 1Gb không ạ,1 đường 1Gbs và 1 đường 400Mbs" [2] | Khách chưa hiểu cân bằng tải khác gì "gộp băng thông" và cần ít nhất 2 đường mạng. Mảng HNP bán chủ lực (E50UG, EG105G) |
| Quản lý từ xa / cloud / riêng tư | ~1% | "Cho e hỏi xíu là thiết bị mình quảng lý từ xa thông qua cloud dc ko ah... Giống như ruijie vậy" [6] · "Có quản lý từ xa không anh ?" [11] · "Đang tìm hiểu mua nhiều hãng rồi xem online quay vòng vòng đang tìm hiểu sever tại Việt Nam mà ko a nào nói tới" [30] | Ruijie Cloud/UniFi là lợi thế được khách chủ động hỏi. Câu hỏi "server camera đặt ở đâu" chưa ai trả lời |
| Doanh nghiệp / khách sạn / quán | ~1% | "Ad nhận thiết kế hạ tầng mạng k" [1] · "Học học nữa học mãi!" [37] | Mẫu nhỏ; có nhu cầu thuê thiết kế/thi công, nhưng ít người hỏi công khai |

### Chủ đề mới (lượt 2026-11-14)
Mẫu số riêng cho từng dòng (ghi ở cột 2), không cộng gộp với % của bảng trên. Hàm ý marketing là Nhận định.

| Chủ đề | % (mẫu số) | Trích nguyên văn | Hàm ý marketing |
|--------|-----------|------------------|-----------------|
| Hỏi đầu ghi / đầu thu / thẻ nhớ khi chọn camera | ~25% (99 comment camera Hikvision/lắp đặt) | "Đầu ghi không cùng hãng với mắt cam có lắp vào nhau dc k" [58] · "Về gắn thẻ nhớ sài được luôn hay phải mua đầu ghi" [59] · "sao mình gáng nó vào đầu ghi ip hikvision 7616 nó chỉ nhận có 1 con mắt ở dưỡi. xin chỉ giáo" [61] | HNP có danh mục Đầu ghi: bài/video "ghép camera + đầu ghi cùng hãng hoặc khác hãng, camera 2–3 mắt chiếm mấy kênh" (30-I9) |
| Xin giá camera Hikvision ngay dưới video | ~18% (99) | "Xin giá a ơi" [59] · "4:01 camera này VIP quá! Giá bao nhiêu vậy Shop?" [60] · "thêm lắp đặt tại nhà thì chi phí bao nhiêu vậy a" [63] | Củng cố 30-I1, 30-I9: giá và chi phí lắp là câu hỏi số 1, cả với camera |
| Chọn camera wifi hay có đầu ghi, lỡ mua wifi | ~13% (99) | "Dùng wifi như nhà mình gặp vài điểm chết wifi ko tới dc lại phải dùng dây nghĩ nó cũng cay" [58] · "Thẻ 128gb chỉ lưu đc 1 tuần thôi bạn ơi, thẻ 64 gb thì vài ngày." [58] · "Con này cài đặt phức tạp quá nhỉ..chắc chơi imou là dễ nhất" [61] | Khách cần bảng "khi nào wifi đủ, khi nào lên PoE + đầu ghi"; Hikvision bị xem là khó cài hơn Imou |
| Chất lượng hình ảnh ban đêm / zoom / biển số | ~9% (99) | "Mình đã mua một con nhưng chế độ ban đêm như ngày mình không làm được bạn có thể hướng dẫn chế độ ban đêm của con của mình tối thui" [59] · "Dòng ColorVu này có phải bật đèn led trợ sáng để cho ra hình ảnh có màu không vậy ạ?" [59] | Video demo ban đêm thật, giải thích ColorVu cần đèn trợ sáng, không hứa "như ban ngày" |
| Lỗi/độ ổn định camera 2 mắt Hikvision TandemVu | vài comment trong 11 comment của [61] (mẫu nhỏ, không tính %) | "mình thấy loại này rất nhiều lỗi, ko ổn định, cam trên sài vài ngày là bị lỗi mắt trên ko thông báo sự kiện vs ko lưu dc mắt trên" [61] · "Bác cho hỏi em dùng thẻ nhớ nhưng nó chỉ lưu dữ liệu của mắt xoay bên dưới." [61] | Không khẳng định lỗi; dùng làm câu hỏi FAQ cài đặt 2 mắt vào đầu ghi (cần đúng đầu ghi/số kênh) |
| UPS: dùng được bao lâu khi mất điện | ~14% (63 comment UPS ngoài video DIY) · ~15% (84 ở video DIY, nhắc số giờ thực tế) | "Mình dùng bộ này cho cục wifi khi cúp điện dùng đc lâu k ta" [65] · "Mình dùng rồi mất điện chạy được tầm 4 tiếng" [64] · "Khuyên mọi người là không nên mua tôi đã mua hai cái giờ bỏ,dùng cho wifi chỉ được tiếng rưỡi" [64] | Bảng "UPS bao nhiêu VA chạy router + camera + đầu ghi mấy giờ" là nội dung hiếm; chỉ nêu số khi có thông số hãng/test |
| UPS: dung lượng pin quảng cáo, an toàn, tuổi thọ | ~17% (63) pin/dung lượng · ~21% (84, video DIY) nghi ngờ chất lượng/an toàn | "nói dung lượng pin là 5400 là sai. Nhà sx dang đánh tráo khái niệm vì ở 12v thì cũng chỉ 1800 thôi" [64] · "Không nên dùng lâu dài dùng chống cháy thì ok nó hoạt động nạp xả liên tục chứ không phải như ups tích trữ pin chuyển nguồn khi mất điện" [64] · "mấy con này sóng sin ko chuẩn , dễ gây hỏng linh kiện nếu pc dùng nguồn kém chất lượng, ko có lọc nhiễu" [66] | UPS chính hãng (Santak/Cyber Power) đối lập với "UPS 12V rẻ": nói rõ VA/W, loại sóng sin, thời gian lưu tải thực, bảo hành. Chỉ dùng khi hãng cung cấp thông số |
| UPS: kéo nổi nhiều thiết bị mạng không | vài comment (đọc tay, không tính %) | "Có loại nào dùng cho 3 cục ko ạ? Router + switch poe và 1 đầu ghi" [68] · "Chạy đc camera có đầu ghi Kg anh ơi" [67] · "Cúp điện thì cũng mất mạng. Đâu ra mà kịp báo khi chơi game online. Trừ khi cắm cả cái modem vào cục lưu điện nốt." [66] | Khách thường quên cấp UPS cho modem/ONT và switch PoE; bài "sơ đồ cấp nguồn dự phòng cho camera + wifi" |
| Hỏi giá UPS | ~13% (63) | "bác cho em xin khoảng giá của các loại UPS này để dễ chọn với" [67] · "Bao nhiêu tiền vậy" [69] | Website HNP chưa có giá UPS (10-brand): thiếu giá sẽ lặp lỗi của đối thủ ở 30-I1 |
| B2B kỹ thuật nâng cao: NAT/VPN/MTU/cân bằng tải + xem camera từ xa | 26 comment B2B mới đã mã hoá; phần lớn là câu hỏi cấu hình cụ thể (đọc tay, không tính %) | "cân bằng tải PCC lúc cấu hình thì mình đã chỉ định lưu lượng vào wan nào thì ra wan đó rồi thì sao lại né đầu ghi ko cho qua cân bằng tải được ạ ? Ví dụ dùng điện thoại xem camera thông qua 1 ip tĩnh wan2" [52] · "Chỗ mình có 3 tầng, mỗi tầng 1 sw chạy cho 16 con AP. Thì mình lên sử dụng bridge Lan cho 3 tầng hay mỗi port 1 sw thì tốt hơn." [52] · "Hi Ad, hiện tại em đang gặp một vấn đề như sau: - Trụ sở dùng router Mikrotik (mạng Viettel+IP WAN tĩnh)... Chi nhánh dùng router Draytek 2952 (mạng FPT)" [53] | Khách B2B thật đặt câu hỏi dịch vụ: nhiều WAN + camera/NVR, VPN chi nhánh khác hãng. HNP có thể bán dịch vụ cấu hình/hỗ trợ (cần xác nhận năng lực với chủ thương hiệu) |
| Ruijie/UniFi: nâng cấp nhiều tầng, quản lý nhiều chi nhánh | vài comment rải rác (mẫu nhỏ) | "Mình đang lắp 4 con 4 tầng giờ muốn thêm 2 con cho t5 và t6 thì cài như nào" [49] · "Hiện m dùng U-AC PRO cho nhiều chi nhánh, có cách nào add toàn bộ chi nhánh vào 1 controller để setup dc không nhỉ." [50] · "Cấu Hình Router Wifi Ruijie cùng một lớp mạng với Modem Internet thì sao a." [49] | Củng cố 30-I4, 30-I5: sơ đồ nhiều tầng/nhiều chi nhánh + quản lý tập trung |
| Wifi 7 văn phòng: 6GHz, thiết bị đầu cuối | 8/19 comment (mẫu nhỏ) | "Khi nào VN mình cấp phép cho khai thác băng tần 6ghz thì lúc đó wifi 7 mới thật sự bung hết sức mạnh" [70] · "mình vẫn thấy wifi 7 có ý nghĩa hơn nếu nó chạy trên băng tần 6Ghz chứ ko thì wifi 6 là quá đủ rồi." [71] · "SME thì TP Link là đong Omada" [70] | Giải thích 6GHz tại VN đã được mở theo văn bản [72][73] (cần xác minh gốc); khách SME tự phân biệt SOHO/SME, quan tâm Omada/UniFi/Aruba/Ruckus |

## Câu hỏi thường gặp
Đếm tay trong top comment theo từng video; xếp theo tần suất xuất hiện (cao đến thấp).
| # | Câu hỏi | Xuất hiện ở | Gợi ý dùng |
|---|---------|-------------|-----------|
| 1 | Giá bao nhiêu? Còn hàng không? | [8][12][13][34][35] | FAQ giá tham khảo + CTA Zalo |
| 2 | Dùng gói cước bao nhiêu / thiết bị này chạy cho gói nào? | [9][11][41] | Bảng gói cước - thiết bị gợi ý |
| 3 | Bao nhiêu user/thiết bị thì đủ? (tự cài được không?) | [4][5][8] | Hướng dẫn chọn router theo số thiết bị |
| 4 | Có thay luôn modem nhà mạng được không? Cắm thế nào? | [5][39][40] | Sơ đồ modem bridge + router |
| 5 | Mesh/AP/repeater/cân bằng tải khác nhau thế nào? | [7][10][33] | Bài phân biệt |
| 6 | Cân bằng tải 2 WAN: vì sao chỉ 1 đường chạy, gộp được băng thông không? | [2][3][7] | Video MikroTik/Ruijie đúng case |
| 7 | Quản lý từ xa qua cloud/app được không? | [6][11] | Nhấn Ruijie Cloud, UniFi |
| 8 | Camera: thẻ nhớ ghi được mấy ngày, cloud có tốn tiền không? | [15][35][45] | Bảng tính dung lượng |
| 9 | Camera đổi nhà mạng/đổi wifi cài lại thế nào? | [17][18] | Video cài lại camera |
| 10 | Wifi 7 có cần mua không, điện thoại nào hỗ trợ? | [23][25][28] | Bài Wifi 6 vs Wifi 7 |
| 11 | Camera wifi đã mua có thêm đầu ghi được không? Đầu ghi khác hãng ghép được không? | [58][61] | Bài "ghép đầu ghi với camera wifi/IP" kèm bảng tương thích |
| 12 | Camera 2–3 mắt (TandemVu, Imou Dual) lắp vào đầu ghi 4 kênh chiếm mấy kênh? | [61] | FAQ chọn đầu ghi theo số mắt |
| 13 | Camera Hikvision giá bao nhiêu, lắp trọn gói bao nhiêu? | [59][60][63] | Giá tham khảo + chi phí lắp công khai |
| 14 | UPS dùng cho wifi/camera/router được bao lâu khi cúp điện? | [64][65][67][68] | Bảng thời gian chạy theo VA và tải |
| 15 | 1 UPS cấp cho router + switch PoE + đầu ghi được không? Có cần cấp cho modem/ONT? | [66][68] | Sơ đồ cấp nguồn dự phòng hệ thống mạng + camera |
| 16 | Cân bằng tải 2 WAN có ảnh hưởng xem camera từ xa (NAT port) không? Cấu hình thế nào? | [52] | Video MikroTik/Ruijie đúng case NVR |
| 17 | Thêm AP thứ 5, 6 cho nhà nhiều tầng thì cấu hình thế nào? Có chuyển modem sang bridge không? | [49] | Sơ đồ nhà nhiều tầng + AP có dây |
| 18 | Quản lý nhiều chi nhánh/nhiều site trong 1 controller (UniFi, Ruijie Cloud)? | [50][56] | Bài/video quản lý tập trung |
| 19 | Wifi 7 router/AP có cần 6GHz không? Việt Nam đã mở 6GHz chưa? | [70][71] | Mở rộng bài Wifi 6 vs Wifi 7 (30-A8) |

## Phàn nàn & nỗi đau
| Nỗi đau | Sản phẩm / hãng bị nhắc | Trích nguyên văn |
|---------|-------------------------|------------------|
| Cấu hình cân bằng tải MikroTik rối, không có thống kê trực quan | MikroTik | "Anh em có công nhận mikrotik cân bằng tải xong cũng không hiểu mình làm đúng hay sai luôn. Chẳng có thống kê dạng đồ họa kết quả cân bằng tải chi cả." [3] · "Drayek vẫn là 1 cái gì đó chân ái, làm clip như khứa này chắc nổ não mà quá" [3] |
| Cấu hình theo video xong chỉ 1 WAN chạy | MikroTik | "tại sao dùng thì chỉ wan1 chay còn wan2 ngồi chơi á anh" [2] |
| Số user quảng cáo không đúng thực tế | Ruijie EG105G | "ai nói con này chịu tải 100 user là ng.u. bây giờ lấy 80 user tải toren. dám bảo đảm ko treo ko." [8] |
| Đo tốc độ sau khi lắp cân bằng tải thấp hơn modem | Ruijie EG105G(W) | "mình vừa lắp con cân bằng tài EG105-GW(T), mình có đo tốc độ thấy không được như modem" [11] |
| Cổng 2.5G chặn băng thông AP Wifi 7 | UniFi U7 Pro Max | "Cái cổng Ethernet chỉ là 2.5 Gb, tổng các băng tần wifi lớn hơn 10 Gb, vậy là bị nghẽn rồi. Tại sao nó lại thiết kế kỳ vậy?" [13] |
| Ổn định firmware U7 Pro (video tiếng Anh, ngoài mẫu %) | UniFi U7 Pro/Pro Max | Comment top của video ghi bản cập nhật firmware "8.3.2 and it fixes the 2.4ghz IOT issues" [44] |
| Camera mất kết nối khi đổi wifi / nhà mạng | Imou, Ezviz | "Cam của mình sao cứ tắt wifi đi là nó ko ghi video dc nữa nhỉ" [17] · "Đổi nhà mạng tại sau hén mất lun không hiện lên màng hình imou lùn ak làm sau để kết nối lại ạk" [17] |
| Lỗi codec khi xem video xuất ra | Ezviz H8 Pro | "ezviz h8pro của e lưu video vào bộ sưu tập dc mà xem thì có tiếng k có hình,nó báo là codec video k dc hỗ trợ là sao bác" [20] |
| Thiếu giá trên web đối thủ | CNTT SHOP | "Trên web để giá tham khảo đi, ít nhất giá thời điểm. Chứ người quan tâm vào xem ko có giá nó chuyển luôn chứ ko có thời gian ib với liên hệ đâu bác." [5] |
| Hãng camera rẻ bị chê độ tin cậy | Yoosee | "Tôi chuyên đi lắp camera nhưng để lắp yoose kể cả cho lãi gấp đôi cũng k làm, mất uy tín" [14] |
| Cổng ether1 E50UG không qua ~200Mbps với đường 1Gb (tín hiệu ngoài mẫu, tiếng Bồ Đào Nha/Anh; chưa xác minh) | MikroTik hEX refresh E50UG | "Quando a internet está na interface1 não passa de 200Mbps. Comunidade toda reclamando. Minha internet é de 1gb tive que por a internet na Ether5 pois a CPU da ether1 não aguenta 1Gb." [47] · "I configured same unit as yours, but when I used ether1 as my ISP/Internet, I got 200mbps or below" [48] |
| Camera 2 mắt Hikvision: gắn vào đầu ghi chỉ nhận 1 mắt, thẻ nhớ chỉ lưu 1 mắt | Hikvision TandemVu | "sao mình gáng nó vào đầu ghi ip hikvision 7616 nó chỉ nhận có 1 con mắt ở dưỡi" [61] |
| Cài đặt Hikvision khó hơn Imou | Hikvision, Imou | "Con này cài đặt phức tạp quá nhỉ..chắc chơi imou là dễ nhất" [61] |
| Chế độ ban đêm ColorVu không ra màu như quảng cáo | Hikvision ColorVu 1B47G3 | "chế độ ban đêm như ngày mình không làm được bạn có thể hướng dẫn chế độ ban đêm của con của mình tối thui" [59] |
| Hình xem lại bị nhoè, không đọc được biển số | Imou 2 mắt (Dual) | "Mẫu imou dual ko nhìn dc biển số khi xem lại anh ơi , mỗi lần em xem lại bấm dừng là hình phương tiện nó nhoè hết" [15] |
| Thẻ nhớ lưu được ngắn so với kỳ vọng | Camera wifi (chung) | "Thẻ 128gb chỉ lưu đc 1 tuần thôi bạn ơi, thẻ 64 gb thì vài ngày." [58] |
| Chân đế Imou khó đi dây, khoan lỗ sai | Imou | "Vậy ai muốn lắp cái chân đế theo hai cái lỗ ngang thì ko được, bắt buộc phải lắp theo đường chéo à." [62] |
| UPS 12V rẻ: dung lượng pin thật thấp, chạy ngắn, nghi ngờ an toàn | UPS 12V mini (hàng rẻ trên sàn) | "Khuyên mọi người là không nên mua tôi đã mua hai cái giờ bỏ,dùng cho wifi chỉ được tiếng rưỡi" [64] · "Còn này phế lắm. Còn routers ZTE của tui 12v 0.3-0.5A. chạy còn này đc 10 phút sập nguồn." [64] |
| UPS thường (Santak) kêu tít liên tục, người dùng không hiểu nút/chế độ | Santak TG500, C-LCD | "Sao bộ này của mình nó kêu tít tít liên tục trong khi mình vẫn cắm nó vào điện lưới nhỉ?" [65] |
| UPS cho PC: nghi sóng không chuẩn, cúp điện vẫn mất mạng | UPS line-interactive (chung) | "mấy con này sóng sin ko chuẩn , dễ gây hỏng linh kiện nếu pc dùng nguồn kém chất lượng" [66] |
| Video của kênh chính hãng VN nói nhỏ, khó nghe | Ruijie Reyee Vietnam (kênh) | "video nói nhỏ quá ko nghe nỗi" [56] |
| App ngân hàng/web bị chặn sau khi cấu hình MikroTik | MikroTik | "sao web và app các ngân hàng bị chặn trên mik vậy ạ" [54] |

## Cảm nhận về hãng & đối thủ
| Đối tượng | Tích cực | Tiêu cực | Trung tính |
|-----------|----------|----------|-----------|
| Ruijie/Reyee | "Con này lên mua giá rẻ mà ngon tôi đang dùng.... cảm thấy ok hơn những loại tầm giá của Tenda" [42] · "Hệ sinh thái ruijie Reyee tốt hơn Mi." [46] | Số "100 user" bị nghi ngờ [8]; tốc độ thấp hơn modem sau khi lắp [11] | Hỏi quản lý từ xa [11] |
| MikroTik | "Vậy tính ra con này ngon hơn con rb760 luôn rồi" [4] · "nhanh gọn rất dễ hiểu cảm ơn bạn rất nhiều ❤" [2] | Cân bằng tải rối, khó kiểm chứng [3] | Hỏi dùng thay modem nhà mạng [5][40] |
| UniFi | "Hãng uy tín xưa giờ 👍" [12] · "giá cả cũng hợp lí so với tính năng" [12] | 2.5G nghẽn [13]; lỗi firmware U7 Pro (nguồn tiếng Anh) [44] | Xin giá, hỏi dùng cho gia đình, hỏi app tiếng Việt [34] |
| Hikvision | "Con này hình ảnh tốt hơn Ezviz H8 pro ko ban" (hỏi so sánh) [29] | Chưa thấy phàn nàn rõ trong mẫu | Chủ yếu hỏi đấu nối/đầu ghi [21][22] |
| Ezviz | "Camera này dùng bền mà ít lỗi" [19] · "Về app thì app của Ezviz ngon hơn." [15] | Cài đặt/đổi wifi hay lỗi [17][18]; codec [20] | Hỏi so với Imou [15][16] |
| CNTT SHOP (đối thủ) | "Hay quá ad ơi , mong ad ra nhiều video về Mikrotik nữa." [1] | Không hiện giá trên web [5] | Khách hỏi thêm cấu hình VLAN/LACP: kênh được xem như nguồn kiến thức kỹ thuật [1] |
| Công Nghệ Việt Tuấn (đối thủ) | Video U7 được xem nhiều (19.817 views) [13] | "làm nhanh quá người mới ko theo kịp" [3] | Comment khách hỏi giá, hỏi tư vấn dưới video U7 [13] |
| WIFI.COM.VN (đối thủ) | "Unifi là đỉnh nhất rồi 🥰🥰🥰" [12] | Không có | Comment xin giá không thấy trả lời trong dữ liệu [12] |
| Hikvision (bổ sung 2026-11-14) | "Mình từng mua cam ở đây rồi uy tín lắm" (về kênh Việt Hàn Security) [60] · "Nét đỉnh" [60] | "mình thấy loại này rất nhiều lỗi, ko ổn định" [61] · "Con này cài đặt phức tạp quá nhỉ" [61] | Rất nhiều "xin giá", "ib" ở kênh bán [59][60] |
| Imou (bổ sung) | Dễ cài hơn Hikvision (1 comment) [61] | Hình xem lại nhoè, mic đàm thoại kém [15] | Hỏi thêm đầu ghi cho cam Imou [58] |
| MikroTik E50UG (bổ sung, nguồn tiếng Bồ Đào Nha) | "comprei uma E50UG e é excelente... comparado a GR3 é dobro e memória RAM e armazenamento" [47] · "Instalei uma dessa na empresa do meu irmão, é ótima. Vai atender perfeitamente pequenas empresas e escritórios." [47] | ether1 ~200Mbps trên đường 1Gb (2 video nước ngoài, chưa xác minh) [47][48] | "ela passa 1gb com queue ativado?" [47] |
| Santak / Cyber Power (UPS) | "APC cho phép tải phụ thuộc dung lượng ắc quy, còn SANTAK cho phép hữu hạn cố định 1 khoảng thời gian sau khi cut điện" (so sánh APC với Santak) [66] | Không thấy chê Santak/Cyber Power trực tiếp | Chủ yếu hỏi cách dùng: bật/tắt, tiếng kêu, thời gian chạy [65]; Cyber Power gần như không có comment (Chưa xác minh) |
| Việt Hàn Security (đối thủ mới trong 21) | "Mình từng mua cam ở đây rồi uy tín lắm" [60] | Comment xin giá nhiều, không thấy phản hồi trong dữ liệu [59][60] | Kênh có video Hikvision 7.800–14.700 view [59][60] |
| MVN / UniFi Việt Nam / Ruijie Reyee Vietnam (kênh chính hãng/đại diện) | MVN: "Hay quá sếp ơi, hóng đăng ký khóa học trau dồi thêm" [37] | "video nói nhỏ quá ko nghe nỗi" [56] · "I don't think this feature is available in VN lol" [55] | Tương tác thấp: UniFi Việt Nam và Ruijie Reyee Vietnam mỗi video 1 comment; MVN 2–8 comment/video [52][53][54][55][56] |
| TP-Link Omada (Wifi 7 SME) | "SME thì TP Link là đong Omada" [70] | "Mấy con này lùa gà thôi quay PPPOE cứ 15 phút sập tan xác" (1 comment, ý kiến cá nhân) [70] | Hỏi tầm phát sóng EAP723 [71] |
| Hoàng Nam Phát | Không có comment nhắc tên | Không có | Chưa có mặt trên YouTube (đối chiếu 10-brand) |

## Khoảng trống nội dung
Câu hỏi nhiều nhưng video hiện có trả lời chưa tốt (Nhận định · TB):
- Cân bằng tải MikroTik/Ruijie cho người mới: các video có sẵn dài, khó theo và không giải thích "không có gì để kiểm tra kết quả" [2][3].
- "100 user" thực tế là bao nhiêu thiết bị đồng thời: khách nghi ngờ nhưng chưa video nào kiểm chứng bằng bài test công khai [8][9].
- Sơ đồ cắm modem nhà mạng (Viettel/VNPT/FPT) với router chuyên dụng, bridge/PPPoE, AP nhiều tầng [5][7][10][23].
- Chọn thiết bị theo số thiết bị và gói cước (nhà phố 3 tầng, quán cafe 50 khách, khách sạn): hiếm video ghi rõ.
- Camera: tính số ngày lưu theo thẻ nhớ, cloud có phí không, đặt server ở đâu (riêng tư) [15][30][35][45].
- Wifi 7 thực tế: khi nào nên lên, thiết bị đầu cuối nào hỗ trợ, AP doanh nghiệp Wifi 7 cho VN [23][24][28].
- Giá tham khảo công khai theo model: khách xin giá nhưng không được trả lời công khai [5][8][12][13].
- Ghép camera wifi/IP với đầu ghi, camera 2–3 mắt vào đầu ghi: nhiều câu hỏi, video hiện có (88 Media, THẮNG CAMERA) chưa có bảng tương thích đầu ghi - mắt - kênh [58][61].
- Giá và chi phí lắp trọn gói camera Hikvision: video của đại lý (Việt Hàn Security) thu hút "xin giá" nhưng không thấy bảng giá công khai [59][60][63].
- UPS cho bộ mạng + camera (router + switch PoE + đầu ghi): video hiện có là UPS 12V tự chế hoặc hướng dẫn nút bấm Santak; chưa video nào tính thời gian chạy theo tải cho văn phòng nhỏ/cửa hàng [64][65][67][68].
- Cân bằng tải + xem camera từ xa (NAT port, mangle bypass): câu hỏi dài, kỹ thuật, nằm ở video MVN, chưa có video riêng cho Ruijie [52][57].
- Bridge modem nhà mạng + thêm AP nhiều tầng bằng Ruijie: khách hỏi trực tiếp, video hướng dẫn của shop không trả lời [49].
- Wifi 7 văn phòng/SME: 6GHz đã mở hay chưa, AP nào hợp SME; mẫu nhỏ nhưng khách vẫn hiểu lệch [70][71][72].

## Dành cho Content

### Insight
| ID | Insight | Bằng chứng | Độ tin cậy |
|----|---------|-----------|-----------|
| 30-I1 | Khách xin giá ngay dưới video; không hiện giá thì bỏ đi. Hiện giá tham khảo là điểm khác biệt có thể làm ngay | [5][8][12][13] | TB |
| 30-I2 | Câu hỏi cân bằng tải là nơi khách "mắc kẹt" nhiều nhất ở mảng MikroTik/Ruijie: hay hỏi tại sao chỉ 1 WAN chạy, gộp băng thông, có cần nhiều đường mạng. Cập nhật 2026-11-14: khách B2B còn hỏi cân bằng tải + NAT port để xem camera từ xa, VPN chi nhánh khác hãng, quản lý nhiều site: có thể thành dịch vụ cấu hình/tư vấn (cần HNP xác nhận năng lực) | [2][3][7][52][53][50][56] | TB |
| 30-I3 | Số "100 user" của EG105G bị khách nghi ngờ; nói rõ điều kiện thực tế sẽ tạo niềm tin hơn lặp con số hãng. Cập nhật 2026-11-14 (độ tin cậy Thấp, chưa xác minh): 2 video nước ngoài ghi nhận E50UG không qua ~200Mbps ở cổng ether1 với đường 1Gb; nên tự test và hướng dẫn cắm cổng đúng | [8][9][47][48] | TB (phần E50UG: Thấp) |
| 30-I4 | Khách nhầm giữa modem nhà mạng, mesh, AP, repeater, cân bằng tải; cần sơ đồ đấu nối dễ hiểu | [5][7][10][33] | TB |
| 30-I5 | Khách hỏi quản lý từ xa qua cloud (Ruijie Cloud/UniFi): HNP có thể nhấn mạnh tính năng này | [6][11] | TB |
| 30-I6 | Wifi 6 là đủ cho đa số nhà ở; Wifi 7 chỉ đáng khi có thiết bị hỗ trợ và băng 6GHz. Nói thẳng điều này phù hợp thông điệp "đúng nhu cầu, không mua dư". Cập nhật 2026-11-14: khách SME vẫn hỏi 6GHz tại VN đã mở chưa; nguồn thứ cấp cho biết 5925–6425 MHz đã mở cho Wi-Fi từ 2025 (cần đối chiếu văn bản gốc) | [23][24][25][70][71][72][73] | TB |
| 30-I7 | Khách tự cài camera/router, hay vướng ở bước kết nối và đổi nhà mạng; dịch vụ cài đặt tận nơi/từ xa của HNP có chỗ đứng | [4][17][18] | TB |
| 30-I8 | Không có comment nhắc Hoàng Nam Phát; kênh YouTube của HNP chưa tồn tại; đối thủ (CNTT SHOP, Việt Tuấn, WIFI.COM.VN) mỗi kênh chỉ hàng trăm đến vài nghìn view cho video sản phẩm, nên cạnh tranh mảng video B2B còn thưa. Cập nhật 2026-11-14: kênh chính hãng VN (UniFi Việt Nam, Ruijie Reyee Vietnam) cũng dưới 1.000 view và 1 comment/video | [1][12][13][55][56] | TB |
| 30-I9 | Camera: người mua camera wifi hay muốn thêm đầu ghi về sau và khó chọn đầu ghi cho camera 2–3 mắt; với Hikvision, "xin giá" và "chi phí lắp" là câu hỏi số 1 (~18% của 99 comment) nhưng kênh bán (Việt Hàn Security) không thấy trả lời công khai. Nội dung "ghép đúng đầu ghi + giá lắp" còn trống, hợp danh mục Camera + Đầu ghi của HNP | [58][59][60][61][63] | TB |
| 30-I10 | UPS (mảng mới của HNP): nhu cầu có thật cho wifi/camera nhưng thảo luận lệch sang UPS 12V rẻ/tự chế; khách hỏi "bao lâu", "kéo nổi router + switch PoE + đầu ghi không", "có an toàn không", và quên cấp điện cho modem/ONT nên "cúp điện vẫn mất mạng". UPS chính hãng (Santak, Cyber Power) hầu như chưa có nội dung và chưa có giá trên website HNP | [64][65][66][67][68] | TB |

### Góc content gợi ý
| ID | Góc / thông điệp | Đối tượng | Kênh phù hợp | Dựa trên |
|----|------------------|-----------|--------------|----------|
| 30-A1 | "Cân bằng tải cho người mới: 3 phút hiểu 2 WAN chạy thế nào" (Ruijie EG105G, so MikroTik) | Chủ quán, kỹ thuật viên | YouTube, Facebook | 30-I2 |
| 30-A2 | "Router ghi 100 user, thực tế bao nhiêu thiết bị?" (test hoặc giải thích có điều kiện) | Chủ quán/văn phòng | YouTube, Website | 30-I3 |
| 30-A3 | Sơ đồ đấu nối: modem Viettel/VNPT/FPT chuyển bridge + router chuyên dụng | Hộ gia đình, quán | Website, Facebook | 30-I4 |
| 30-A4 | "Mesh, AP, repeater, cân bằng tải: khác nhau gì?" bảng 1 trang | Mọi khách | Website, Facebook | 30-I4 |
| 30-A5 | Bảng chọn thiết bị theo số thiết bị và gói cước (nhà 3 tầng, quán cafe, khách sạn nhỏ) | Chủ cửa hàng, SME | Website | 30-I1, 30-I4 |
| 30-A6 | Giá tham khảo công khai hàng chủ lực (E50UG, EG105G-V3, RAP2200(E)) kèm "giá thay đổi theo ngày, nhắn Zalo" | Mọi khách | Website, Facebook | 30-I1 |
| 30-A7 | "Quản lý wifi quán từ xa bằng điện thoại: Ruijie Cloud vs UniFi" | Chủ quán, khách sạn | YouTube, Facebook | 30-I5 |
| 30-A8 | "Wifi 6 hay Wifi 7: nhà bạn nên mua cái nào?" | Hộ gia đình, SME | Website, TikTok | 30-I6 |
| 30-A9 | "Camera đổi nhà mạng/đổi wifi: cài lại 5 phút" | Hộ gia đình | YouTube, TikTok | 30-I7 |
| 30-A10 | "Thẻ nhớ 64GB ghi được mấy ngày? Bảng tính cho camera 2K/4K" | Hộ gia đình, cửa hàng | Website, TikTok | 30-I7 |
| 30-A11 | Mở kênh YouTube HNP với series "Lắp mạng cho quán cafe 50 khách" có giá và sơ đồ | Chủ quán, kỹ thuật viên | YouTube | 30-I8 |
| 30-A12 | "Bộ phát wifi nhiều tầng: vì sao tầng 2, 3 vẫn yếu?" (AP có dây + PoE) | Hộ gia đình nhà phố | Facebook, TikTok | 30-I4 |
| 30-A13 | "Camera wifi lỡ mua rồi, thêm đầu ghi được không? Bảng ghép camera - đầu ghi theo hãng và số mắt" | Hộ gia đình, cửa hàng | Website, YouTube | 30-I9 |
| 30-A14 | "Camera 2 mắt vào đầu ghi 4 kênh: chiếm mấy kênh, cài sao cho lưu cả 2 mắt?" | Chủ cửa hàng, kỹ thuật viên | YouTube, TikTok | 30-I9 |
| 30-A15 | Báo giá camera Hikvision lắp trọn gói (4/8 mắt) kèm phạm vi công việc, "giá thay đổi theo ngày" | Chủ nhà, cửa hàng | Website, Facebook | 30-I9, 30-I1 |
| 30-A16 | Demo camera Hikvision ColorVu ban đêm thật (có đèn trợ sáng, không hứa "như ban ngày") | Hộ gia đình, cửa hàng | YouTube, TikTok | 30-I9 |
| 30-A17 | "UPS cho wifi và camera: bao nhiêu VA chạy router + switch PoE + đầu ghi được mấy giờ?" (bảng, có thông số hãng) | Cửa hàng, văn phòng nhỏ | Website, YouTube | 30-I10 |
| 30-A18 | "UPS 12V giá rẻ và UPS chính hãng: khác gì? Khi nào dùng loại nào" (không công kích thương hiệu cụ thể) | Hộ gia đình, cửa hàng | Facebook, TikTok | 30-I10 |
| 30-A19 | "Cúp điện vẫn mất mạng? Sơ đồ cấp UPS cho modem/ONT + router + switch PoE + camera" | Hộ gia đình, cửa hàng | Website, Facebook | 30-I10 |
| 30-A20 | "Cân bằng tải 2 WAN mà vẫn xem camera từ xa được: NAT port + mangle trên MikroTik/Ruijie" | Kỹ thuật viên, chủ cửa hàng | YouTube | 30-I2 |
| 30-A21 | "Kết nối 2 chi nhánh dùng router khác hãng (MikroTik - Draytek): chọn VPN nào" (hỏi chủ thương hiệu về năng lực trước) | SME, kỹ thuật viên | YouTube, Facebook | 30-I2 |
| 30-A22 | "Cắm cổng nào cho E50UG khi đường 1Gb? Test tốc độ thực tế" (tự test trước, công bố kết quả thật) | Kỹ thuật viên, đại lý | YouTube, Facebook | 30-I3 |
| 30-A23 | "Wifi 7 văn phòng: 6GHz đã dùng được ở Việt Nam chưa? AP nào hợp SME" | SME, chủ quán | Website, Facebook | 30-I6 |
| 30-A24 | "Thêm AP cho nhà 5–6 tầng: bridge modem + PoE + 1 SSID" (mở rộng 30-A12) | Nhà phố, quán | YouTube, Website | 30-I4, 30-I9 |

### Proof points
| ID | Điều có thể nói công khai (số liệu, chính sách, chứng nhận) | Nguồn |
|----|------------------------------------------------------------|-------|
| 30-P1 | Không có (dữ liệu YouTube là ý kiến khách về sản phẩm/hãng, không phải proof point của HNP) | — |
| 30-P2 | Cơ quan quản lý VN đã mở băng tần 5925–6425 MHz cho Wi-Fi không cần cấp phép (Thông tư 01/2025/TT-BKHCN theo nguồn thứ cấp). Chưa dùng công khai cho tới khi đối chiếu văn bản gốc | [72][73] |

### Ngôn ngữ & từ khoá
- `cân bằng tải` — tên khách gọi router EG105G/MikroTik nhiều WAN; hay gõ `cân băng tải` [2][7]
- `con này`, `con rb760`, `con titan`, `cục wifi`, `cục phát` — khách gọi thiết bị là "con/cục" [4][7][35]
- `2 wan`, `gộp băng thông`, `chịu tải 100 user` — từ khoá mảng cân bằng tải [2][7]
- `bộ kích sóng`, `kích sóng wifi` — cách gọi repeater/mesh của khách phổ thông [33]
- `quay PPPoE`, `bridge`, `bright mode` (gõ sai) — người dùng nâng cao [23][26]
- `xin giá`, `giá sao`, `còn không a` — mở đầu bình luận mua hàng [8][12]
- `lowtech` — khách tự nhận không rành kỹ thuật [4]
- `mạng căng đét`, `phát xa`, `phê` — khen mượt/xa [7][39]
- `táo bón` — chê chạy chậm/nghẽn [8]
- `ngon hơn`, `ăn đứt` — so sánh hãng [4][14]
- `wifi 6 là đủ`, `phí` — trường phái "không cần Wifi 7" [23][24]
- `cam wifi`, `cam 2 mắt`, `3 mắt`, `đầu ghi`, `đầu thu` — cách khách gọi camera/đầu ghi [58][59][60]
- `xin giá`, `gửi em giá`, `ib`, `Giá` (một chữ) — mở đầu mua hàng ở comment camera [59][60]
- `kén mã đầu ghi` — hỏi tương thích đầu ghi [59]
- `ups 12v`, `cục ups`, `bộ lưu điện`, `sạc dự phòng` — khách gọi nguồn dự phòng; hay lẫn UPS 220V với pin 12V [64][65][66]
- `cúp điện`, `mất điện` — tình huống mất điện [64][65]
- `sóng sin`, `kêu tít tít` — hỏi/phàn nàn về UPS [65][66]
- `lùa gà` — chê hàng quảng cáo quá lố [70]
- `SOHO`, `SME`, `Omada` — người dùng kỹ thuật định vị phân khúc [70]
- `thêm AP`, `bridge`, `quay PPPoE`, `MTU` — câu hỏi người cấu hình [49][52]

### Cần tránh
- "Chịu tải 100 user" nói như cam kết: khách nghi ngờ; chỉ dùng kèm điều kiện đã kiểm chứng [8].
- So sánh trực tiếp "hơn Asus/TP-Link" hay chê Yoosee/Imou/Ezviz: comment là ý kiến cá nhân, chưa kiểm chứng.
- Nêu hãng sản xuất ở đâu (một comment nói "xuất sứ nước Lào" về Imou/Ezviz): tin đồn chưa kiểm chứng.
- Dùng UniFi U7 lỗi firmware như điểm công kích: nguồn chỉ là video tiếng Anh, tình trạng đã thay đổi theo firmware [44].
- Tỷ lệ % trong file này không dùng làm số liệu công khai (mã hoá bằng từ khoá).
- Không có dữ liệu về Hoàng Nam Phát trên YouTube: không được viết như thể khách đã nhắc HNP.
- Khẳng định E50UG bị nghẽn ether1 ~200Mbps: chỉ là comment từ 2 video nước ngoài, chưa kiểm chứng [47][48]. Không đăng cho tới khi HNP tự test.
- Nói camera Hikvision/Imou "lỗi", "kém": comment cá nhân từng video, mẫu nhỏ [15][61]. Không chê hãng đang bán.
- Dùng video UPS 12V "108K" để công kích thương hiệu hoặc người làm video: nhiều comment cho rằng video có link bán hàng (affiliate) [64].
- Hứa "chạy X giờ" cho UPS: thời gian phụ thuộc VA, tải và pin; chỉ nêu khi có thông số hãng hoặc test đo thật. Website HNP chưa có giá/SKU UPS (10-brand): Chưa xác minh.
- "Việt Nam chưa có 6GHz" (comment 2024) có thể đã cũ nếu nguồn pháp lý đúng [70][72][73]; ngược lại, không nói "thiết bị Wifi 7 nào cũng dùng 6GHz được" khi chưa đối chiếu chứng nhận thiết bị.
- Trích comment về Việt Hàn Security hay các đại lý như bằng chứng tiêu cực: chỉ là comment xin giá, chưa chứng minh họ không phản hồi.
- Comment "Hk vừa bị hack vụ lộ hết. Dùng giờ sợ lắm" [59] không rõ "Hk" chỉ hãng nào: không dùng để nói về bảo mật Hikvision.

## Khoảng trống dữ liệu
- Mẫu B2B vẫn nhỏ (lượt 2026-11-08: MikroTik 69, Ruijie 39, UniFi 14; thêm 26 ngày 2026-11-14) — video thương hiệu mảng này ít view/ít comment — kéo thêm theo model còn thiếu (EG105G-P, hAP, U7 Lite) hoặc `--video` cụ thể.
- Chưa đọc tay toàn bộ 1.023 comment; % dựa trên từ khoá — rà soát tay hoặc dùng bộ mã hoá có kiểm tra chéo.
- ~~Chưa kéo kênh chính hãng~~ — đã kéo 2026-11-14 (MVN, UniFi Việt Nam, Ruijie Reyee Vietnam), nhưng gần như không có comment [52][55][56]; chưa tìm được kênh YouTube chính thức của MikroTik tại VN ngoài MVN.
- Không có comment nhắc HNP trên YouTube — HNP chưa có kênh — theo dõi sau khi mở kênh.
- ~~Hikvision lắp đặt: ít comment~~ — đã bổ sung 99 comment 2026-11-14 (chủ yếu xin giá, hỏi đầu ghi); còn thiếu comment về thi công thực tế.
- Phần trả lời của chủ video không tách khỏi comment (script không lưu tên): không xác định được comment nào là phản hồi của shop.
- Video tiếng Anh/Indonesia (UniFi U7 Pro, MikroTik hEX Indonesia) bị loại khỏi mẫu %.
- UPS Santak/Cyber Power: rất ít comment — thêm từ khoá theo model (Santak C1K, Cyber Power BU600E, "UPS cho đầu ghi camera") hoặc review UPS trên Shopee/Voz.
- Wifi 7 văn phòng: mẫu 19 comment; video Wifi 7 doanh nghiệp (UniFi U7 Mesh/LR, Huawei eKitEngine) hầu hết 0 comment.
- Văn bản pháp lý 6GHz: chỉ đọc kết quả tìm kiếm thứ cấp [72][73], chưa mở văn bản gốc của Bộ KH&CN — số thông tư, ngày hiệu lực, giới hạn công suất cần đối chiếu.
- Tín hiệu E50UG ether1 ~200Mbps: chỉ từ 2 video nước ngoài — cần test thật hoặc hỏi CNTT SHOP/MVN để xác minh.
- Hikvision lắp trọn gói: 99 comment nhưng chủ yếu "xin giá"; chưa có comment về thi công thực tế (nhà xưởng, cửa hàng) — video Camera Phú Thịnh có 0 comment.
- Phản hồi của kênh bán đối với comment xin giá không xác định được (script không lưu tên người viết).

## Nguồn
Nguồn 1–71 là video YouTube, comment kéo qua YouTube Data API v3 ngày 2026-11-08 (nguồn 1–46) và 2026-11-14 (nguồn 47–71; raw: `research/hoang-nam-phat/youtube/raw/`). Nguồn 72–73 là trang web tra cứu quy định 6GHz.
1. [Hướng dẫn cấu hình chia VLAN trên Router Mikrotik — CNTT SHOP](https://www.youtube.com/watch?v=t3nqoAPkwss) — truy cập 2026-11-08
2. [Cấu hình Cân bằng tải (Cộng gộp băng thông) PPPoE và 1 WAN trên Mikrotik — CNTT SHOP](https://www.youtube.com/watch?v=zUEF2sWM52Q) — truy cập 2026-11-08
3. [Cấu hình cân bằng tải PCC 2 đường WAN trên MikroTik (RouterOS v7+) — Công Nghệ Việt Tuấn](https://www.youtube.com/watch?v=daKwHWxxFRA) — truy cập 2026-11-08
4. [Review Router Mikrotik hEX refresh E50UG — CNTT SHOP](https://www.youtube.com/watch?v=bewRjEyESIw) — truy cập 2026-11-08
5. [Review Router Mikrotik RB760iGS cho DN vừa và nhỏ — CNTT SHOP](https://www.youtube.com/watch?v=I5Zaa4gd6P4) — truy cập 2026-11-08
6. [Thiết kế mạng PPPoE Server Quản Lý Hộ Dân — Mikrotik Viet Nam](https://www.youtube.com/watch?v=6nYRXMiKR5Q) — truy cập 2026-11-08
7. [Router cân bằng tải Ruijie RG-EG105G V3 - 2 WAN - 100 user — Góc Công Nghệ.com](https://www.youtube.com/watch?v=k5c4eJKeL-E) — truy cập 2026-11-08
8. [Router cân bằng tải Ruijie RG-EG105G V2 — CAMERA PHAN RANG BEST BUY](https://www.youtube.com/watch?v=23QsDPcqtr8) — truy cập 2026-11-08
9. [Cân bằng tải tối ưu mạng nhà hàng, khách sạn, quán cafe #ruijie — Demo 055](https://www.youtube.com/watch?v=lIkQEnw78Vg) — truy cập 2026-11-08
10. [Cải tạo mạng LAN, WiFi và lắp cân bằng tải #ruijie Long Biên — Góc Công Nghệ.com](https://www.youtube.com/watch?v=RD57oJQ8rjo) — truy cập 2026-11-08
11. [Cài Đặt Home Router EW300, EW1200G, EW1800 Ruijie|Reyee — Kim Channel](https://www.youtube.com/watch?v=WuhvPLvUUJw) — truy cập 2026-11-08
12. [Review Unifi U7 Lite - quán cà phê, văn phòng, khách sạn — WIFI.COM.VN](https://www.youtube.com/watch?v=CyduI2m1RlQ) — truy cập 2026-11-08
13. [Tôi vừa test Unifi U7 Pro Max tại nhà — Công Nghệ Việt Tuấn](https://www.youtube.com/watch?v=Ms4RDQgHArY) — truy cập 2026-11-08
14. [So sánh camera 2 mắt ngoài trời Yoosee và Imou — Anh Kỹ Thuật Review](https://www.youtube.com/watch?v=T_LtbuMowHc) — truy cập 2026-11-08
15. [Nên mua camera 2 mắt Ezviz H9C Dual hay Imou S7XP Dual — Anh Kỹ Thuật Review](https://www.youtube.com/watch?v=1zBU6bNf-BA) — truy cập 2026-11-08
16. [So sánh camera WiFi Imou Titan Pro và Imou S7XFP Pro — THẮNG CAMERA](https://www.youtube.com/watch?v=gOqIAOV6ma8) — truy cập 2026-11-08
17. [Hướng dẫn cài đặt lại camera Ezviz khi đổi nhà mạng — Thiết bị công nghệ Văn Tư](https://www.youtube.com/watch?v=9ejRr_jK-_U) — truy cập 2026-11-08
18. [Hướng dẫn cài đặt kết nối wifi camera Ezviz trên điện thoại — Thiết bị công nghệ Văn Tư](https://www.youtube.com/watch?v=ylXKuaNgAqg) — truy cập 2026-11-08
19. [Lắp đặt và cài đặt camera Ezviz H6c Pro C6N — HOÀNG HẰNG MOBILE](https://www.youtube.com/watch?v=NMFfbwSqtf8) — truy cập 2026-11-08
20. [Lắp đặt và cài đặt camera Ezviz H8C Pro 2K — Thiết bị công nghệ Văn Tư](https://www.youtube.com/watch?v=gbuv3I_h6TE) — truy cập 2026-11-08
21. [Hướng Dẫn Lắp Đặt Camera IP Hikvision Cho Nhà Xưởng — Camera Phú Thịnh](https://www.youtube.com/watch?v=rK8RajqfZaY) — truy cập 2026-11-08
22. [Hướng dẫn trọn bộ camera Hikvision — Demo 055](https://www.youtube.com/watch?v=dEbg2FLzewM) — truy cập 2026-11-08
23. [Đây là lý do Wi-Fi nhà bạn CỰC CHẬM dù đóng tiền GÓI CAO — Vật Vờ Studio](https://www.youtube.com/watch?v=DpdJCy5ed_c) — truy cập 2026-11-08
24. [Wifi 7 - Mớ HỖN ĐỘN mà người dùng dễ bị DẮT MŨI — Real Tech](https://www.youtube.com/watch?v=SkeNSfC7KAY) — truy cập 2026-11-08
25. [WIFI 6 & WIFI 7 Khác Nhau Chỗ Nào? — SH TECH](https://www.youtube.com/watch?v=aM_Nq0cuF24) — truy cập 2026-11-08
26. [3 con router mesh trong nhà mình — Duy Luân Dễ Thương](https://www.youtube.com/watch?v=QiKQByyIftg) — truy cập 2026-11-08
27. [Đây sẽ là Router Wifi 7 quốc dân? Đánh giá Asus RT-BE50 — Insidegram](https://www.youtube.com/watch?v=DqSuJtJhUpU) — truy cập 2026-11-08
28. [Test tốc độ thực tế Wifi 7 cùng Duy Thẩm — FPT Telecom](https://www.youtube.com/watch?v=BC25I4EIV4w) — truy cập 2026-11-08
29. [Lắp đặt cài đặt camera Hikvision DS-2DE2C400MWG-E — Thiết bị công nghệ Văn Tư](https://www.youtube.com/watch?v=4mZ5RzW0wz0) — truy cập 2026-11-08
30. [Những lưu ý trước khi mua camera quan sát — Demo 055](https://www.youtube.com/watch?v=Tx6GYm8TB_Y) — truy cập 2026-11-08
31. [So sánh đầu ghi Imou và Ezviz — Demo 055](https://www.youtube.com/watch?v=9aom73DbihQ) — truy cập 2026-11-08
32. [Phòng nghỉ Khách sạn, Resort dùng WiFi gì? — CNTT SHOP](https://www.youtube.com/watch?v=ZMqK48QB4WI) — truy cập 2026-11-08
33. [Báo Giá 4 Mẫu Bộ Kích Sóng WiFi, Router WiFi — WiFi Toàn Cầu Giá Rẻ](https://www.youtube.com/watch?v=XGSIiHsdzkY) — truy cập 2026-11-08
34. [Access Point Wifi 7 cho doanh nghiệp Unifi U7 — WIFI.COM.VN](https://www.youtube.com/watch?v=0fCiJN9i0Yg) — truy cập 2026-11-08
35. [So sánh camera Imou Titan Pro và Imou Cruiser — Anh Kỹ Thuật Review](https://www.youtube.com/watch?v=MPOG-AY_9qU) — truy cập 2026-11-08
36. [Router Mikrotik hEX (RB750Gr3) và hEX refresh (E50UG) khác gì nhau — CNTT SHOP](https://www.youtube.com/watch?v=uUVHvmrk1nE) — truy cập 2026-11-08
37. [Cách tư vấn, đánh giá và thiết kế hệ thống mạng Khách sạn — Mikrotik Viet Nam](https://www.youtube.com/watch?v=VzZ5pdH1RZE) — truy cập 2026-11-08
38. [Thiết kế mạng WiFi Marketing - Hotspot trên RouterOS — Mikrotik Viet Nam](https://www.youtube.com/watch?v=iQLbODyInhU) — truy cập 2026-11-08
39. [Hướng Dẫn Cài Đặt Router Wifi Ruijie EW1200G PRO trên App Reyee Router — CCTVIT Official](https://www.youtube.com/watch?v=3YDWAR9x4UU) — truy cập 2026-11-08
40. [Cấu hình cân bằng tải ECMP trên RouterOS — Mikrotik Viet Nam](https://www.youtube.com/watch?v=Fe2r_wLnNLg) — truy cập 2026-11-08
41. [Phát wifi TP Link Archer AX55 Pro cho quán cafe, nhà hàng, khách sạn — Demo 055](https://www.youtube.com/watch?v=8dSEesdmy8o) — truy cập 2026-11-08
42. [Bộ phát wifi Ruijie RG-EW300 Pro, giới thiệu và cài đặt qua app Reyee — Demo 055](https://www.youtube.com/watch?v=Aa1_O2l8oh0) — truy cập 2026-11-08
43. [Phát wifi 6 quán cafe, nhà hàng, khách sạn Ruijie RG-EW3000GX — Demo 055](https://www.youtube.com/watch?v=rmnJxrT7eG0) — truy cập 2026-11-08
44. [UniFi U7 Pro & Max - DON'T BUY Here's Why — digiblur DIY (tiếng Anh, ngoài mẫu %)](https://www.youtube.com/watch?v=P7MBZ80HzmI) — truy cập 2026-11-08
45. [Lắp đặt và cài đặt camera Ezviz H6C G1 4K — Thiết bị công nghệ Văn Tư](https://www.youtube.com/watch?v=9DsL1nNhEcg) — truy cập 2026-11-08
46. [Lên đời Wifi Xiaomi AX3000T — Kênh Sáng Tạo .COM](https://www.youtube.com/watch?v=D36-lv255j8) — truy cập 2026-11-08
47. [Mikrotik E50UG (unboxing e comparativo com a RB750gr3) RB Hex Refresh — Amigos Telecom (tiếng Bồ Đào Nha, ngoài mẫu %)](https://www.youtube.com/watch?v=ip1zvrvj69o) — truy cập 2026-11-14
48. [Pengaturan Dasar Mikrotik hEX Refresh E50UG — PHEQTOR Network (tiếng Indonesia/Anh, ngoài mẫu %; đã có trong raw lượt 2026-11-08)](https://www.youtube.com/watch?v=CVWL03JI7xc) — truy cập 2026-11-14
49. [Giới thiệu và hướng dẫn cài đặt wifi Ruijie chi tiết nhất — shopcongnghe24h.vn](https://www.youtube.com/watch?v=PbNAEuCjGLk) — truy cập 2026-11-14
50. [Liệu Unifi U6-Plus có phải thiết bị lý tưởng trong năm 2024 cho gia đình và doanh nghiệp? — Công Nghệ Việt Tuấn](https://www.youtube.com/watch?v=PhMn8SlODqI) — truy cập 2026-11-14
51. [Unifi U7 Pro Max Review | Cao cấp - Wifi 7 tốc độ cao — Công Nghệ Việt Tuấn (đã có trong raw lượt 2026-11-08)](https://www.youtube.com/watch?v=F6Ud4h7i6Ok) — truy cập 2026-11-14
52. [[Người mới] Cân bằng tải (PCC) và mở cổng (NAT Port) trên Router Mikrotik — Mikrotik Viet Nam](https://www.youtube.com/watch?v=2ALjcLi7n6Q) — truy cập 2026-11-14
53. [[PPTP VPN] Cấu hình kết nối người dùng từ xa về mạng Công ty với VPN PPTP — Mikrotik Viet Nam](https://www.youtube.com/watch?v=AKyOQNerMRg) — truy cập 2026-11-14
54. [[Cảng biển] Phần 1 - Lựa chọn thiết bị và phương án kết nối mạng Di động 4G/5G — Mikrotik Viet Nam](https://www.youtube.com/watch?v=wUj00fzrFOU) — truy cập 2026-11-14
55. [Touch Pass for UniFi Access — UniFi Việt Nam](https://www.youtube.com/watch?v=c3fndX9gSAw) — truy cập 2026-11-14
56. [Hướng dẫn cấu hình VLAN hàng loạt bằng công cụ ACN trên Ruijie Cloud — Ruijie Reyee Vietnam](https://www.youtube.com/watch?v=zXqNsv0dFWE) — truy cập 2026-11-14
57. [GearHub.vn - [2] Thiết lập nhiều kết nối Internet trên Ruijie | Reyee — Gear Hub (WiFi Zone)](https://www.youtube.com/watch?v=1zv6V5Aidv0) — truy cập 2026-11-14
58. [Nên lắp Camera có đầu ghi hay Camera Wifi? — 88 Media](https://www.youtube.com/watch?v=d6a_CEBC7jk) — truy cập 2026-11-14
59. [Camera nhìn đêm như ngày - AI ColorVu Hikvision 1B47G3 — Việt Hàn Security](https://www.youtube.com/watch?v=C36rTOn7eX4) — truy cập 2026-11-14
60. [Khám phá Camera Hikvision TandemVu 3 mắt góc nhìn 180 độ xoay Zoom 25X — Việt Hàn Security](https://www.youtube.com/watch?v=CytKmCj5d9c) — truy cập 2026-11-14
61. [Hướng dẫn cài đặt camera Hikvision 2 mắt TandemVu DS-2SE2C400MWG-E/14 — THẮNG CAMERA](https://www.youtube.com/watch?v=39-yHQzXZb4) — truy cập 2026-11-14
62. [Mọi người Lưu Ý khi lắp camera IMOU làm sao cho đúng — Camera Ngọc Diệp](https://www.youtube.com/watch?v=-NfHWL_XLrA) — truy cập 2026-11-14
63. [Camera dome Hikvision 4MP ghi hình MÀU ban đêm có sắc nét và đáng giá 1,5 triệu? — Viễn thông Cường An](https://www.youtube.com/watch?v=0EhcMGT669Y) — truy cập 2026-11-14
64. [Mua có 108K mà Xài Quá Được Việc — VŨ SỸ TRƯỜNG (UPS 12V cho camera/wifi)](https://www.youtube.com/watch?v=lZ-oMBvoB6s) — truy cập 2026-11-14
65. [Hướng dẫn cách sử dụng bộ lưu điện ups santak tg500 — TOÀN TÂM UPS](https://www.youtube.com/watch?v=4rJ3ef4s30s) — truy cập 2026-11-14
66. [PIN DỰ PHÒNG CHO PC! Phụ Kiện Lạ Mà Quen và Cách hiểu ĐÚNG Về Bộ Lưu Điện - UPS APC — An Phát Computer](https://www.youtube.com/watch?v=JCvPpg6CrxI) — truy cập 2026-11-14
67. [UPS cho Wifi Camera không lo mất điện chạy xuyên đêm luôn — Mr Chế](https://www.youtube.com/watch?v=dJ5KgOjJzPA) — truy cập 2026-11-14
68. [Bộ lưu điện ups 12v cho camera, modem wifi — Thành Đào Channel](https://www.youtube.com/watch?v=JOjb7osMzks) — truy cập 2026-11-14
69. [Bộ lưu điện UPS có cổng USB PROLiNK PRO700SFC 650VA, dùng cho NAS, PC, Wifi, Camera — Cùng Sáng Tạo Club](https://www.youtube.com/watch?v=Hnh4bGYR5CE) — truy cập 2026-11-14
70. [Giải pháp Wi-Fi 7 từ TP-Link: router, Wi-Fi Mesh và access point cho doanh nghiệp — Tinh tế](https://www.youtube.com/watch?v=XeShU6bpxS0) — truy cập 2026-11-14
71. [Trên tay TP-Link EAP723: AP Wi-Fi 7 hướng đến doanh nghiệp, quản lý tập trung với Omada — Tinh tế](https://www.youtube.com/watch?v=CoUvkAgPUfI) — truy cập 2026-11-14
72. [Vietnam: Circular No. 01/2025/TT-BKHCN Updates Regulations to Enable 6 GHz Band Usage for License-Exempt Devices — TÜV SÜD](https://www.tuvsud.com/en/knowledge-hub/technical-updates/consumer-products-and-retail-essentials/vietnam-circular-no-012025tt-bkhcn-updates-regulations) — truy cập 2026-11-14 (qua kết quả tìm kiếm, chưa mở trang đầy đủ)
73. [Vietnam allows 5925-6425 MHz for WLAN — Cetecom advanced](https://cetecomadvanced.com/en/news/vietnam-allows-5925-6425-mhz-for-wlan/) — truy cập 2026-11-14 (qua kết quả tìm kiếm, chưa mở trang đầy đủ)
