---
brand: hoang-nam-phat
brand_name: Hoàng Nam Phát
file_id: "31"
group: 3-khach-hang
agent: customer-personas
title: Customer Insight & Personas
date: 2026-11-08
updated: 2026-11-14
status: draft
confidence: TB
sources: 44
depends_on: ["10","20","21","30"]
gaps: ["inbox/Zalo/điện thoại khách thật (raw/khach chưa có)", "tỷ trọng B2B/B2C, giá trị đơn, dữ liệu đơn hàng", "review Google Maps/Shopee/Lazada (không truy cập được qua công cụ; thử lại 2026-11-14 vẫn không có review khách thật)", "Tinhte/Webtretho/nhóm Facebook (chỉ đọc được Voz; Tinhte 2026-11-14 chỉ ra bài bán hàng)", "persona dự án (xưởng/trường) chưa có tín hiệu", "quy mô phân khúc", "persona riêng cho UPS: chưa đủ dữ liệu", "tín hiệu E50UG ether1 chưa xác minh"]
---

# Customer Insight & Personas — Hoàng Nam Phát

> Cách đọc: persona dựng từ (a) hồ sơ nội bộ mục 6 [1], (b) comment YouTube ở file 30 (lượt 2026-11-08 và 2026-11-14) [5][26]–[41], (c) 3 topic Voz đọc ngày 2026-11-08 [20]–[22]. Chưa có dữ liệu khách thật của HNP (`raw/khach/` chưa tồn tại) nên mọi persona là giả thuyết từ voice-of-customer ngoài (Nhận định · TB, trừ khi ghi khác). Trích dẫn giữ nguyên văn, bỏ tên người viết. Đoạn trích Voz lấy qua công cụ đọc trang, kiểm lại thread gốc trước khi đăng công khai.
>
> **Thay đổi so với bản 2026-11-08:** thêm insight 31-I10 đến 31-I14; sửa 31-I3, 31-I4, 31-I7; bổ sung vào 4 persona hiện có (camera + đầu ghi, UPS, B2B nhiều WAN); không thêm persona mới (xem mục Persona); thêm trigger UPS/cúp điện; thêm góc 31-A11 đến 31-A16.

## Tóm tắt
- Hồ sơ nội bộ cho thấy 3 nhóm khách chắc chắn có: kỹ thuật viên/đại lý, khách mua qua tư vấn trực tiếp, và SME/quán/văn phòng (hàng bán chạy là cân bằng tải, AP 80–400 user). Tỷ trọng: Chưa xác minh [1].
- Quán cafe/nhà hàng vẫn là persona có voice-of-customer rõ nhất trên Voz: ngân sách ~3–5 triệu cho ~60–80 thiết bị, hỏi "router mạnh hay thêm AP", "mỗi AP chỉ nên để kết nối tối đa tầm 25-30 thiết bị" [20].
- Mới 2026-11-14: mảng camera cho thấy câu hỏi về đầu ghi (~25% trong 99 comment Hikvision) và xin giá/chi phí lắp (~18%); người đã mua camera wifi hay muốn thêm đầu ghi sau [27][28][29]. Khách camera là cửa vào cho danh mục Đầu ghi + camera của HNP (Nhận định · TB).
- Mới: nhu cầu UPS cho wifi/camera có thật nhưng thảo luận lệch sang UPS 12V rẻ; khách hỏi "bao lâu", "kéo nổi router + switch PoE + đầu ghi không", và quên cấp điện cho modem/ONT nên "cúp điện thì cũng mất mạng" [30][32][33][34]. Mẫu nhỏ, chưa đủ dựng persona UPS riêng; gắn vào P-chu-nha-pho, P-chu-quan, P-sme-van-phong.
- Khách B2B kỹ thuật hỏi câu dịch vụ: cân bằng tải + NAT để xem camera từ xa, VPN 2 chi nhánh khác hãng, thêm AP nhiều tầng, quản lý nhiều site [35][36][37][38]. Giá công khai vẫn là rào cản chung (nhà bán không hiện giá thì khách đi) [8][5].
- Tìm review sàn/Maps/diễn đàn bổ sung 2026-11-14: không tìm được review khách thật về HNP hay UPS trên Tinhte/Voz/Maps/sàn qua công cụ; kết quả chỉ là bài bán hàng và hướng dẫn chọn UPS của nhà bán lẻ [43][44].

## Phân khúc
Quy mô và giá trị đơn: HNP chưa có dữ liệu đơn hàng [1], nên cột quy mô ghi "Chưa xác minh". Giá trị đơn là ước tính từ giá niêm yết [2] (Nhận định · Thấp), chưa phải số liệu bán thực tế.

| Phân khúc | B2B/B2C | Quy mô ước tính | Giá trị đơn (ước tính) | Mức ưu tiên |
|-----------|---------|-----------------|------------------------|-------------|
| Quán cafe, nhà hàng, khách sạn nhỏ, cửa hàng | B2B (nhỏ) | Chưa xác minh | 1 router (E50UG 1,68 triệu / EG105G-V3 1,79 triệu) + vài AP (RAP2200(E) 1,48 triệu/cái) ≈ 4–8 triệu nếu 1 router + 2–4 AP, chưa tính công [2]. Thêm camera + đầu ghi (đầu ghi 0,98–9,9 triệu [2]) và UPS (chưa có giá, Chưa xác minh [2]) | Cao |
| SME, văn phòng 20–100 người | B2B | Chưa xác minh | Router cân bằng tải + switch PoE + AP: vài chục triệu (Nhận định · Thấp); thang giá danh mục: switch 0,39–28,6 triệu, AP 1,32–10,3 triệu [2] | Cao |
| Kỹ thuật viên, đại lý, thợ lắp camera/mạng | B2B (mua lại) | Chưa xác minh | Mua lẻ nhiều lần, giá sỉ/chiết khấu: Chưa xác minh [1][2] | Cao (nhân bản đơn qua người lắp) |
| Hộ gia đình nhà phố (wifi nhiều tầng, camera) | B2C | Mẫu YouTube lớn nhất (86% mẫu lượt 1) nhưng HNP không có gian hàng sàn [5][2] | AP/camera lẻ: camera 3,3–22,4 triệu theo danh mục [2] | Trung bình (kéo lead qua nội dung, chuyển đổi nhờ tư vấn) |
| Khách camera đã có/đang cân nhắc đầu ghi (cửa hàng, nhà phố, xưởng nhỏ) — lát cắt chéo P-chu-quan/P-chu-nha-pho/P-ky-thuat-vien | B2C + B2B nhỏ | Chưa xác minh; 99 comment Hikvision lượt 2 chỉ là chỉ báo [27][28][29] | Camera 3,3–22,4 triệu + đầu ghi 0,98–9,9 triệu theo danh mục [2] | Trung bình–Cao (Nhận định · Thấp: danh mục đủ nhưng chưa có dữ liệu bán) |
| Dự án: nhà xưởng, trường học, showroom | B2B (dự án) | Chưa xác minh | Cao, đặt cọc/nhiều đợt theo chính sách [2] | Thấp–TB (có trong đối tượng công bố [1], chưa có tín hiệu cầu) |

## Persona
Năm persona giữ nguyên ID. Mảng UPS chưa tạo persona riêng: chỉ có 63 comment UPS ngoài video DIY, phần lớn người hỏi là hộ gia đình/cửa hàng nhỏ đã thuộc các persona dưới; không có đơn hay inbox HNP để tách (Nhận định · TB). Mở lại khi có dữ liệu khách mua UPS.

### P-chu-quan
**Chủ quán cafe / nhà hàng / khách sạn mini / chủ cửa hàng** (Nhận định · TB; chưa có dữ liệu nhân khẩu học của khách HNP)
- **Bối cảnh:** quán 100–200 m², đông khách giờ cao điểm 60–100 thiết bị, đang dùng modem/mesh nhà mạng bị lag. Ví dụ thật trên Voz: quán ~150 m², đang dùng mesh nhà mạng bị lag khi đông, ngân sách khoảng 3–5 triệu [20]. Cập nhật: cửa hàng thường có thêm camera + đầu ghi và POS; cúp điện là mất mạng lẫn camera (Nhận định · TB) [32][34].
- **Mục tiêu:** wifi không rớt giờ đông, kèm POS/camera chạy ổn, quản lý được bằng điện thoại, chi phí vừa phải.
- **Nỗi đau:** lag giờ cao điểm; không biết cần router mạnh hay thêm AP; mạng yếu ở tầng/sân; sợ cấu hình khó; nghi ngờ số "100 user"; cúp điện thì mất mạng/camera, không biết một UPS cấp được những gì [20][7][18][34].
- **Tiêu chí chọn mua:** chịu được số thiết bị thật, dễ cài, quản lý từ xa, ngân sách; có người lắp và bảo hành; giá hiện rõ.
- **Kênh tìm thông tin:** YouTube (video lắp cho quán cafe của Demo 055, Góc Công Nghệ), Voz, hỏi thợ quen [20][18].
- **Người ảnh hưởng:** thợ lắp/kỹ thuật viên quen, kênh YouTube kỹ thuật, ý kiến trên Voz.
- **Câu nói tiêu biểu:**
  - "tầm 60–80 devices (giờ cao điểm)" — chủ topic quán cafe, Voz [20]
  - "mỗi AP chỉ nên để kết nối tối đa tầm 25-30 thiết bị" — người trả lời, Voz [20]
  - "Rujie phụ tầng 2 và tâng 3 có xung ip modem chính viettel ko b nhỉ thấy mạng yếu cam hay ngoại tuyến" — YouTube [18]
  - "Có loại nào dùng cho 3 cục ko ạ? Router + switch poe và 1 đầu ghi" — YouTube [34]

### P-sme-van-phong
**Chủ SME / quản lý hành chính-IT kiêm nhiệm văn phòng 20–100 người** (Nhận định · TB)
- **Bối cảnh:** văn phòng nhiều tầng, người dùng chung với phần mềm kế toán, camera, máy in; không có IT chuyên trách, nhờ người quen hoặc tự tìm. Ví dụ: công ty gia đình ~30 nhân viên dự định dùng RB750Gr3 + switch 16 port, kéo CAT6 xuống từng tầng [22]. Cập nhật: một phần là doanh nghiệp có chi nhánh/2 đường mạng, hỏi cân bằng tải, VPN, quản lý nhiều site [35][36][38].
- **Mục tiêu:** mạng ổn định, tách mạng khách/nhân viên, ít phải xử lý sự cố, ngân sách tiết kiệm nhưng không sơ sài; xem camera từ xa kể cả khi chạy 2 WAN.
- **Nỗi đau:** thiết bị cũ ("750gr3 đời hơi sâu"), đi dây nối tầng dễ lỗi, không có ai quản lý từ xa, gói 1Gbps cần router chịu băng thông; cân bằng tải làm đầu ghi/camera không xem được từ xa; nối 2 chi nhánh khác hãng router [22][21][35][36].
- **Tiêu chí chọn mua:** độ ổn định, bảo hành rõ, hóa đơn VAT, quản lý tập trung/cloud, tư vấn đúng số user; còn phân biệt SOHO/SME, so Omada/UniFi/Ruijie [39].
- **Kênh tìm thông tin:** Voz, YouTube (CNTT SHOP, Mikrotik Viet Nam), Google "router cân bằng tải", nhà bán chuyên ngành [22][8][24][35].
- **Người ảnh hưởng:** IT quen, nhà thầu, kênh YouTube chuyên ngành.
- **Câu nói tiêu biểu:**
  - "khuyên thật fen nếu là công ty thì đừng siết chi phí quá." — Voz [22]
  - "Cho e hỏi xíu là thiết bị mình quảng lý từ xa thông qua cloud dc ko ah... Giống như ruijie vậy" — YouTube [24]
  - "cân bằng tải PCC lúc cấu hình thì mình đã chỉ định lưu lượng vào wan nào thì ra wan đó rồi thì sao lại né đầu ghi ko cho qua cân bằng tải được ạ ? Ví dụ dùng điện thoại xem camera thông qua 1 ip tĩnh wan2" — YouTube [35]
  - "Hiện m dùng U-AC PRO cho nhiều chi nhánh, có cách nào add toàn bộ chi nhánh vào 1 controller để setup dc không nhỉ." — YouTube [38]

### P-ky-thuat-vien
**Kỹ thuật viên, thợ lắp mạng/camera, đại lý nhỏ** (Sự thật một phần: đánh giá duy nhất trên fanpage đến từ người làm nghề lắp đặt/bảo trì camera [1]; còn lại Nhận định · TB)
- **Bối cảnh:** lắp cho khách lẻ và dự án nhỏ, mua thiết bị theo đơn, cần nguồn hàng chính hãng có CO/CQ và hỗ trợ kỹ thuật. Cập nhật: gặp lỗi ghép camera 2–3 mắt vào đầu ghi và khách hỏi cấp nguồn dự phòng (Nhận định · TB) [29][34].
- **Mục tiêu:** hàng đúng, giá tốt, ít bảo hành lỗi, có chỗ hỏi cấu hình nhanh để khỏi mất uy tín với khách.
- **Nỗi đau:** thiết bị rẻ kém tin cậy làm mất uy tín, hàng dính lỗi bảo hành, hướng dẫn cân bằng tải dài và khó theo, khách đòi cấu hình đơn giản; tương thích camera - đầu ghi [14][10][21][29].
- **Tiêu chí chọn mua:** giá sỉ/chiết khấu (Chưa xác minh chính sách của HNP [2]), chính hãng, bảo hành đổi nhanh, hỗ trợ kỹ thuật. Muốn tự kiểm chứng thông số trước khi bán (ví dụ cổng ether1 của E50UG: tín hiệu chưa xác minh [40][41]).
- **Kênh tìm thông tin:** YouTube hướng dẫn cấu hình, Voz, nhóm Zalo/Facebook nghề; quan hệ cá nhân với nhân sự HNP [5][1][2].
- **Người ảnh hưởng:** đồng nghiệp, kênh kỹ thuật, nhà phân phối.
- **Câu nói tiêu biểu:**
  - "Tôi chuyên đi lắp camera nhưng để lắp yoose kể cả cho lãi gấp đôi cũng k làm, mất uy tín" — YouTube [14]
  - "tự nhiên 4 port lan nhảy xuống 100mb" (thiết bị Reyee đã lắp cho khách, phải gửi bảo hành) — Voz [21]
  - "Cân bằng tải trên mik nó đã rối rắm rồi, a hướng dẫn còn tăng phần phức tạp, bó tay thật" — YouTube [10]
  - "sao mình gáng nó vào đầu ghi ip hikvision 7616 nó chỉ nhận có 1 con mắt ở dưỡi. xin chỉ giáo" — YouTube [29]

### P-chu-nha-pho
**Chủ nhà phố / hộ gia đình lắp wifi nhiều tầng và camera** (Nhận định · TB; dữ liệu YouTube nhiều nhất)
- **Bối cảnh:** nhà 2–4 tầng, gói 500Mbps–1Gbps của Viettel/VNPT/FPT, 10–30 thiết bị, camera trong và ngoài nhà; hay tự cài rồi gặp lỗi. Cập nhật: nhiều người mua camera wifi trước, sau gặp điểm chết wifi/thẻ nhớ ngắn nên tính thêm đầu ghi/PoE [26].
- **Mục tiêu:** wifi phủ đều các tầng, camera xem được từ điện thoại, không phải gọi thợ liên tục, cúp điện vẫn có mạng/camera.
- **Nỗi đau:** tầng trên yếu dù đóng gói cao; nhầm mesh/repeater/AP; camera mất kết nối khi đổi wifi/nhà mạng; thẻ nhớ ghi được mấy ngày; phân vân Wifi 6 hay Wifi 7; cúp điện vẫn mất mạng vì quên cấp UPS cho modem/ONT; hoang mang giữa UPS 12V rẻ và UPS chính hãng [16][11][19][17][26][30][32].
- **Tiêu chí chọn mua:** dễ cài ("em lowtech"), giá hiện sẵn, thương hiệu quen, có hướng dẫn tiếng Việt, có chỗ hỏi; với UPS thêm: chạy được bao lâu, an toàn [9][31].
- **Kênh tìm thông tin:** YouTube/TikTok review, nhóm Facebook, Shopee/TGDĐ (HNP không có gian hàng sàn [2]).
- **Người ảnh hưởng:** reviewer YouTube, người quen biết kỹ thuật, thợ nhà mạng.
- **Câu nói tiêu biểu:**
  - "em lowtech, mua con này về tự set úp dễ không shop" — YouTube [9]
  - "Với người dùng phổ thông thì wifi 6 là quá tốt rồi. Bao giờ thiết bị wifi 7 rẻ hơn thì dùng :))" — YouTube [17]
  - "Thẻ 64Gb ghi liên tục khoảng bao lâu a" — YouTube [19]
  - "Cam của mình sao cứ tắt wifi đi là nó ko ghi video dc nữa nhỉ" — YouTube [11]
  - "Dùng wifi như nhà mình gặp vài điểm chết wifi ko tới dc lại phải dùng dây nghĩ nó cũng cay" — YouTube [26]
  - "Mình dùng bộ này cho cục wifi khi cúp điện dùng đc lâu k ta" — YouTube [31]

### P-chu-du-an
**Quản lý cơ sở / chủ dự án nhà xưởng, trường học, showroom** (Nhận định · Thấp; chỉ dựa vào "đối tượng công bố" trong hồ sơ nội bộ [1], chưa có comment hay đơn hàng xác nhận)
- **Bối cảnh:** cần camera + mạng + kiểm soát ra vào diện rộng, thường có nhà thầu hoặc IT nội bộ, yêu cầu hóa đơn, đặt cọc/nhiều đợt.
- **Mục tiêu / nỗi đau / tiêu chí:** chưa xác minh; suy luận: báo giá nhanh, bảo hành dự án, cam kết tiến độ, hóa đơn VAT [2].
- **Kênh tìm thông tin:** Chưa xác minh.
- **Câu nói tiêu biểu:** Không có (một comment "Ad nhận thiết kế hạ tầng mạng k" ở YouTube là tín hiệu rất nhỏ [25]; lượt 2026-11-14 không bổ sung thêm tín hiệu dự án).
- **Ghi chú:** giữ ID để content agent không dùng cho brief cho đến khi có dữ liệu thật.

## Hành trình mua
Theo comment YouTube [5][26]–[41] và Voz [20][21][22]; điểm chạm tại HNP: website, Zalo, FB nhân sự [2].

| Giai đoạn | Điểm chạm | Câu hỏi khách đặt ra | Cơ hội cho HNP |
|-----------|-----------|----------------------|----------------|
| Nhận biết | Lag/rớt mạng giờ đông, lắp quán mới, camera mất kết nối, cúp điện mất mạng/camera; tìm trên YouTube, Voz, Google | "Wifi nhà tôi chậm dù đóng gói cao", "quán 80 thiết bị cần gì", "cúp điện thì cũng mất mạng" [16][20][34] | Nội dung chẩn đoán (YouTube/Facebook/Website); HNP chưa có kênh video [2] |
| Cân nhắc | Video review/so sánh, topic Voz, hỏi thợ | MikroTik hay Ruijie? bao nhiêu user thật? cloud có an toàn? Wifi 6 hay 7 (6GHz có không)? camera wifi hay có đầu ghi? UPS 12V hay UPS chính hãng? [21][7][15][17][39][26][30] | Bảng chọn theo số thiết bị và ngân sách; giải thích "100 user"; so sánh trung lập theo nhu cầu |
| Mua | Xin giá dưới video; nhắn Zalo/Messenger; web có giá/giỏ hàng | "Giá bao nhiêu? còn hàng không?", "lắp trọn gói bao nhiêu", "xin giá UPS" [5][8][27][28][33] | Hiện giá tham khảo công khai (cả camera, đầu ghi, UPS khi có), báo giá nhanh qua Zalo, VAT cho doanh nghiệp [2] |
| Lắp đặt / sử dụng | Tự cài hoặc nhờ thợ; video cài đặt | "Tự set có dễ không", "đổi nhà mạng cài lại sao", "chỉ WAN1 chạy", "camera 2 mắt vào đầu ghi chiếm mấy kênh", "UPS kêu tít tít" [9][11][10][29][31] | Cấu hình tại chỗ/từ xa (dịch vụ trong hồ sơ [2]); video 3–5 phút theo case; sơ đồ cấp nguồn dự phòng |
| Hậu mãi | Bảo hành, nâng cấp, mua thêm AP/đầu ghi/UPS | "Đo tốc độ thấp hơn modem", port LAN tụt 100Mb, thêm AP tầng 5–6, thêm đầu ghi cho camera wifi [12][21][37][26] | Quy trình bảo hành minh bạch, thu review/case sau lắp [2] |

## Nỗi đau & rào cản
Xếp theo tần suất xuất hiện trong dữ liệu đã đọc (Nhận định · TB; đếm thủ công theo chủ đề file 30, không phải thống kê). Cập nhật 2026-11-14: thêm dòng 8, 10, 11 và 12; xếp lại thứ tự.

| # | Nỗi đau / rào cản | Persona chính | Bằng chứng |
|---|-------------------|---------------|------------|
| 1 | Không biết chọn thiết bị nào đủ cho số thiết bị thật; sợ mua thiếu hoặc dư | P-chu-quan, P-sme-van-phong, P-chu-nha-pho | [20][8][9][5] |
| 2 | Cấu hình khó (cân bằng tải, bridge/PPPoE, ghép đầu ghi), tự cài lỗi | Mọi nhóm, nhất là P-chu-nha-pho | [9][10][11][5][29] |
| 3 | Không có giá công khai, phải nhắn hỏi (nay thêm camera Hikvision ~18% và UPS ~13% trong mẫu lượt 2) | Mọi nhóm | [8][5][27][28][33] |
| 4 | Camera: chọn camera wifi hay có đầu ghi, tương thích đầu ghi, thẻ nhớ ghi mấy ngày | P-chu-nha-pho, P-chu-quan, P-ky-thuat-vien | [26][29][19] |
| 5 | Nghi ngờ con số quảng cáo ("100 user"; "dung lượng pin" UPS 12V) | P-chu-quan, P-ky-thuat-vien, P-chu-nha-pho | [7][6][30] |
| 6 | Sóng yếu nhiều tầng; nhầm mesh/AP/repeater; dây LAN hay mesh; thêm AP tầng cao | P-chu-nha-pho, P-chu-quan | [18][20][22][37] |
| 7 | Độ tin cậy/bảo hành thiết bị, hãng rẻ gây mất uy tín | P-ky-thuat-vien | [14][21] |
| 8 | Cúp điện vẫn mất mạng/camera: không biết UPS chạy được bao lâu, quên cấp cho modem/ONT/switch PoE; lo an toàn UPS rẻ | P-chu-nha-pho, P-chu-quan | [30][32][33][34] |
| 9 | Lo cloud/quyền riêng tư của hãng Trung Quốc; camera lưu ở đâu | P-sme-van-phong, P-chu-nha-pho | [21][15] |
| 10 | B2B nhiều WAN: cân bằng tải làm hỏng xem camera từ xa, VPN chi nhánh khác hãng, quản lý nhiều site | P-sme-van-phong, P-ky-thuat-vien | [35][36][38] |
| 11 | Ngân sách hạn chế, cân nhắc đồ cũ/second-hand ("mua sọp pi thì 1.5 củ") | P-chu-quan, P-sme-van-phong | [21][20] |
| 12 | Phân vân Wifi 6 hay 7; không rõ Việt Nam có 6GHz chưa | P-chu-nha-pho, P-sme-van-phong | [17][16][39] |

## Tính mùa vụ & trigger mua
Chưa có dữ liệu đơn theo tháng của HNP; phần dưới là trigger quan sát được hoặc suy luận (ghi rõ). Mốc quy định lấy từ file 20 [4].

| Trigger | Mùa/thời điểm | Persona | Căn cứ |
|---------|---------------|---------|--------|
| Mở quán/khai trương, sửa chữa quán | Quanh năm; trước Tết thường sửa/khai trương (Nhận định · Thấp, chưa có dữ liệu) | P-chu-quan | Suy luận, cần số đơn nội bộ |
| Lag/rớt mạng giờ đông khách | Mùa du lịch, cuối tuần, lễ (Nhận định · Thấp) | P-chu-quan | [20] mô tả lag khi đông khách |
| Đổi nhà mạng / nâng gói 1Gbps | Khi nhà mạng khuyến mại | P-chu-nha-pho, P-sme-van-phong | [11][8] |
| Xây/sửa nhà, kéo dây âm tường | Trước khi hoàn thiện nhà (dây LAN phải kéo sớm) | P-chu-nha-pho | [22][20] |
| Văn phòng mới, mở rộng nhân sự/chi nhánh, cuối năm bổ sung ngân sách | Quý 4 (Nhận định · Thấp) | P-sme-van-phong | Suy luận; câu hỏi nhiều chi nhánh/VPN [36][38] |
| Sự cố an ninh, mất trộm; camera bị lộ clip | Sau tin tức ảnh hưởng | P-chu-nha-pho, P-chu-quan | [4] (20-I5) |
| Vừa lắp camera wifi, thẻ nhớ đầy hoặc điểm chết wifi → thêm đầu ghi/PoE | Sau 1–6 tháng dùng (Nhận định · Thấp) | P-chu-nha-pho, P-chu-quan | [26] |
| Vừa bị cúp điện làm mất mạng/camera | Ngay sau sự cố cúp điện; thời điểm điện lưới quá tải/mưa bão chưa có dữ liệu (Nhận định · Thấp) | P-chu-nha-pho, P-chu-quan | [32][34]; chưa xác minh theo mùa |
| Quy định camera IP: chuẩn an toàn thông tin từ 2026-01-01, quy chuẩn Bộ Công an từ 2026-07-01 | Đã có hiệu lực năm 2026 | P-ky-thuat-vien, P-chu-du-an | [4] (20-I2) |
| Wifi 7 ra phổ thông, 6 GHz mở từ 2025 (nguồn thứ cấp, chưa đối chiếu văn bản gốc) | Chuyển tiếp 2025–2027 | P-chu-nha-pho, P-sme-van-phong | [4] (20-I4), [17], [42] |

## Dành cho Content

### Insight
| ID | Insight | Bằng chứng | Độ tin cậy |
|----|---------|-----------|-----------|
| 31-I1 | Quán/văn phòng không hỏi "hãng nào tốt nhất" mà hỏi "cần bao nhiêu AP, router nào cho X thiết bị, ngân sách Y". Mẫu: ~60–80 thiết bị, ngân sách 3–5 triệu, 1 AP chỉ nên 25–30 thiết bị | [20] | TB |
| 31-I2 | Kéo dây LAN tới từng AP được cộng đồng ưu tiên hơn mesh không dây; đi dây từng tầng về switch trung tâm. Nội dung "đúng sơ đồ đi dây" có chỗ đứng | [20][22] | TB |
| 31-I3 | **(đổi 2026-11-14)** Hai rào cản mua ở mọi nhóm: tự cấu hình khó và nghi ngờ số quảng cáo. Thêm: khách B2B hỏi cấu hình dịch vụ (cân bằng tải + xem camera từ xa, VPN chi nhánh); dịch vụ cấu hình + nói điều kiện thật của "100 user" đánh đúng cả hai | [9][10][7][35][36] | TB |
| 31-I4 | **(đổi 2026-11-14)** Thợ/kỹ thuật viên là kênh nhân bản đơn (đánh giá duy nhất trên fanpage đến từ người lắp camera); họ sợ mất uy tín vì hàng lỗi, đòi hướng dẫn cấu hình ngắn; thêm: vướng ghép camera 2–3 mắt vào đầu ghi | [1][14][10][29] | TB |
| 31-I5 | Khách so Reyee dễ cài + cloud với MikroTik linh hoạt nhưng khó; quyết định thường theo "người cấu hình là ai", nên tư vấn theo năng lực người vận hành | [21][20] | TB |
| 31-I6 | Mối lo cloud/quyền riêng tư của thiết bị Trung Quốc xuất hiện ở cả Voz và YouTube; HNP nên trả lời thẳng (dữ liệu nằm ở đâu, tắt cloud được không) trước khi nhấn Ruijie Cloud | [21][15] | TB |
| 31-I7 | **(đổi 2026-11-14)** Giá công khai là yếu tố bỏ/đi: khách xin giá dưới video, một comment nói thẳng web không giá thì chuyển luôn; lặp lại ở camera Hikvision (~18% của 99 comment) và UPS (~13% của 63), kênh bán không thấy trả lời công khai | [8][5][27][28][33] | TB |
| 31-I8 | Một phần khách cân nhắc đồ cũ/second-hand vì rẻ; thông điệp "chính hãng, hóa đơn, bảo hành" cần giải thích lợi ích cụ thể | [21][20] | Thấp (mẫu rất nhỏ) |
| 31-I9 | Chưa có tiếng nói của khách HNP thật: persona là giả thuyết, cần inbox/Zalo để xác nhận (vẫn đúng 2026-11-14; tìm thêm Maps/sàn/Tinhte cũng không ra) | — | Cao (về khoảng trống) |
| 31-I10 | **(mới)** Khách camera mua theo hai bước: mua camera wifi trước, về sau muốn thêm đầu ghi/chuyển sang PoE vì điểm chết wifi và thẻ nhớ ngắn ("thẻ 128gb chỉ lưu đc 1 tuần"). Câu hỏi hàng đầu về đầu ghi: cùng hãng hay khác hãng, camera 2–3 mắt chiếm mấy kênh. Đây là cầu nối từ camera sang danh mục Đầu ghi của HNP | [26][27][28][29] | TB |
| 31-I11 | **(mới)** Nhu cầu UPS cho wifi/camera có thật nhưng khách phân biệt kém UPS 12V mini với UPS 220V; hỏi "chạy được bao lâu", "kéo nổi router + switch PoE + đầu ghi không", và hay quên cấp điện cho modem/ONT nên cúp điện vẫn mất mạng. Mẫu nhỏ, lệch sang một video UPS tự chế | [30][31][32][33][34] | TB (mẫu nhỏ) |
| 31-I12 | **(mới)** UPS tại website HNP mới có menu (Santak, Cyber Power), chưa có giá/SKU; bài hướng dẫn chọn UPS hiện có là của nhà bán lẻ (tính công suất W/0,7 và dư 20–30%) chứ không phải tiếng nói khách. Tìm voz/Tinhte không thấy review khách thật cho Santak/Cyber Power. Chỗ trống cho nội dung tính tải | [2][43][44] | Thấp |
| 31-I13 | **(mới)** Khách B2B kỹ thuật hỏi câu "dịch vụ" cụ thể: cân bằng tải 2 WAN mà vẫn xem camera từ xa, VPN 2 chi nhánh khác hãng (MikroTik và Draytek), thêm AP tầng 5–6, gom nhiều chi nhánh vào 1 controller. Kênh chính hãng VN ít comment/phản hồi | [35][36][37][38] | TB (mẫu nhỏ) |
| 31-I14 | **(mới, chưa xác minh)** Tín hiệu từ 2 video nước ngoài: cổng ether1 của E50UG ~200Mbps trên đường 1Gb, khuyên cắm cổng khác. Thợ/đại lý cần HNP tự test trước khi bán/tư vấn gói 1Gbps; chưa dùng công khai | [40][41] | Thấp |

### Góc content gợi ý
| ID | Góc / thông điệp | Đối tượng | Kênh phù hợp | Dựa trên |
|----|------------------|-----------|--------------|----------|
| 31-A1 | "Quán 60–80 khách: cần mấy AP, router nào, ngân sách bao nhiêu" (bảng 3 mức: tiết kiệm / chuẩn / dư) | P-chu-quan | Website, Facebook, YouTube | 31-I1 |
| 31-A2 | "Kéo dây LAN trước khi sơn tường": sơ đồ đi dây về switch trung tâm, vì sao dây hơn mesh | P-chu-nha-pho, P-chu-quan | Facebook, TikTok | 31-I2 |
| 31-A3 | "Chúng tôi cấu hình giúp bạn": quy trình khảo sát – cấu hình – bàn giao trong 1 ngày (chỉ dùng khi HNP xác nhận quy trình) | P-chu-quan, P-sme-van-phong | Facebook, Zalo | 31-I3 |
| 31-A4 | "Hướng dẫn cấu hình 5 phút" cho thợ: E50UG / EG105G-V3, kèm bảng lỗi thường gặp | P-ky-thuat-vien | YouTube, TikTok | 31-I4 |
| 31-A5 | "Ruijie hay MikroTik: ai sẽ quản lý mạng của bạn?" chọn theo người vận hành, không theo hãng | P-sme-van-phong, P-chu-quan | Website, Facebook | 31-I5 |
| 31-A6 | "Quản lý wifi từ xa có lộ dữ liệu không?" (cần xác minh với hãng trước) | P-sme-van-phong, P-chu-nha-pho | Website, YouTube | 31-I6 |
| 31-A7 | Giá tham khảo công khai theo model + nút Zalo, ghi ngày cập nhật (nay gồm camera, đầu ghi, UPS khi có giá) | Mọi persona | Website, Facebook | 31-I7 |
| 31-A8 | "Thiết bị cũ không hóa đơn vs chính hãng": chi phí thật sau 1–2 năm, bảo hành (không chê trực tiếp bên bán cũ) | P-chu-quan, P-sme-van-phong | Facebook, Website | 31-I8 |
| 31-A9 | Chương trình đại lý/thợ: kênh hỗ trợ kỹ thuật riêng, chính sách chiết khấu (cần chủ thương hiệu chốt) | P-ky-thuat-vien | Zalo, Facebook | 31-I4 |
| 31-A10 | Thu case/review từ khách đã lắp, xin phép đăng, làm bằng chứng cho persona | P-chu-quan, P-sme-van-phong | Facebook, Website | 31-I9 |
| 31-A11 | "Camera wifi lỡ mua rồi, thêm đầu ghi được không?": bảng ghép camera - đầu ghi theo hãng và số mắt (xem 30-A13/A14) | P-chu-nha-pho, P-chu-quan, P-ky-thuat-vien | Website, YouTube | 31-I10 |
| 31-A12 | "Cúp điện vẫn mất mạng? Sơ đồ UPS cho modem/ONT + router + switch PoE + camera" (xem 30-A19; số giờ chỉ nêu khi có thông số hãng/test) | P-chu-nha-pho, P-chu-quan | Website, Facebook | 31-I11 |
| 31-A13 | "UPS 12V mini và UPS chính hãng khác nhau thế nào": giải thích VA/W, loại sóng, thời gian lưu, không công kích thương hiệu (xem 30-A18) | P-chu-nha-pho, P-chu-quan | Facebook, TikTok | 31-I11 |
| 31-A14 | Trang UPS có giá, bảng "tải của bạn là bao nhiêu W → chọn bao nhiêu VA" lấy từ thông số Santak/Cyber Power (cần hãng/chủ thương hiệu xác nhận) | P-chu-quan, P-sme-van-phong | Website | 31-I12, 31-I7 |
| 31-A15 | "Cân bằng tải 2 WAN mà vẫn xem camera từ xa" và "nối 2 chi nhánh khác hãng" (xem 30-A20/A21; chỉ làm khi HNP xác nhận năng lực) | P-sme-van-phong, P-ky-thuat-vien | YouTube, Facebook | 31-I13 |
| 31-A16 | "Cắm cổng nào cho E50UG khi gói 1Gb?" — chỉ sau khi HNP tự test; gửi cho thợ/đại lý (xem 30-A22) | P-ky-thuat-vien | YouTube, Facebook | 31-I14 |

### Proof points
| ID | Điều có thể nói công khai (số liệu, chính sách, chứng nhận) | Nguồn |
|----|------------------------------------------------------------|-------|
| 31-P1 | Không có (file này tổng hợp ý kiến khách, không có proof point mới của HNP; dùng 10-P1 đến 10-P5 từ file 10) | [2] |

### Ngôn ngữ & từ khoá
- `quán cafe`, `shop café`, `quán CF` — cách chủ quán gọi nơi cần lắp wifi [20]
- `devices`, `thiết bị online cùng lúc`, `bao nhiêu user` — cách đo tải [20][7]
- `cân bằng tải`, `2 wan`, `gộp băng thông` [10][6]
- `mesh có dây`, `kéo dây LAN`, `kích sóng` — dây vs mesh vs repeater [20][18]
- `lowtech`, `tự set up`, `dễ không shop` — nỗi sợ cấu hình [9]
- `mua sọp`, `đồ cũ`, `second-hand` — lựa chọn thay thế rẻ [21][20]
- `xin giá`, `còn hàng không`, `ib` — mở đầu mua [8][5][27]
- `đời hơi sâu` — nói thiết bị cũ cần nâng cấp [22]
- `mất uy tín` — thợ nói về hàng kém [14]
- `chịu tải 100 user` — cụm bị nghi ngờ, chỉ nhắc kèm điều kiện [7]
- `cam wifi`, `cam 2 mắt`, `3 mắt`, `đầu ghi`, `đầu thu` — cách gọi camera/đầu ghi (cập nhật) [26][27][28]
- `cục ups`, `bộ lưu điện`, `ups 12v`, `cúp điện`, `kêu tít tít` — cách gọi UPS và tình huống (cập nhật) [30][31][32]
- `xem camera từ xa`, `NAT port`, `ip tĩnh` — cách người cấu hình gọi nhu cầu xem camera ngoài mạng (cập nhật) [35]

### Cần tránh
- Coi persona là đã xác nhận bằng khách HNP: dữ liệu inbox/Zalo chưa có, các câu trích là của khách trên Voz/YouTube, không phải khách HNP.
- Số quy mô phân khúc và giá trị đơn: chưa có số liệu, phần trong bảng là ước tính từ giá niêm yết; UPS chưa có giá (Chưa xác minh [2]).
- "Chịu tải 100 user" làm cam kết, hay trích mức "25–30 thiết bị/AP" như tiêu chuẩn kỹ thuật chung (chỉ là ý kiến người dùng Voz).
- Công kích hãng (cloud Trung Quốc, lỗi Reyee/UniFi, Hikvision "nhiều lỗi") hay bên bán đồ cũ: ý kiến cá nhân, rủi ro pháp lý.
- Khẳng định E50UG bị nghẽn ether1 ~200Mbps: chỉ từ 2 video nước ngoài [40][41], chưa xác minh.
- Hứa "UPS chạy X giờ" khi chưa có thông số hãng/test thật; dùng video UPS 12V "108K" để công kích sản phẩm hay người làm video [30].
- Tuyên bố "Việt Nam đã mở 6GHz" công khai khi chưa đối chiếu văn bản gốc (chỉ nguồn thứ cấp [42]); không nói mọi thiết bị Wifi 7 dùng được 6GHz.
- Trích Voz/YouTube nguyên văn công khai mà chưa kiểm lại thread gốc; không gắn tên/tài khoản người viết.
- Persona P-chu-du-an dùng làm đối tượng content cho đến khi có dữ liệu.
- Dựng persona UPS riêng hoặc nói "khách UPS là…" khi mới có ~63 comment ngoài video DIY và không có dữ liệu khách HNP.
- Số liệu % ở bảng nỗi đau/insight là chỉ báo mã hoá từ khoá ở file 30, không dùng làm số công khai.
- Giá niêm yết của HNP dùng làm giá đơn khi chưa cập nhật ngày; "Miễn phí lắp đặt", "hỗ trợ 24/7" (xem file 10).

## Khoảng trống dữ liệu
- Inbox Facebook/Zalo/điện thoại của khách thật — `raw/khach/` chưa có — người dùng dán 20–30 câu hỏi/phàn nàn thật (bỏ tên, SĐT) vào `research/hoang-nam-phat/raw/khach/2026-11-xx-inbox.md`, rồi chạy lại; đặc biệt câu hỏi về UPS/đầu ghi để xác nhận 31-I10, 31-I11.
- Tỷ trọng B2B/B2C, khu vực, ngành nghề, khách quay lại, giá trị đơn trung bình — dữ liệu nội bộ [1] — xuất danh sách đơn 6–12 tháng.
- Review Google Maps/Shopee/Lazada (đối thủ và HNP) — công cụ không đọc được, thử lại 2026-11-14 không ra review khách thật — xem tay Maps của NetworkPro, Hoàng Long, CNTTShop, Siêu Thị Viễn Thông; Shopee cho UPS Santak/Cyber Power.
- Tinhte, Webtretho, nhóm Facebook công khai — Tinhte chỉ ra bài tặng quà/quảng cáo UPS; còn nhiều thread Voz chưa đọc (ví dụ "Router WiFi cho quán cafe tầm 100 thiết bị", UPS cho modem) — đọc tay.
- Persona UPS riêng — mẫu nhỏ, không có dữ liệu khách mua — thu inbox + đơn UPS sau khi website có giá/SKU.
- Persona P-chu-du-an — không có tín hiệu nhu cầu — hỏi nhân sự về 2–3 dự án gần nhất.
- Chính sách chiết khấu đại lý — chưa có trong hồ sơ — hỏi chủ thương hiệu.
- Mùa vụ thật của HNP (kể cả UPS theo mùa mưa bão/điện lưới) — không có số đơn theo tháng — xuất dữ liệu bán hàng.
- Năng lực dịch vụ B2B (VPN chi nhánh, cân bằng tải + camera từ xa) — chưa xác nhận với chủ thương hiệu.

## Nguồn
1. Hồ sơ nội bộ `brand/hoang-nam-phat/brand.md`, mục 6 "Khách hàng hiện tại" — đọc 2026-11-08
2. `research/hoang-nam-phat/10-brand.md` — đọc 2026-11-14 (cập nhật 2026-11-14)
3. `research/hoang-nam-phat/21-competitors.md` — đọc 2026-11-14
4. `research/hoang-nam-phat/20-market.md` (các insight 20-I2, 20-I4, 20-I5) — đọc 2026-11-14
5. `research/hoang-nam-phat/30-youtube-comments.md` — đọc 2026-11-14
6. [Router cân bằng tải Ruijie RG-EG105G V3 - 2 WAN - 100 user — Góc Công Nghệ.com](https://www.youtube.com/watch?v=k5c4eJKeL-E) — YouTube, qua file 30
7. [Router cân bằng tải Ruijie RG-EG105G V2 — CAMERA PHAN RANG BEST BUY](https://www.youtube.com/watch?v=23QsDPcqtr8) — YouTube, qua file 30
8. [Review Router Mikrotik RB760iGS cho DN vừa và nhỏ — CNTT SHOP](https://www.youtube.com/watch?v=I5Zaa4gd6P4) — YouTube, qua file 30
9. [Review Router Mikrotik hEX refresh E50UG — CNTT SHOP](https://www.youtube.com/watch?v=bewRjEyESIw) — YouTube, qua file 30
10. [Cấu hình cân bằng tải PCC 2 đường WAN trên MikroTik — Công Nghệ Việt Tuấn](https://www.youtube.com/watch?v=daKwHWxxFRA) — YouTube, qua file 30
11. [Hướng dẫn cài đặt lại camera Ezviz khi đổi nhà mạng — Thiết bị công nghệ Văn Tư](https://www.youtube.com/watch?v=9ejRr_jK-_U) — YouTube, qua file 30
12. [Cài Đặt Home Router EW300, EW1200G, EW1800 Ruijie|Reyee — Kim Channel](https://www.youtube.com/watch?v=WuhvPLvUUJw) — YouTube, qua file 30
13. [Tôi vừa test Unifi U7 Pro Max tại nhà — Công Nghệ Việt Tuấn](https://www.youtube.com/watch?v=Ms4RDQgHArY) — YouTube, qua file 30 (không trích trực tiếp)
14. [So sánh camera 2 mắt ngoài trời Yoosee và Imou — Anh Kỹ Thuật Review](https://www.youtube.com/watch?v=T_LtbuMowHc) — YouTube, qua file 30
15. [Những lưu ý trước khi mua camera quan sát — Demo 055](https://www.youtube.com/watch?v=Tx6GYm8TB_Y) — YouTube, qua file 30
16. [Đây là lý do Wi-Fi nhà bạn CỰC CHẬM dù đóng tiền GÓI CAO — Vật Vờ Studio](https://www.youtube.com/watch?v=DpdJCy5ed_c) — YouTube, qua file 30
17. [Wifi 7 - Mớ HỖN ĐỘN mà người dùng dễ bị DẮT MŨI — Real Tech](https://www.youtube.com/watch?v=SkeNSfC7KAY) — YouTube, qua file 30
18. [Cải tạo mạng LAN, WiFi và lắp cân bằng tải #ruijie Long Biên — Góc Công Nghệ.com](https://www.youtube.com/watch?v=RD57oJQ8rjo) — YouTube, qua file 30
19. [Nên mua camera 2 mắt Ezviz H9C Dual hay Imou S7XP Dual — Anh Kỹ Thuật Review](https://www.youtube.com/watch?v=1zBU6bNf-BA) — YouTube, qua file 30
20. [Setup WiFi quán cafe ~80 thiết bị, nên dùng AP hay router mạnh? — Voz](https://voz.vn/t/setup-wifi-quan-cafe-80-thiet-bi-nen-dung-ap-hay-router-manh.1229246/) — truy cập 2026-11-08
21. [Cân nhắc giữa Mikrotik RB 750Gr3 vs Reyee RG-EG105G V2 — Voz](https://voz.vn/t/can-nhac-giua-mikrotik-rb-750gr3-vs-reyee-rg-eg105g-v2.1047065/) — truy cập 2026-11-08
22. [Công ty gia đình khoảng 30 nhân viên dùng con Mikrotik RB750Gr3 ổn không các bác? — Voz](https://voz.vn/t/cong-ty-gia-dinh-khoang-30-nhan-vien-dung-con-mikrotik-rb750gr3-on-khong-cac-bac.1100719/) — truy cập 2026-11-08
23. [Router WiFi cho quán cafe tầm 100 thiết bị online cùng lúc? — Voz](https://voz.vn/t/router-wifi-cho-quan-cafe-tam-100-thiet-bi-online-cung-luc.244518/page-5) — chỉ thấy tiêu đề trong kết quả tìm 2026-11-08, chưa đọc nội dung
24. [Thiết kế mạng PPPoE Server Quản Lý Hộ Dân — Mikrotik Viet Nam](https://www.youtube.com/watch?v=6nYRXMiKR5Q) — YouTube, qua file 30
25. [Hướng dẫn cấu hình chia VLAN trên Router Mikrotik — CNTT SHOP](https://www.youtube.com/watch?v=t3nqoAPkwss) — YouTube, qua file 30
26. [Nên lắp Camera có đầu ghi hay Camera Wifi? — 88 Media](https://www.youtube.com/watch?v=d6a_CEBC7jk) — YouTube, qua file 30 (lượt 2026-11-14)
27. [Camera nhìn đêm như ngày - AI ColorVu Hikvision 1B47G3 — Việt Hàn Security](https://www.youtube.com/watch?v=C36rTOn7eX4) — YouTube, qua file 30 (lượt 2026-11-14)
28. [Khám phá Camera Hikvision TandemVu 3 mắt — Việt Hàn Security](https://www.youtube.com/watch?v=CytKmCj5d9c) — YouTube, qua file 30 (lượt 2026-11-14)
29. [Hướng dẫn cài đặt camera Hikvision 2 mắt TandemVu DS-2SE2C400MWG-E/14 — THẮNG CAMERA](https://www.youtube.com/watch?v=39-yHQzXZb4) — YouTube, qua file 30 (lượt 2026-11-14)
30. [Mua có 108K mà Xài Quá Được Việc — VŨ SỸ TRƯỜNG (UPS 12V)](https://www.youtube.com/watch?v=lZ-oMBvoB6s) — YouTube, qua file 30 (lượt 2026-11-14)
31. [Hướng dẫn cách sử dụng bộ lưu điện ups santak tg500 — TOÀN TÂM UPS](https://www.youtube.com/watch?v=4rJ3ef4s30s) — YouTube, qua file 30 (lượt 2026-11-14)
32. [PIN DỰ PHÒNG CHO PC! ... Bộ Lưu Điện UPS APC — An Phát Computer](https://www.youtube.com/watch?v=JCvPpg6CrxI) — YouTube, qua file 30 (lượt 2026-11-14)
33. [UPS cho Wifi Camera không lo mất điện chạy xuyên đêm luôn — Mr Chế](https://www.youtube.com/watch?v=dJ5KgOjJzPA) — YouTube, qua file 30 (lượt 2026-11-14)
34. [Bộ lưu điện ups 12v cho camera, modem wifi — Thành Đào Channel](https://www.youtube.com/watch?v=JOjb7osMzks) — YouTube, qua file 30 (lượt 2026-11-14)
35. [[Người mới] Cân bằng tải (PCC) và mở cổng (NAT Port) trên Router Mikrotik — Mikrotik Viet Nam](https://www.youtube.com/watch?v=2ALjcLi7n6Q) — YouTube, qua file 30 (lượt 2026-11-14)
36. [[PPTP VPN] Cấu hình kết nối người dùng từ xa về mạng Công ty với VPN PPTP — Mikrotik Viet Nam](https://www.youtube.com/watch?v=AKyOQNerMRg) — YouTube, qua file 30 (lượt 2026-11-14)
37. [Giới thiệu và hướng dẫn cài đặt wifi Ruijie chi tiết nhất — shopcongnghe24h.vn](https://www.youtube.com/watch?v=PbNAEuCjGLk) — YouTube, qua file 30 (lượt 2026-11-14)
38. [Liệu Unifi U6-Plus có phải thiết bị lý tưởng ... — Công Nghệ Việt Tuấn](https://www.youtube.com/watch?v=PhMn8SlODqI) — YouTube, qua file 30 (lượt 2026-11-14)
39. [Giải pháp Wi-Fi 7 từ TP-Link ... cho doanh nghiệp — Tinh tế](https://www.youtube.com/watch?v=XeShU6bpxS0) — YouTube, qua file 30 (lượt 2026-11-14)
40. [Mikrotik E50UG (unboxing e comparativo com a RB750gr3) — Amigos Telecom](https://www.youtube.com/watch?v=ip1zvrvj69o) — YouTube tiếng Bồ Đào Nha, qua file 30; tín hiệu chưa xác minh
41. [Pengaturan Dasar Mikrotik hEX Refresh E50UG — PHEQTOR Network](https://www.youtube.com/watch?v=CVWL03JI7xc) — YouTube tiếng Indonesia/Anh, qua file 30; tín hiệu chưa xác minh
42. [Vietnam: Circular No. 01/2025/TT-BKHCN ... 6 GHz — TÜV SÜD](https://www.tuvsud.com/en/knowledge-hub/technical-updates/consumer-products-and-retail-essentials/vietnam-circular-no-012025tt-bkhcn-updates-regulations) — nguồn thứ cấp, qua file 30; chưa đối chiếu văn bản gốc
43. [Bộ lưu điện UPS là gì — Thế Giới Di Động](https://www.thegioididong.com/hoi-dap/bo-luu-dien-ups-la-gi-1584391) — nhà bán lẻ, chỉ xuất hiện trong kết quả tìm kiếm 2026-11-14, chưa mở trang đầy đủ
44. [Top 5 Bộ Lưu Điện Cho Modem Wifi Đáng Mua Nhất — Phúc Anh](https://www.phucanh.vn/bo-luu-dien-cho-modem-wifi.html) — nhà bán lẻ, chỉ xuất hiện trong kết quả tìm kiếm 2026-11-14, chưa mở trang đầy đủ
