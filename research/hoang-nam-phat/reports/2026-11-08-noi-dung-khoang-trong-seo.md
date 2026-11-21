---
brand: hoang-nam-phat
brand_name: Hoàng Nam Phát
report_id: R20261108-noi-dung
loai: noi-dung
cau_hoi: "Chạy gap-analysis cho Hoàng Nam Phát, tối đa 3 brief; mỗi brief có nội dung cho tất cả kênh social phù hợp (Website, Facebook, Zalo OA, TikTok, YouTube). Chưa có web-log/log/learnings, chọn chủ đề theo 41-seo-keywords và voice-of-customer."
date: 2026-11-08
confidence: Thấp
sources: 14
depends_on: ["10", "21", "22", "30", "31", "40", "41"]
brief: research/hoang-nam-phat/briefs/2026-11-08-seo-can-bang-tai-quan-cafe.md
---

# Khoảng trống nội dung SEO, lần chạy đầu (chưa có số liệu web) — Hoàng Nam Phát

> Cách đọc: lần chạy đầu, **chưa có** `web-log.md`, `log.md`, `learnings.md`, và chưa có CSV trong `research/hoang-nam-phat/raw/web/`. Không có Search Console nên **không có** vị trí, hiển thị, CTR; bảng quyết định theo vị trí (8–20, CTR thấp) không áp dụng được. Chủ đề chọn theo `41-seo-keywords.md` (kế hoạch 17 bài), câu hỏi khách ở `30`/`31`, và khoảng trống nội dung ở trang HNP. Mọi mức "nhu cầu" là **ước lượng định tính**, không có số lượt tìm kiếm. Độ tin cậy toàn báo cáo: Thấp.

## Kết luận
Ba chủ đề chọn viết ngay, khác persona và khác cụm từ khoá: (1) bài trụ cột "Router cân bằng tải 2 WAN cho quán cafe" (P-chu-quan, cụm B/C/D), (2) trang MikroTik E50UG viết lại/mở rộng (P-ky-thuat-vien, cụm A), (3) bài + trang Ruijie RG-RAP2200(E) cho văn phòng (P-sme-van-phong, cụm E/G) [1][2][3]. Cả ba nhắm câu hỏi khách đang hỏi mà hoangnamphat.vn chưa trả lời (`/news`, `/solutions` trống) [1]. Mỗi brief có nội dung cho 5 kênh theo định dạng/độ dài ở `40-channels.md` [4]; TikTok và YouTube mới là bản nháp vì HNP chưa có tài khoản [4].

## Phát hiện chính
- Chưa có số liệu web nên chọn bằng cầu (khách hỏi) + khoảng trống (HNP chưa có trang), không bằng cung (hiển thị): đây là giả định cần kiểm lại sau 4–8 tuần Search Console [1].
- Cân bằng tải là chỗ khách "mắc kẹt" nhiều nhất ở mảng MikroTik/Ruijie: hỏi vì sao chỉ 1 WAN chạy, gộp băng thông, số "100 user" có thật không [3]; chủ quán hỏi theo số thiết bị và ngân sách (60–80 thiết bị, 3–5 triệu) [2]. Trang cân bằng tải của nhà bán lớn chủ yếu là trang sản phẩm/danh mục, bài thực dụng cho chủ quán còn trống (Nhận định · TB) [1].
- Đúng kỹ thuật: cân bằng tải 2 WAN chia các phiên qua hai đường, **không** cộng tốc độ cho một kết nối đơn; đường 100 Mbps + 400 Mbps cho một tải đơn thường chỉ tới mức đường nhanh [11][12]. Đây là câu trả lời thẳng cho hiểu lầm "gộp băng thông" của khách [3].
- Hãng ghi EG105G-V3 "khuyến nghị 100 client đồng thời" (không phải cam kết) và 1000 Mbps chỉ ở Turbo Mode, 600 Mbps ở Normal [8]; RAP2200(E) ghi 110 client là **mức tối đa**, không có con số khuyến nghị [9]. Nên nói thận trọng, đúng điều kiện (30-I3) [3].
- Trang model hiện có lỗi nền: slug trùng/typo (E50UG, RAP2200(E)), RAP2200(E) gắn nhầm nhãn MikroTik, giá hiển thị "0 ₫" [1]. Viết lại nội dung trang phải đi cùng sửa kỹ thuật do người quản trị web làm.

## Dữ liệu
Hiện trạng: "Chưa có trang" = không thấy bài/landing tương ứng trên `/news`, `/solutions` [1]; "Có trang SP" = trang sản phẩm có sẵn nhưng vị trí/CTR **Chưa xác minh**. Nhu cầu: ước lượng. Ưu tiên theo bảng quyết định (1 cao nhất).

| # | Chủ đề (từ khoá chính) | Nhu cầu (căn cứ) | Hiện trạng (URL, vị trí, CTR) | Hành động | Ưu tiên | Nguồn |
|---|------------------------|------------------|-------------------------------|-----------|---------|-------|
| 1 | Router cân bằng tải 2 WAN cho quán cafe (`router cân bằng tải 2 wan`; gồm mục "100 user" và "gộp băng thông") | Cao: câu hỏi lặp #6 và #3 trong FAQ khách; Voz quán cafe 80 thiết bị; hiện diện nhà bán lớn trong SERP | Chưa có trang | **Viết mới** (CHỌN, brief 1) | 1 | [1][2][3][7] |
| 2 | Trang MikroTik E50UG (`mikrotik e50ug giá`) | TB: SERP tìm 2026-11-08 chỉ thấy nhà bán nước ngoài; khách xin giá | Có trang SP, 2 slug trùng/typo; vị trí/CTR Chưa xác minh | **Viết lại / mở rộng** (CHỌN, brief 2) | 2 | [1][7] |
| 3 | Trang Ruijie RG-RAP2200(E) + AP cho văn phòng (`rap2200e giá`, `access point ruijie cho văn phòng`) | TB: câu hỏi "bao nhiêu thiết bị/AP" xếp #1 nỗi đau; RAP2200(E) là SP chủ lực | Có trang SP, 2 kiểu slug, gắn nhầm nhãn MikroTik; vị trí/CTR Chưa xác minh | **Viết lại / mở rộng** (CHỌN, brief 3) | 2 | [1][2][3] |
| 4 | Trang Ruijie RG-EG105G-V3 (`rg-eg105g-v3 giá`) | TB | Có trang SP; vị trí/CTR Chưa xác minh | Viết lại / mở rộng; **nội dung đã gói vào brief 1** (không brief riêng) | 2 | [1][7] |
| 5 | "Chịu tải 100 user" thực tế (`eg105g-v3 chịu tải bao nhiêu user`) | TB-Cao: 30-I3 | Chưa có trang | Viết mới; **gộp thành mục trong brief 1** + Short/TikTok | 1 (đã gộp) | [3][8] |
| 6 | Cân bằng tải có gộp băng thông không, vì sao chỉ 1 WAN chạy | Cao: 30-I2 | Chưa có trang | Viết mới; **gộp thành mục trong brief 1** + TikTok | 1 (đã gộp) | [3][11][12] |
| 7 | Wifi quán cafe 100 khách: mấy AP, router nào, 3 mức ngân sách (`wifi cho quán cafe 100 khách`) | Cao (ước lượng): 31-I1 | Chưa có trang | Viết mới | 1 | [1][2] |
| 8 | Landing "Lắp wifi quán cafe TP.HCM" | Cao (ước lượng): SERP chưa thấy nhà thi công địa phương | Chưa có trang | Viết mới (cần case thật và giá dịch vụ, hiện chưa có) | 1, bị chặn do thiếu case | [1] |
| 9 | Ruijie EG105G-V3 hay MikroTik E50UG: chọn theo người vận hành (`mikrotik hay ruijie`) | TB: 31-I5 | Chưa có trang | Danh sách chờ (so sánh nên viết sau khi có trang E50UG và EG105G-V3 chuẩn) | 5 | [1][2] |
| 10 | Chọn router theo số người dùng và gói cước | TB | Chưa có trang | Danh sách chờ | 5 | [1][3] |
| 11 | Sơ đồ đấu nối modem Viettel/VNPT/FPT chuyển bridge + router | TB-Cao: FAQ #4 | Chưa có trang | Danh sách chờ (ứng viên brief kế tiếp, persona P-chu-nha-pho) | 5 | [3] |
| 12 | Wifi 6 hay Wifi 7 nên mua | TB (từ khoá khó: Cao) | Chưa có trang | Danh sách chờ (chỉ nói RAP72Pro/RAP73HD khi có thông số hãng) | 5 | [3][6] |
| 13 | Thiết kế mạng văn phòng 30 người | TB | Chưa có trang | Danh sách chờ; phần cốt lõi đã nằm trong brief 3 | 5 | [1][2] |
| 14 | UniFi hay Ruijie cho quán cafe và văn phòng nhỏ | TB | Chưa có trang | Danh sách chờ | 5 | [1] |
| 15 | Quản lý wifi quán từ xa (Ruijie Cloud/UniFi), dữ liệu nằm ở đâu | TB: 31-I6 | Chưa có trang | Danh sách chờ (cần xác minh với hãng) | 5 | [2][3] |
| 16 | Mua thiết bị mạng chính hãng ở TP.HCM: CO/CQ, bảo hành, hóa đơn | TB | Chưa có trang | Danh sách chờ | 5 | [1][5] |
| 17 | Wifi quán cafe bị lag giờ đông: 6 nguyên nhân | TB | Chưa có trang | Danh sách chờ (gộp một phần vào brief 1) | 5 | [1][3] |
| 18 | Camera: thẻ nhớ ghi được bao lâu; cài lại Ezviz khi đổi nhà mạng | TB | Chưa có trang | Danh sách chờ (cụm I, P3) | 5 | [1][3] |
| 19 | `router mikrotik chính hãng tphcm`, `thiết bị mạng chính hãng` | Cao nhưng khó | Chưa có trang đích (danh mục) | Giữ cho GBP + trang model, không viết bài riêng | 5 | [1] |
| 20 | `mikrotik hap be lite`, hàng mới của hãng | Thấp | Chưa xác nhận có hàng tại VN | **Bỏ** | - | [6] |

Thử mở rộng bằng gợi ý tìm kiếm: công cụ WebSearch **không trả autocomplete và "Mọi người cũng hỏi" của Google VN**, nên không có dữ liệu này (xem Khoảng trống). Hai truy vấn đã chạy 2026-11-08: "cân bằng tải 2 wan có gộp băng thông không" cho kết quả hãng giải thích nguyên lý (ASUS, TP-Link/Omada) và diễn đàn MikroTik, không có bài tiếng Việt chuyên cho chủ quán trong top đã xem [11][12]; "wifi quán cafe bao nhiêu access point cho 100 khách router cân bằng tải" không có nguồn Việt nói trực tiếp số AP [14].

## Đối chiếu file nền
| File · mục | Trước | Nay | Nguồn |
|-----------|-------|-----|-------|
| 41 · Kế hoạch content SEO #2–#4 | 3 hàng riêng (trụ cột, "100 user", "gộp băng thông") | Gom 3 hàng vào 1 brief trụ cột để tránh 3 bài trùng ý | [1] |
| 30 · 30-I3 ("100 user") | Khách nghi số 100 user | Hãng ghi là "khuyến nghị 100 client đồng thời", 1000 Mbps cần Turbo Mode | [3][8] |
| 22/10 · RAP2200(E) | Giá, "SP chủ lực" | Hãng ghi Wi-Fi 5 (802.11ac Wave 2), ~1266 Mbps, 110 client tối đa | [9] |

## Đề xuất hành động
1. **Viết bài trụ cột "Router cân bằng tải 2 WAN cho quán cafe"** + bộ 5 kênh: brief `research/hoang-nam-phat/briefs/2026-11-08-seo-can-bang-tai-quan-cafe.md`.
2. **Viết lại trang MikroTik E50UG** + bộ 5 kênh: brief `research/hoang-nam-phat/briefs/2026-11-08-seo-trang-mikrotik-e50ug.md`. `[GIẢ ĐỊNH]` trang đang yếu do chưa có số liệu; việc sửa slug/301/canonical là của người quản trị web.
3. **Viết lại trang Ruijie RG-RAP2200(E) + bài AP cho văn phòng** + bộ 5 kênh: brief `research/hoang-nam-phat/briefs/2026-11-08-seo-ap-ruijie-rap2200e.md`.

Điều kiện chung: giá chưa được xác minh nên mọi nội dung ghi "giá tham khảo, liên hệ 0937.813.788" cho đến khi HNP xác nhận bảng giá + ngày; sửa lỗi web (slug, nhãn hãng, "0 ₫") nên làm song song.

## Dành cho Content
### Insight
| ID | Insight | Bằng chứng | Độ tin cậy |
|----|---------|-----------|-----------|
| R20261108-noi-dung-I1 | Lần chọn đầu chưa có số liệu web; chủ đề dựa trên câu hỏi khách và khoảng trống trang của HNP, cần đo lại bằng Search Console sau 4–8 tuần | [1][2][3] | Thấp |
| R20261108-noi-dung-I2 | Chủ quán hỏi theo số thiết bị và ngân sách, không hỏi "hãng nào tốt"; cân bằng tải là nơi khách mắc kẹt (1 WAN, gộp băng thông, "100 user") | [2][3] | TB |
| R20261108-noi-dung-I3 | Cân bằng tải 2 WAN chia phiên giữa hai đường, không cộng tốc độ cho một kết nối đơn; speedtest một luồng thường không thấy tổng hai đường | [11][12] | TB |
| R20261108-noi-dung-I4 | Hãng dùng chữ "khuyến nghị" (EG105G-V3: 100 client) hoặc "tối đa" (RAP2200(E): 110); nói đúng chữ của hãng và điều kiện, không biến thành cam kết | [8][9] | Cao |
| R20261108-noi-dung-I5 | Trang model của HNP có lỗi nền (slug, nhãn hãng, giá "0 ₫") làm yếu SEO sản phẩm; viết lại nội dung chưa đủ nếu không sửa kỹ thuật | [1] | Cao |

### Proof points
| ID | Điều có thể nói công khai | Nguồn |
|----|--------------------------|-------|
| R20261108-noi-dung-P1 | Ruijie RG-EG105G-V3 (theo trang hãng): 5 cổng 10/100/1000, 1 WAN cố định + 3 LAN cố định; khuyến nghị 100 client đồng thời; 1000 Mbps (Turbo Mode) và 600 Mbps (Normal Mode); cân bằng tải nhiều đường WAN; quản lý đám mây miễn phí | [8] |
| R20261108-noi-dung-P2 | MikroTik hEX refresh (E50UG, theo hãng): 5 cổng Gigabit Ethernet, PoE-in ở ether1, CPU 2 nhân 950 MHz, RAM 512 MB, RouterOS v7 (license level 4), 1 cổng USB 2.0, tiêu thụ tối đa 10 W | [10] |
| R20261108-noi-dung-P3 | Ruijie RG-RAP2200(E) (theo trang hãng): Wi-Fi 5 (802.11ac Wave 2) hai băng tần, tối đa ~1266 Mbps (866 Mbps 5 GHz + 400 Mbps 2,4 GHz); 2 cổng GE; nguồn adapter 12 V/1,5 A hoặc PoE/PoE+; tiêu thụ tối đa 12,95 W; gắn trần/tường; quản lý qua Ruijie Cloud; tối đa 64 client (2,4 GHz) / 110 client (5 GHz hoặc cả hai băng) | [9] |
| R20261108-noi-dung-P4 | Nguyên lý: cân bằng tải 2 WAN phân phối lưu lượng qua hai kết nối nhưng không kết hợp băng thông của chúng; ví dụ đường 100 Mbps + 400 Mbps, tốc độ tối đa cho một tải đơn gần mức đường nhanh | [11][12] |
| R20261108-noi-dung-P5 | Chính sách HNP dùng được: chính hãng có CO/CQ, bảo hành theo hãng, giao toàn quốc/miễn phí nội thành TP.HCM, hóa đơn điện tử, tư vấn và cài đặt tận nơi, hỗ trợ 08:00-18:00 (trỏ 10-P1 đến 10-P5) | [5] |

### Cần tránh
- Báo giá bằng con số: chưa có giá được xác minh (21 ghi giá E50UG "chưa kiểm chứng lại"; web lỗi "0 ₫") [7][1]. Ghi "giá tham khảo, liên hệ".
- "Chịu tải 100 user" hay "110 user" như cam kết: hãng chỉ ghi khuyến nghị/tối đa [8][9][3].
- "Cân bằng tải = cộng gộp băng thông" hoặc hứa tốc độ gấp đôi [11][12].
- Giá USD của hãng (59,95 USD E50UG) làm giá bán VN [10].
- Nêu tên hay so sánh đối thủ trong bài; số "30-50%" của trang bên thứ ba chưa kiểm chứng [1].
- Ảnh/case "khách thật" khi HNP chưa có ảnh và phép đăng; TikTok/YouTube như kênh HNP đang có [4].
- "Hỗ trợ 24/7", "miễn phí lắp đặt", "cấu hình trong 1 ngày/5 phút" chưa được HNP xác nhận [5][4].
- Khẳng định "top 1"/"lên trang 1": chưa có Search Console [1].

## Cần cập nhật file nền
- `30-youtube-comments.md · 30-I3` hoặc `41 · Dành cho Content`: bổ sung "hãng ghi 'khuyến nghị 100 client đồng thời', 1000 Mbps chỉ ở Turbo Mode" ([8], 2026-11-08).
- `22-vendor-products.md`/`10-brand.md · Sản phẩm chủ lực`: bổ sung RAP2200(E) là Wi-Fi 5 (802.11ac Wave 2), ~1266 Mbps, không có ngân sách PoE để cấp nguồn thiết bị khác ([9], 2026-11-08).
- `41-seo-keywords.md · Kế hoạch content`: ghi chú #2, #3, #4 đã gộp thành một brief trụ cột.

## Khoảng trống dữ liệu
- Vị trí, hiển thị, CTR của mọi trang: chưa có Search Console. Xác minh property, xuất CSV vào `research/hoang-nam-phat/raw/web/` rồi chạy `content-measure`; sau đó chạy lại gap-analysis (cần ít nhất 2 lần xuất cách nhau 7 ngày để xem xu hướng).
- Số lượt tìm kiếm: không có công cụ; làm Keyword Planner cho 20 từ khoá P1.
- Autocomplete, "Mọi người cũng hỏi", "Tìm kiếm liên quan" của Google VN: công cụ tìm kiếm không trả; gõ tay 5 từ khoá của 3 chủ đề chọn (ẩn danh, định vị TP.HCM) rồi bổ sung H2/FAQ.
- Giá HNP đã xác minh: không có; cần bảng giá + ngày của E50UG, EG105G-V3, RAP2200(E) từ chủ thương hiệu.
- Trang hãng Reyee VN của EG105G-V3 hiển thị "currently unavailable in your region" (WebFetch 2026-11-08): chưa rõ nghĩa; hỏi nhà cung cấp về nguồn hàng trước khi nhấn mạnh EG105G-V3.
- Cấu hình WAN/LAN của EG105G-V3: trang hãng ghi 5 cổng, 1 WAN + 3 LAN cố định, không nói rõ cổng thứ 5; phải xác nhận trên thiết bị thật trước khi vẽ sơ đồ 2 WAN.
- Trang MikroTik chính hãng `mikrotik.com/product/e50ug` trả 404; dùng trang `hex_2024` và manual qua kết quả tìm kiếm, chưa mở trang đầy đủ [10].
- Nội dung ASUS/TP-Link/Omada ở [11][12] mới đọc qua tóm tắt kết quả tìm, chưa mở trang đầy đủ; chỉ dùng như nguyên lý chung, không trích tên hãng trong bài.
- Số AP cho X thiết bị: không có chuẩn chính thức; chỉ có ý kiến người dùng Voz (25-30 thiết bị/AP) [13] và nguồn nước ngoài [14]. Bài phải nói đây là ước lượng, cần khảo sát tại chỗ.
- Ảnh thật, case, phép đăng của khách: HNP chưa cung cấp; quay/chụp thiết bị tại HNP.

## Nguồn
1. `research/hoang-nam-phat/41-seo-keywords.md` (keyword map, audit, kế hoạch content) - đọc 2026-11-08
2. `research/hoang-nam-phat/31-customers.md` (persona, nỗi đau, Voz) - đọc 2026-11-08
3. `research/hoang-nam-phat/30-youtube-comments.md` (FAQ, insight 30-I1 đến 30-I8) - đọc 2026-11-08
4. `research/hoang-nam-phat/40-channels.md` (tên kênh chuẩn, bảng định dạng theo kênh) - đọc 2026-11-08
5. `research/hoang-nam-phat/10-brand.md` (thương hiệu, chính sách, tone) - đọc 2026-11-08
6. `research/hoang-nam-phat/22-vendor-products.md` (danh mục, SP mới) - đọc 2026-11-08
7. `research/hoang-nam-phat/21-competitors.md` (SERP sơ bộ, giá) - đọc 2026-11-08
8. [Reyee - RG-EG105G-V3 (vi-vn)](https://reyee.ruijie.com/vi-vn/products/reyee-router/eg-series/eg105gv3/) - truy cập 2026-11-08 (trang ghi "currently unavailable in your region")
9. [Reyee - RG-RAP2200(E) (vi-vn)](https://reyee.ruijie.com/vi-vn/products/reyee-wireless/reyee-indoor-ap/rg-rap2200e) - truy cập 2026-11-08
10. [MikroTik - hEX refresh](https://mikrotik.com/product/hex_2024) và [manual](https://help.mikrotik.com/docs/spaces/UM/pages/279052324/hEX+refresh) - kết quả tìm 2026-11-08 (chưa mở trang đầy đủ; giá đề xuất USD không dùng)
11. [ASUS - Hiểu về Dual WAN Load Balancing](https://www.asus.com/vn/support/FAQ/1050116) - kết quả tìm 2026-11-08 (chưa mở trang đầy đủ)
12. [TP-Link Omada - Tại sao không đạt được tổng hợp băng thông của nhiều cổng WAN bằng Speedtest](https://support.omadanetworks.com/vn/document/13066/) - kết quả tìm 2026-11-08 (chưa mở trang đầy đủ)
13. [Voz - Setup WiFi quán cafe ~80 thiết bị, nên dùng AP hay router mạnh?](https://voz.vn/t/setup-wifi-quan-cafe-80-thiet-bi-nen-dung-ap-hay-router-manh.1229246/) - qua 31 [20], truy cập 2026-11-08
14. Tìm kiếm "wifi quán cafe bao nhiêu access point cho 100 khách router cân bằng tải" - 2026-11-08 (không có nguồn Việt trực tiếp; nguồn nước ngoài chỉ tham khảo)
