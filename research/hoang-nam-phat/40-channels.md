---
brand: hoang-nam-phat
brand_name: Hoàng Nam Phát
file_id: "40"
group: 4-kenh
agent: channel-audit
title: Channel Audit & Recommendation
date: 2026-11-08
updated: 2026-11-14
status: draft
confidence: Thấp
sources: 24
depends_on: ["10","20","21","30","31"]
gaps: ["số liệu kênh đối thủ (follower, tần suất, tương tác) chưa kiểm chứng; YouTube/Facebook đối thủ không đọc được nội dung", "Facebook Ads Library / TikTok Creative Center / Google Ads Transparency chưa truy cập được", "CPC/CPM riêng cho VN và ngành thiết bị mạng", "phí cố định Shopee và hoa hồng TikTok Shop ngành thiết bị mạng 2026", "số liệu fanpage/Google Maps/Zalo hiện tại ngoài hồ sơ nội bộ", "ngân sách marketing và người phụ trách", "traffic website, nguồn đơn hàng", "gian hàng Shopee/Lazada/TikTok Shop của đối thủ", "ngày đăng bài blog E50UG"]
---

# Channel Audit & Recommendation — Hoàng Nam Phát

> Cách đọc: hiện trạng HNP lấy từ hồ sơ nội bộ mục 4 [1], `10-brand.md` [2] và kiểm lại trực tiếp website 2026-11-14 [16][17]; fanpage, Maps, Zalo không đọc lại được. Số kênh đối thủ là khảo sát nội bộ 2026-10-31 [1], chưa kiểm chứng [4]; lần chạy này chỉ xác nhận thêm có/không có link kênh trên website 3 đối thủ [18][19][20]. Facebook Ads Library, TikTok Creative Center, Google Ads Transparency không truy cập được. Chi phí quảng cáo không có số riêng cho VN; ghi nguồn + năm hoặc ước lượng.
>
> **Thay đổi so với 2026-11-08:**
> - Website HNP kiểm lại: có nút nổi "Chat Zalo" và "Gọi điện", link Zalo thật; footer TikTok/YouTube/Instagram vẫn `#`, và **không có link Facebook** (mới phát hiện); Tin tức có 1 bài (review E50UG) kèm CTA Zalo 3 vị trí, không hiện ngày, không nút chia sẻ, không mục lục; mục UPS có menu Santak/Cyber Power nhưng chưa có sản phẩm; đầu ghi Hikvision, firewall Cisco, tổng đài Grandstream còn "Liên hệ báo giá"; một số sản phẩm MikroTik/Switch hiện "0 ₫" [16][17].
> - Đối thủ mới (21): Việt Hàn Security có Facebook, YouTube, Zalo chat, mục Tin tức/Khuyến mãi, không thấy TikTok hay link sàn [18]; Meta.vn có Zalo, Facebook, YouTube, TikTok chính thức, không thấy blog hay link sàn [19]. CNTTShop: footer có Facebook, YouTube, Twitter, Pinterest, Vimeo, không có link TikTok/Zalo/sàn; blog có bài nhưng không hiện ngày [20].
> - Bối cảnh: TikTok Shop Q3/2026 tăng khoảng 76%, gần ngang Shopee; Shop Mall chiếm 36,8% doanh số hai sàn [3]. Phí sàn tăng, một bài ghi chạm ngưỡng 25% doanh thu [21].
> - Khách (30): kênh chính hãng VN (UniFi Việt Nam, Ruijie Reyee Vietnam) dưới 1.000 view và khoảng 1 comment/video; video Hikvision của Việt Hàn Security nhận nhiều comment xin giá, không thấy phản hồi [5].
> - Chưa đăng bài nào (chưa có `log.md`/`learnings.md`): ma trận ưu tiên vẫn là Nhận định, chưa có số đo.
> - Không đổi: ma trận ưu tiên, định dạng nội dung (chỉ điều chỉnh lý do/ghi chú), ID 40-I1 đến 40-I7, 40-A1 đến 40-A5, 40-P1.

## Tên kênh chuẩn (dùng chung mọi file)
| Tên chuẩn | Gồm | Ghi chú cho content agent |
|-----------|-----|---------------------------|
| `Facebook` | Fanpage `thietbimanghoangnamphat`, Reels, Messenger; FB cá nhân nhân sự (kênh phụ, tương tác cao hơn fanpage [1]) | Một tên kênh; nêu "fanpage" hay "cá nhân nhân sự" trong brief nếu cần. Website chưa có link Facebook ở footer (2026-11-14) [16] |
| `Zalo OA` | Zalo Official Account (chưa có) + Zalo cá nhân 0937813788 hiện đang chốt đơn [1]; website đã có link `zalo.me/0937813788` và nút "Chat Zalo" [16] | Yêu cầu của người điều phối ghi "Zalo"; theo định nghĩa agent chốt `Zalo OA`. Nội dung broadcast/tin tư vấn đều ghi kênh `Zalo OA` |
| `TikTok` | Chưa có tài khoản [1]; footer web là link `#` [16]. **TikTok Shop (bán hàng) thuộc `TikTok`**, ghi rõ "TikTok Shop" trong brief nếu nói về gian hàng | Chưa đăng được cho đến khi tạo tài khoản |
| `YouTube` | Chưa có kênh; icon footer web là link `#` [1][2][16] | Idem |
| `Website` | hoangnamphat.vn (shop, blog `/news`, giải pháp, chính sách) | Làn SEO chỉ đăng ở đây |
| `Google Maps` | Google Business Profile (chưa xác nhận chủ sở hữu) [1] | Bài đăng cập nhật, ảnh, trả lời đánh giá |
| `Google Ads` | Chưa chạy [1] | |
| `SEO` | Kênh tự nhiên (chi tiết từ khoá ở `41-seo-keywords.md`) | |
| `Shopee` | Chưa có gian hàng [1] | |
| `Lazada` | Chưa có gian hàng [1] | |
Không dùng: "Instagram" (chỉ nhắc khi nói icon `#` trên web), "Tiki", "Zalo" trơn, "Fanpage", "Blog" (blog thuộc `Website`).

## Tóm tắt
- Hiện trạng: ngoài `Website` có shop, chính sách, nút Zalo/gọi và 1 bài blog, mọi kênh khác yếu hoặc chưa có: fanpage 410 follower, ngưng đăng 01/2023–11/2025; chưa có `TikTok`, `YouTube`, `Zalo OA`, `Shopee`, `Lazada`; `Google Maps` chưa xác nhận chủ sở hữu; footer web chưa có link Facebook, 3 icon còn `#` [1][2][16].
- Kênh tương tác thật là FB cá nhân nhân sự (30–50+ cảm xúc/bài) và Zalo cá nhân, không phải fanpage: tài sản đã có nhưng không đo, không chuyển được [1][2].
- Đối thủ mỗi bên một thế mạnh: CNTTShop về content/video (YouTube/TikTok theo [1], chưa kiểm chứng), Việt Tuấn về `Google Ads`, NetworkPro về SEO vệ tinh, Hoàng Long về SEO địa phương; Việt Hàn Security và Meta.vn có đủ Facebook/YouTube/Zalo (Meta.vn thêm TikTok chính thức) nhưng chỉ xác nhận có tài khoản, chưa có số liệu [1][4][18][19].
- Khách (nhất là P-ky-thuat-vien, P-chu-quan) tìm hướng dẫn và so sánh trên YouTube/Voz, xin giá ngay dưới video và bỏ đi nếu web không có giá; kênh bán như Việt Hàn Security không thấy trả lời công khai, kênh chính hãng VN gần như vắng tương tác: khoảng trống video B2B còn rộng [5][6]. Với nguồn lực nhỏ, ưu tiên: `Website` + `SEO`, `Google Maps`, `Zalo OA`, `Facebook` (case thật) trước; `YouTube`/`TikTok`/`Google Ads`/`Shopee` giai đoạn 2.
- Sàn: TikTok Shop tăng nhanh (Q3/2026 +~76%) nhưng phí cao và Shop Mall hút 36,8% doanh số hai sàn lớn; HNP giá giữa thị trường nên chưa mở sàn ở giai đoạn 1 (Nhận định · TB) [3][21].
- Chi phí quảng cáo VN: không có benchmark VN đáng tin; chỉ có benchmark toàn cầu và ước lượng (mục chi phí từng kênh).

## Bảng audit
Đối thủ "tốt nhất" theo khảo sát nội bộ [1]; số liệu chưa kiểm chứng [4]. Mục có [16]–[20] là xác nhận trực tiếp ngày 2026-11-14 (chỉ có/không có kênh, không có số liệu).

| Kênh | Hiện trạng thương hiệu | Đối thủ tốt nhất ở kênh | Khoảng cách |
|------|------------------------|--------------------------|-------------|
| Facebook | Fanpage 410 follower, 1 đánh giá, ~4 bài năm 2026, 1–4 lượt thích/bài, 1 reel ~62 lượt xem; FB nhân sự 30–50+ cảm xúc/bài [1]. Website chưa gắn link Facebook [16] | CNTTShop: FB 21,4K + group 3,5K theo [1]; footer CNTTShop và Việt Hàn Security có link Facebook [18][20]; nhóm nhỏ như NetworkPro ~930, Hoàng Long 3,3K (bắt kịp được) [1] | Lớn so với CNTTShop; nhỏ so với nhóm nhỏ (Nhận định · Thấp) |
| Zalo OA | Zalo cá nhân là kênh chốt đơn; web có link Zalo thật + nút "Chat Zalo" + nút gọi; chưa có OA [1][2][16] | Việt Hàn Security và Meta.vn dùng nút "Chat Zalo" trên web; link Việt Hàn dạng ID số, có thể là OA (Nhận định · Thấp) [18][19]; Việt Tuấn có Zalo/Messenger [4] | Không còn khoảng cách ở điểm chạm "nút chat"; còn thiếu OA (menu, broadcast, báo giá tự động) và đo lường |
| TikTok | Không có [1]; footer `#` [16] | CNTTShop 10,6K, đăng hằng ngày theo [1], nhưng không có link TikTok trên site [20][4]; Meta.vn có link TikTok chính thức (không rõ số liệu) [19] | Lớn (chưa có kênh); mức mạnh của đối thủ chưa kiểm chứng |
| YouTube | Không có [1]; footer `#` [16] | CNTTShop 5,1K, 989 video theo [1]; video Việt Hàn Security 7.800–14.700 view, Việt Tuấn video U7 19.817 view [5]; Meta.vn có kênh (chỉ xác nhận link) [19] | Lớn (chưa có kênh); khoảng trống nội dung có giá/cấu hình còn nhiều [5] |
| Website | Shop, giỏ hàng, flash sale, 7 chính sách, nút Zalo + gọi; Tin tức có 1 bài E50UG (không ngày, không chia sẻ); Giải pháp chưa có bài; giá "Liên hệ" ở đầu ghi Hikvision/firewall Cisco/tổng đài, "0 ₫" ở vài MikroTik/Switch; mục UPS chưa có SP [2][16][17] | CNTTShop (blog nhiều chủ đề, YouTube nhúng); Việt Hàn Security có Tin tức, Khuyến mãi, "Dấu ấn Việt Hàn"; NetworkPro có Blog, Dự án [4][18][20] | TB: nền tốt, thiếu nội dung và giá nhất quán |
| Google Maps | Có listing, 5,0★ (1 đánh giá), chưa xác nhận chủ sở hữu, chưa có ảnh [1] | Siêu Thị Viễn Thông, Thế Giới Mạng (Gò Vấp) có showroom [4]; Việt Hàn Security có showroom + 2 văn phòng HN/HCM [4]; review Maps đối thủ chưa đọc được | Chưa xác minh; HNP đang bỏ trống |
| SEO | Top 1 khi tìm tên thương hiệu; không trang 1 cho "router mikrotik chính hãng", "thiết bị mạng chính hãng" [1]. Từ khoá `E50UG`, `hEX refresh` tiếng Việt: không nhà bán VN trong kết quả đầu qua 2 lần kiểm (2026-11-08, 2026-11-14), HNP đã có bài [4] | Hoàng Long (SEO địa phương theo quận), NetworkPro (site vệ tinh); HACOM hiện diện rõ ở `RG-EG105G-V3`, `RG-RAP2200(E)` [1][4] | Lớn ở từ khoá chung; có khoảng trống ở từ khoá model E50UG (Nhận định · TB); EG105G-V3/RAP2200(E) có đối thủ |
| Google Ads | Chưa thấy chạy ở các từ khoá đã kiểm [1] | Việt Tuấn: chạy cho "router mikrotik chính hãng", "E50UG giá" theo [1] (chưa kiểm Transparency) | Lớn (chưa chạy) |
| Shopee | Không có gian hàng [1] | Không thấy link Shopee trên website CNTTShop, Việt Hàn Security, Meta.vn [18][19][20]; gian hàng trên sàn: Chưa xác minh | Chưa xác minh |
| Lazada | Không có gian hàng [1] | Như trên | Chưa xác minh |

## Đánh giá từng kênh
Chi phí quảng cáo: không có nguồn VN riêng đáng tin; số toàn cầu chỉ để định hướng.

### Facebook
- **Persona phù hợp:** P-chu-quan, P-sme-van-phong (nhận case thật, báo giá), P-ky-thuat-vien (qua FB nhân sự, nhóm nghề), P-chu-nha-pho (phụ) [6][1].
- **Vai trò phễu:** consideration (case thật, so sánh model) và retention (khách cũ, bảo hành); conversion qua Messenger/Zalo.
- **Chi phí tham khảo:** đăng tự nhiên: 0đ ngoài công sản xuất. Quảng cáo: benchmark toàn cầu 2025 CPC khoảng 0,70 USD (traffic), 1,92 USD (lead), CPM khoảng 7,47 USD [8]; một nguồn tìm kiếm 2026 ghi CPC Facebook toàn cầu trung bình khoảng 1,11 USD (tháng 1/2025–1/2026, chưa mở trang) [22]; một bài 24h Money ghi VN 1.000–5.000đ/click, không rõ nguồn gốc [9]. Ước lượng cho thiết bị mạng B2B: Chưa xác minh (Nhận định · Thấp).
- **Độ khó vận hành:** Thấp–TB. Fanpage đã ngưng 3 năm (cần khởi động lại); cần ảnh/video thật từ thi công. Chưa biết người phụ trách [1].
- **Ghi chú:** FB cá nhân nhân sự kéo tương tác cao hơn fanpage; đề xuất chia sẻ lại bài fanpage từ tài khoản nhân sự (cần nhân sự đồng ý). Footer web chưa có link Facebook: khách đọc blog/chính sách không tìm được fanpage để kiểm chứng pháp nhân mới [16].

### Zalo OA
- **Persona phù hợp:** P-chu-quan, P-sme-van-phong (báo giá/chốt), P-ky-thuat-vien (nhóm đại lý, hỗ trợ kỹ thuật) [6].
- **Vai trò phễu:** conversion và retention. Là điểm chốt đơn hiện tại ở dạng Zalo cá nhân [1]; web đã có nút "Chat Zalo" và CTA Zalo trong bài blog [16][17].
- **Chi phí tham khảo:** OA cơ bản miễn phí [13]; một bài tổng hợp 2026 ghi gói PRO 165.000đ/tháng (trạng thái "Beta"), ZNS 200đ/tin thông báo, 250đ/tin quảng cáo [12]. Chưa kiểm trang giá chính thức Zalo; xác minh trước khi dùng.
- **Độ khó vận hành:** Thấp. Cần quy ước ai trả lời, giờ 08:00–18:00 (không hứa 24/7) [2].
- **Ghi chú:** giữ số Zalo 0937813788 gắn OA hoặc giữ nút "Chat Zalo" trên `Website` để không mất khách quen. Đối thủ Việt Hàn Security và Meta.vn cũng chỉ dùng Zalo làm nút chat chính [18][19]: lợi thế nằm ở tốc độ và nội dung trả lời, không ở việc có nút.

### TikTok
- **Persona phù hợp:** P-chu-nha-pho (chính), P-chu-quan (phụ); P-ky-thuat-vien xem mẹo cấu hình ngắn [6].
- **Vai trò phễu:** awareness. Không chốt đơn trực tiếp khi chưa có sàn/TikTok Shop.
- **Chi phí tham khảo:** đăng tự nhiên 0đ. Quảng cáo: benchmark toàn cầu CPM khoảng 13,26 USD hoặc 4,67 USD tùy nguồn [14]; một bài Ecomobi ước tính CPC TikTok Ads tại VN khoảng 3.000–5.000đ, không rõ độ phủ ngành, chưa xác nhận cho thiết bị mạng (Nhận định · Thấp) [23]. TikTok Shop: xem mục `Shopee` và Ma trận ưu tiên.
- **Độ khó vận hành:** TB–Cao. Cần đăng đều để có hiệu quả; CNTTShop đăng hằng ngày theo [1]. Nên tái dùng clip từ `YouTube`/`Facebook` (Reels) thay vì sản xuất riêng.
- **Rủi ro:** chưa có dữ liệu cầu TikTok từ khách HNP; nhóm hiện có là kỹ thuật viên/SME (Nhận định · Thấp). Nhóm P-chu-nha-pho có tín hiệu rõ nhất ở YouTube (mẫu 86% là nội dung gia đình) [5].

### YouTube
- **Persona phù hợp:** P-ky-thuat-vien (chính), P-chu-quan, P-sme-van-phong, P-chu-nha-pho [5][6].
- **Vai trò phễu:** awareness và consideration; kênh khách dùng nhiều nhất khi tìm hiểu (video review, cấu hình, so sánh) [5][6].
- **Chi phí tham khảo:** đăng tự nhiên 0đ ngoài công quay dựng. Quảng cáo YouTube: Chưa xác minh (không có số VN).
- **Độ khó vận hành:** Cao ở sản xuất (quay thiết bị thật, màn hình cấu hình), nhưng nội dung bền. Bắt đầu với video 3–5 phút theo từng case/model.
- **Cơ hội (cập nhật):** khách xin giá dưới video của đối thủ và đại lý (Việt Hàn Security 7.800–14.700 view, nhiều "xin giá" chưa thấy phản hồi); kênh chính hãng VN (UniFi Việt Nam, Ruijie Reyee Vietnam) dưới 1.000 view, 1 comment/video: cạnh tranh video B2B thưa [5]. Tên model (E50UG, EG105G-V3, RAP2200(E)) làm tiêu đề; giá trong mô tả/bình luận ghim chỉ khi giá đã công khai ở `Website`.

### Website
- **Persona phù hợp:** tất cả; P-sme-van-phong cần hóa đơn VAT, chính sách [6][2].
- **Vai trò phễu:** consideration và conversion; đích đến cho `SEO`, `Google Ads`, `Facebook`.
- **Chi phí tham khảo:** hạ tầng đã có; chi phí là công viết/chụp ảnh (0đ nếu nội bộ). Không tìm được số tham chiếu VN cần thiết.
- **Độ khó vận hành:** Thấp–TB. Việc ưu tiên: sửa sai nhãn hãng, giá "0 ₫", kiểm meta "Cần Thơ" [2][16]; đã có CTA Zalo, thêm ngày đăng/chia sẻ/mục lục cho bài blog [17]; điền bài "Giải pháp"; hiện giá tham khảo đầu ghi Hikvision, UPS khi có SKU (khách bỏ đi nếu không thấy giá [5]); gắn link Facebook thật, ẩn icon `#` đến khi có tài khoản.

### Google Maps
- **Persona phù hợp:** P-chu-quan, P-sme-van-phong (tìm "thiết bị mạng gần tôi/TP.HCM"), khách địa phương P-chu-nha-pho [6].
- **Vai trò phễu:** consideration và conversion (gọi, chỉ đường, xem đánh giá); xây niềm tin cho pháp nhân mới (chỉ 1 đánh giá) [2].
- **Chi phí tham khảo:** 0đ để xác nhận và đăng bài.
- **Độ khó vận hành:** Thấp. Cần xác nhận chủ sở hữu (mã gửi bưu điện/điện thoại), thêm ảnh thật, xin đánh giá từ khách đã lắp.
- **Lưu ý:** hồ sơ nêu địa chỉ có thể là nhà riêng/kho (745/62/2 Quang Trung); cần chủ thương hiệu xác nhận hình thức hiển thị (Chưa xác minh).

### SEO
(Chỉ mức kênh; từ khoá ở `41-seo-keywords.md`.)
- **Persona phù hợp:** P-chu-quan, P-sme-van-phong, P-ky-thuat-vien (tìm model + giá/cấu hình) [5][6].
- **Vai trò phễu:** awareness đến conversion; nguồn khách có ý định mua cao.
- **Chi phí tham khảo:** công viết nội dung; công cụ SEO trả phí (Ahrefs/Semrush): Chưa xác minh giá. Search Console miễn phí.
- **Độ khó vận hành:** TB; kết quả chậm (nhiều tháng, Nhận định · TB). Đối thủ có site vệ tinh và landing theo quận [1].
- **Cơ hội:** `E50UG`, `hEX refresh` không có nhà bán VN trong kết quả đầu qua 2 lần kiểm, bài blog E50UG đã có sẵn; `RG-EG105G-V3` có HACOM, `RG-RAP2200(E)` có 5 nhà bán, cạnh tranh hơn [4]. Cần đo bằng Search Console (chưa có số, chưa có `web-log.md`).

### Google Ads
- **Persona phù hợp:** P-sme-van-phong, P-chu-quan, P-ky-thuat-vien (tìm model + giá).
- **Vai trò phễu:** conversion (từ khoá có ý định mua).
- **Chi phí tham khảo:** CPC Search toàn cầu 2025 ước 2,69 USD đến 5,26 USD tùy nguồn [7]; một tìm kiếm 2026 ghi WordStream CPC trung bình toàn ngành 5,42 USD (chưa mở trang gốc) [22]. VN thiết bị mạng: Chưa xác minh; ước lượng khoảng 3.000–15.000đ/click cho từ khoá model, 15.000–40.000đ cho từ khoá chung như "router mikrotik chính hãng" (Nhận định · Thấp, không có nguồn; Việt Tuấn đang cạnh tranh những từ này [1]). Cần xem Keyword Planner thực tế.
- **Độ khó vận hành:** TB; cần theo dõi chuyển đổi (Zalo/gọi). Chưa nên chạy trước khi `Website` có giá và nút Zalo (nút Zalo đã có [16]; còn giá).

### Shopee
- **Persona phù hợp:** P-chu-nha-pho (mua lẻ), thợ mua nhỏ lẻ.
- **Vai trò phễu:** conversion B2C; nguồn khách mới ngoài tư vấn.
- **Chi phí tham khảo:** phí xử lý giao dịch 6% (người bán ngoài Mall, từ 05/2026) [11]; phí cố định theo ngành, đã tăng một số nhóm công nghệ từ 23/05/2026 [11]; một bảng không ghi ngày liệt kê "Thiết bị mạng" 6,87% [10], chưa xác minh cho 2026. Một bài VnBusiness ghi Shopee và TikTok Shop cùng đẩy phí sàn chạm ngưỡng kỷ lục 25% doanh thu (chỉ thấy tiêu đề trong kết quả tìm, chưa mở trang) [21]. Thị phần GMV 2025: Shopee 56,04% [3].
- **TikTok Shop (thuộc `TikTok`):** một tài liệu tìm kiếm ghi phí giao dịch 6% từ 2026-05-09, hoa hồng nhiều ngành khoảng 9–17,8%, nhóm Máy tính & Thiết bị văn phòng của Mall khoảng 12,5% từ 2026-08-03; nguồn khác ghi số rất khác, cần kiểm Seller Center (chưa mở trang) [22]. Ngành thiết bị mạng: Chưa xác minh.
- **Độ khó vận hành:** TB–Cao (kho, đóng gói, hậu mãi). Rủi ro: giá HNP ở giữa thị trường, khó thắng bằng giá; EG105G-V3 đã có đối thủ rẻ hơn [2][4]; Shop Mall (3,54% số shop) chiếm 36,8% doanh số hai sàn lớn nên gian hàng thường khó cạnh tranh, mà Mall cần giấy ủy quyền thương hiệu (HNP chưa có, Chưa xác minh) [3][2]. Không có tư vấn đúng nhu cầu trên sàn.
- **Lưu ý:** gian hàng cần giấy tờ pháp nhân (mới từ 2025-10-20 [2]).

### Lazada
- **Persona phù hợp:** như `Shopee`, thấp hơn.
- **Vai trò phễu:** conversion B2C; quy mô nhỏ: Lazada + Tiki khoảng 3% GMV 4 sàn năm 2025 [3].
- **Chi phí tham khảo:** Chưa xác minh.
- **Độ khó vận hành:** TB–Cao; lợi ích thấp.

## Ma trận ưu tiên
Tác động (Cao/TB/Thấp) × chi phí (đồng + công). Đánh giá là Nhận định · TB trừ khi ghi khác; chưa có dữ liệu chuyển đổi của HNP và chưa đăng bài nào.

| Kênh | Tác động | Chi phí (đồng + công) | Quyết định | Lý do |
|------|----------|----------------------|-----------|-------|
| Website | Cao | Thấp | Làm ngay | Là đích mọi kênh; đã có nút Zalo, 1 bài blog; còn thiếu giá đầu ghi/UPS, sai nhãn, "0 ₫", link Facebook [1][2][16][17] |
| Google Maps | TB–Cao | Rất thấp | Làm ngay | Bằng chứng xã hội cho pháp nhân mới; 0đ |
| Zalo OA | Cao | Thấp | Làm ngay | Đã là kênh chốt đơn; thêm công cụ và đo |
| Facebook | TB | Thấp | Làm ngay | Khởi động lại bằng case thật; tận dụng FB nhân sự; gắn link vào web |
| SEO | Cao (chậm) | Thấp–TB | Làm ngay (mức nhẹ) | `E50UG`/`hEX refresh` còn trống, bài đã có; mở rộng sang EG105G-V3, RAP2200(E) (Nhận định · TB) |
| YouTube | Cao (dài hạn) | Cao (công) | Giai đoạn 2 | Phù hợp P-ky-thuat-vien; cạnh tranh video B2B thưa [5]; cần quy trình quay trước |
| TikTok | TB | TB–Cao (công) | Giai đoạn 2 | Tái dùng clip từ YouTube/Facebook; **chỉ nội dung, chưa mở TikTok Shop** |
| Google Ads | TB–Cao | TB (ngân sách) | Giai đoạn 2 | Chạy thử nhỏ sau khi `Website` có giá đầu ghi/model chủ lực + có số đo Search Console |
| Shopee | TB | TB–Cao | Giai đoạn 2 (thử vài SKU) | Phí tăng (6% + phí ngành, một bài ghi chạm 25%) [11][21]; giá không thắng được; Mall cần ủy quyền |
| Lazada | Thấp | TB | Bỏ qua | Lazada + Tiki ~3% GMV [3] |

## Quick wins
≤ 30 ngày, chi phí thấp (tính từ 2026-11-14; các việc đã có từ bản 2026-11-08 giữ số thứ tự, hạn dời tương ứng).

| # | Việc | Kênh | Chi phí | Hạn gợi ý |
|---|------|------|---------|-----------|
| 1 | Xác nhận chủ sở hữu listing, thêm 10–15 ảnh thật (cửa hàng, kho, lắp đặt), điền giờ/địa chỉ đúng | Google Maps | 0đ | Tuần 1 |
| 2 | Xin đánh giá từ 5–10 khách/thợ đã mua (có phép), gửi link đánh giá qua Zalo | Google Maps, Facebook | 0đ | Tuần 1–4 |
| 3 | Kiểm meta "Cần Thơ" (lần đọc 2026-11-14 không thấy thẻ meta [16], cần xem tay Page Source); sửa nhãn sai UniFi/Ruijie dán MikroTik; bỏ "hỗ trợ 24/7" [2] | Website | 0đ (công) | Tuần 1 |
| 4 | Thêm giá tham khảo ghi ngày cập nhật cho 5 SKU chủ lực (E50UG, EG105G-V3, RAP2200(E), RAP62, EG406XS-P); nút Zalo đã có [16] | Website | 0đ | Tuần 2 |
| 5 | Tạo Zalo OA, gắn số 0937813788, tin chào + menu (báo giá, tư vấn, bảo hành) | Zalo OA | 0đ (gói cơ bản) [13] | Tuần 2 |
| 6 | Đăng lại fanpage: 2 bài/tuần (1 case/ảnh thật + 1 tư vấn chọn thiết bị); chia sẻ từ FB nhân sự | Facebook | 0đ | Từ tuần 1 |
| 7 | Viết 3 bài từ câu hỏi thật (quán 60–80 thiết bị cần mấy AP; EG105G-V3 và RAP2200(E) "có đáng mua?" theo mẫu bài E50UG) vào `/news` hoặc "Giải pháp" | Website | 0đ (công) | Tuần 3–4 |
| 8 | Gắn link Facebook thật vào footer; chỉ điền link TikTok/YouTube/Instagram khi tài khoản đã có, tạm ẩn icon `#` | Website | 0đ | Tuần 2 |
| 9 | Xem tay FB/YouTube/TikTok của CNTTShop, Việt Tuấn, NetworkPro, Hoàng Long, Việt Hàn Security, Meta.vn; ghi 10 bài/video gần nhất; tìm trong Ads Library theo tên trang | Facebook, YouTube, TikTok | 0đ (khoảng 15 phút/đối thủ) | Tuần 2 |
| 10 | Thêm 1 dòng theo dõi nguồn khách ("khách biết HNP từ đâu") khi báo giá Zalo/gọi | Zalo OA | 0đ | Tuần 1 |
| 11 | Bài E50UG: thêm ngày đăng, nút chia sẻ, mục lục, ảnh thật (hiện không có ngày/chia sẻ/mục lục) [17] | Website | 0đ (công) | Tuần 1 |
| 12 | Sửa giá "0 ₫" (MikroTik, Switch) và thay "Liên hệ" bằng giá tham khảo cho đầu ghi Hikvision khi HNP chốt được giá [16][5] | Website | 0đ | Tuần 2–3 |
| 13 | Nộp sitemap + xác minh Search Console, bắt đầu đo bài E50UG (cần để `content-measure` nhập số liệu) | SEO | 0đ | Tuần 1 |

## Định dạng nội dung theo kênh
Để `content-write` viết cho từng kênh. Tần suất là đề xuất khởi đầu cho nguồn lực nhỏ (Nhận định · TB); chưa biết người phụ trách và ngân sách [1], điều chỉnh sau 4 tuần có số đo.

| Kênh | Định dạng | Độ dài | Tần suất | Persona chính | Ví dụ |
|------|-----------|--------|----------|----------------|-------|
| Facebook (fanpage) | Bài ảnh thật có chú thích (case thi công, sơ đồ đi dây) | 80–150 từ + 3–5 ảnh | 2/tuần | P-chu-quan, P-sme-van-phong | "Quán 150 m²: 1 router + 4 AP đi dây LAN, ngân sách 8 triệu" (31-A1) |
| Facebook (fanpage) | Bài tư vấn chọn thiết bị dạng bảng 3 mức (tiết kiệm/chuẩn/dư) | 100–180 từ + ảnh bảng | 1/2 tuần | P-chu-quan, P-sme-van-phong | "Đúng nhu cầu, không mua dư" (10-A1) |
| Facebook (Reels) | Video dọc: unbox, cắm thử, mẹo cấu hình | 30–60 giây, có phụ đề | 1/tuần (tái dùng ở TikTok) | P-chu-nha-pho, P-ky-thuat-vien | "Cấu hình E50UG 2 WAN trong 1 phút" (21-A4) |
| Zalo OA | Tin tư vấn 1–1 và mẫu trả lời nhanh (giá tham khảo + ngày cập nhật) | 2–5 dòng | Theo yêu cầu, trong 08:00–18:00 | P-chu-quan, P-sme-van-phong, P-ky-thuat-vien | Mẫu báo giá E50UG kèm điều kiện giao nội thành |
| Zalo OA | Broadcast/bài OA: bản tin ngắn, ưu đãi, hướng dẫn | 60–100 từ + 1 ảnh | 2–4 tin/tháng (giới hạn gói theo Zalo [13]) | P-ky-thuat-vien, khách cũ | "Hướng dẫn cấu hình 5 phút cho thợ" (31-A4) |
| TikTok | Video dọc mẹo kỹ thuật/lỗi thường gặp/trước-sau lắp | 15–45 giây, mở bằng câu hỏi | 3/tuần (khi đã có thư viện clip) | P-chu-nha-pho, P-chu-quan | "Vì sao wifi tầng 3 yếu dù đóng gói cao" (31-A2) |
| YouTube | Video hướng dẫn cấu hình, review model, case lắp đặt; tên model trong tiêu đề | 3–7 phút | 2/tháng, bắt đầu khi quy trình quay sẵn sàng | P-ky-thuat-vien, P-chu-quan | "Cân bằng tải MikroTik E50UG: 2 WAN từng bước" (21-A4) |
| YouTube | Video bảng giá + phạm vi lắp trọn gói (camera Hikvision 4/8 mắt, đầu ghi) khi giá đã công khai ở `Website` | 4–6 phút | 1/tháng sau video đầu | P-chu-nha-pho, P-chu-quan | "Lắp camera 4 mắt trọn gói gồm những gì" (30-A15) |
| YouTube Shorts | Cắt từ video dài | 30–50 giây | 1/tuần | P-chu-nha-pho | Mẹo "chọn AP theo số thiết bị" |
| Website (bài viết) | Bài "có đáng mua?" theo model, hướng dẫn chọn thiết bị, bảng so sánh, giải thích bảo hành; có ngày đăng, mục lục, nút Zalo | 800–1.500 từ, bảng + ảnh | 2/tháng (làn SEO) | P-sme-van-phong, P-chu-quan | "Review EG105G-V3: có đáng mua?" theo mẫu bài E50UG (10-A4) |
| Website (trang sản phẩm/giá) | Trang model có giá tham khảo + nút Zalo | 150–300 từ mô tả + thông số | Cập nhật khi đổi giá; kiểm tra hàng tháng | Mọi persona | Trang E50UG, EG105G-V3 (31-A7) |
| Google Maps | Bài đăng cập nhật + ảnh thật | 50–100 từ + 1–3 ảnh | 1/tuần | P-chu-quan, khách địa phương | "Chiều nay lắp mạng quán cà phê Q.7" (không dùng nếu chưa có ảnh/phép) |
| Google Maps | Trả lời đánh giá | 1–3 câu, nêu tên cụ thể sản phẩm | Trong 48 giờ | Mọi khách | Cảm ơn + mời nhắn Zalo hỗ trợ |
| Google Ads (giai đoạn 2) | Quảng cáo Search: tiêu đề có model + "chính hãng" + giá/Zalo | Tiêu đề 30 ký tự ×3, mô tả 90 ký tự ×2 | Theo ngân sách thử | P-sme-van-phong, P-ky-thuat-vien | Từ khoá `E50UG giá` (chỉ nếu giá đã công khai) |
| Shopee (giai đoạn 2, thử SKU) | Trang sản phẩm chuẩn hóa: ảnh thật, thông số, bảo hành | 150–300 từ | Khi mở gian hàng | P-chu-nha-pho | MikroTik E50UG chính hãng |

## Dành cho Content

### Insight
| ID | Insight | Bằng chứng | Độ tin cậy |
|----|---------|-----------|-----------|
| 40-I1 | Tài sản tương tác thật nằm ở FB cá nhân nhân sự và Zalo cá nhân, không phải fanpage; cần kéo về kênh đo được (`Zalo OA`, `Facebook`) | [1][2] | TB |
| 40-I2 | `YouTube` là nơi khách so sánh, hỏi cấu hình và xin giá; HNP chưa có mặt, trong khi nhóm đối thủ (CNTT SHOP, Việt Tuấn, Việt Hàn Security) đang nhận câu hỏi giá | [5][6] | TB |
| 40-I3 | Khách bỏ đi nếu web không hiện giá; giá tham khảo công khai trên `Website` là điểm khác biệt vì nhiều đối thủ để "Liên hệ". Website HNP còn "Liên hệ" ở đầu ghi Hikvision/Cisco/Grandstream và "0 ₫" ở vài SKU: cần sửa trước khi dùng điểm này làm thông điệp | [5][4][16] | TB |
| 40-I4 | Pháp nhân mới (2025-10-20) và chỉ 1 đánh giá Google/FB: `Google Maps` + đánh giá khách là việc rẻ nhất để lấp thiếu bằng chứng xã hội | [2] | Cao |
| 40-I5 | Từ khoá model `E50UG`/`hEX refresh` không có nhà bán VN trong kết quả đầu (2 lần kiểm 2026-11-08, 2026-11-14): cơ hội cho bài `Website` và video `YouTube` tên model; EG105G-V3, RAP2200(E) cạnh tranh hơn | [4] | TB (nâng từ Thấp theo 21-I9) |
| 40-I6 | Giá HNP giữa thị trường; trên `Shopee` giá là yếu tố chính nên khó thắng, tư vấn đúng nhu cầu chỉ làm được ở `Website`/`Zalo OA`/`Facebook` | [2][4] | TB |
| 40-I7 | Chưa có benchmark chi phí quảng cáo VN đáng tin; mọi kế hoạch trả phí phải bắt đầu bằng thử nhỏ và đo | [7][8][9][22][23] | Cao (về khoảng trống) |
| 40-I8 | (mới) `Website` HNP đã có các điểm chạm chuyển đổi cơ bản (nút Zalo/gọi nổi, CTA Zalo 3 vị trí trong bài blog) nhưng thiếu điểm chạm niềm tin: không link Facebook, không ngày đăng/chia sẻ ở bài blog, icon xã hội `#`. Sửa các điểm này rẻ hơn mở kênh mới | [16][17] | Cao |
| 40-I9 | (mới) Kênh bán/đại lý (Việt Hàn Security) có video 7.800–14.700 view nhưng nhận nhiều "xin giá", "lắp trọn gói bao nhiêu" không thấy trả lời công khai; trả lời giá + phạm vi lắp ở `YouTube`/`Website` là khoảng trống cạnh tranh | [5][18] | TB |
| 40-I10 | (mới) Kênh chính hãng VN (UniFi Việt Nam, Ruijie Reyee Vietnam) dưới 1.000 view, ~1 comment/video: video B2B tiếng Việt chưa đông, chi phí vào cuộc thấp hơn tưởng nếu chọn đúng case | [5] | TB |
| 40-I11 | (mới) TikTok Shop tăng ~76% Q3/2026 và gần ngang Shopee nhưng phí cao (giao dịch 6% + hoa hồng theo ngành, một bài ghi tổng phí chạm 25%); với HNP giá giữa thị trường, TikTok nên dùng làm kênh nội dung, chưa phải gian hàng. Chưa có số ngành thiết bị mạng | [3][21][22] | Thấp |
| 40-I12 | (mới) Đối thủ gián tiếp lớn (Meta.vn) có đủ Zalo/Facebook/YouTube/TikTok chính thức nhưng không thấy blog trên trang chủ; nội dung tư vấn theo nhu cầu SME là ô chưa thấy ai lấp ở nhóm chuỗi bán lẻ (chỉ xem trang chủ, chưa kiểm kỹ) | [19] | Thấp |

### Góc content gợi ý
| ID | Góc / thông điệp | Đối tượng | Kênh phù hợp | Dựa trên |
|----|------------------|-----------|--------------|----------|
| 40-A1 | Mini-series "Từ khảo sát đến bàn giao": 1 case thật/tuần (ảnh trước-sau, thiết bị, sơ đồ) | P-chu-quan, P-sme-van-phong | Facebook, Google Maps, Website | 40-I4 |
| 40-A2 | Mẫu trả lời Zalo OA "báo giá trong 10 phút": giá tham khảo + ngày cập nhật + điều kiện giao | P-chu-quan, P-sme-van-phong | Zalo OA, Website | 40-I3, 40-I1 |
| 40-A3 | Video "cấu hình trong 5 phút" cho từng model chủ lực, tiêu đề có tên model | P-ky-thuat-vien | YouTube, TikTok | 40-I2, 40-I5 |
| 40-A4 | "Xin đánh giá": tin nhắn cảm ơn sau lắp + link Google Maps | Khách đã mua | Zalo OA, Google Maps | 40-I4 |
| 40-A5 | Bảng giá tham khảo SKU chủ lực có nút Zalo, cập nhật mỗi tháng | Mọi persona | Website, Facebook | 40-I3 |
| 40-A6 | (mới) "Lắp camera trọn gói gồm những gì, giá thế nào": bảng giá + phạm vi 4/8 mắt, chỉ dùng khi HNP chốt giá và quy trình | P-chu-nha-pho, P-chu-quan | YouTube, Website | 40-I9, 40-I3 |
| 40-A7 | (mới) Nhân bản mẫu bài "có đáng mua?" của E50UG sang EG105G-V3, RAP2200(E): tiêu đề có model, mục lục, ngày đăng, CTA Zalo | P-sme-van-phong, P-ky-thuat-vien | Website, SEO | 40-I5, 40-I8 |
| 40-A8 | (mới) Series video ngắn trả lời câu hỏi mà kênh chính hãng chưa trả lời (cân bằng tải 2 WAN, "100 user" thực tế, cắm cổng nào) | P-ky-thuat-vien | YouTube, TikTok | 40-I10, 40-I2 |

### Proof points
| ID | Điều có thể nói công khai (số liệu, chính sách, chứng nhận) | Nguồn |
|----|------------------------------------------------------------|-------|
| 40-P1 | Không có proof point mới của HNP trong file này; dùng 10-P1 đến 10-P8 (chính hãng CO/CQ, bảo hành theo hãng, giao toàn quốc, hóa đơn điện tử, tư vấn cài đặt tận nơi, chính sách có ngày cập nhật) | [2] |

### Ngôn ngữ & từ khoá
- `báo giá nhanh`, `tư vấn đúng nhu cầu`, `cấu hình tại chỗ` — dùng trên `Zalo OA`/`Facebook` (khớp 10-brand) [2]
- `E50UG`, `RG-EG105G-V3`, `RG-RAP2200(E)`, `hEX refresh` — tên model đặt trong tiêu đề `YouTube`/`Website` [4][5]
- `có đáng mua?` — mẫu tiêu đề blog hiện có [17]
- `lowtech`, `tự set up có dễ không`, `xin giá` — ngôn ngữ khách, dùng làm hook video/hỏi đáp [5][6]
- Tên kênh chuẩn: `Facebook`, `Zalo OA`, `TikTok`, `YouTube`, `Website`, `Google Maps`, `Google Ads`, `SEO`, `Shopee`, `Lazada`.

### Cần tránh
- Đề cập TikTok/YouTube/Instagram/Shopee như kênh HNP đang có: chưa có tài khoản; icon footer là `#` [1][16].
- "Hỗ trợ 24/7" trên Zalo/Facebook: giờ 08:00–18:00 [2].
- Số follower, tần suất, tương tác đối thủ như sự thật: khảo sát nội bộ chưa kiểm chứng; lần 2026-11-14 chỉ xác nhận có/không có link kênh [4][18][19][20].
- Hứa "báo giá trong 10 phút", "cấu hình trong 1 ngày", "miễn phí lắp đặt", "lắp trọn gói": chưa được HNP xác nhận quy trình/chính sách (40-A2, 40-A6 chỉ dùng khi HNP chốt).
- So sánh trực tiếp tên đối thủ trong quảng cáo, kể cả "xin giá không được trả lời" của Việt Hàn Security: dùng để định hướng nội bộ, không nêu tên đối thủ khi đăng [4].
- Đăng ảnh/tên khách và đánh giá khi chưa có phép.
- Dùng CPC/CPM/phí sàn trong file này làm ngân sách chính thức: nguồn nước ngoài, bài tổng hợp chưa mở trang, hoặc ước lượng (Thấp).
- Nói "TikTok Shop là kênh chốt đơn của HNP": chưa có gian hàng, phí/hoa hồng ngành mạng chưa xác minh.
- Đăng trend/khuyến mại lên `Website` (làn trend chỉ Facebook/TikTok theo CLAUDE.md).

## Khoảng trống dữ liệu
- Kênh đối thủ (follower, 10 bài gần nhất, định dạng, tương tác) — công cụ không đọc được mạng xã hội; thử lại trang YouTube CNTTSHOP 2026-11-14 chỉ trả khung menu — xem tay hoặc social listening [4].
- Facebook Ads Library, TikTok Creative Center, Google Ads Transparency — chưa truy cập — mở tay, tìm theo tên trang đối thủ.
- CPC/CPM VN theo ngành thiết bị mạng — không có nguồn đáng tin — lấy Keyword Planner (Google), Ads Manager (Meta) hoặc báo giá agency VN.
- Phí cố định Shopee và hoa hồng TikTok Shop ngành "Thiết bị mạng" năm 2026 — các bảng tìm thấy không ghi ngày hoặc mâu thuẫn nhau [10][21][22] — kiểm Seller Centre từng sàn.
- Giá Zalo OA chính thức — chỉ có bài tổng hợp [12][13] — kiểm trang Zalo Business.
- Số liệu fanpage/Google Maps/Zalo hiện tại, người phụ trách marketing, ngân sách, traffic web, nguồn đơn — nội bộ [1] — chủ thương hiệu cung cấp, xuất Search Console/GA4.
- Hình thức hiển thị địa chỉ trên Google Maps — chưa xác minh — hỏi chủ thương hiệu.
- Gian hàng Shopee/Lazada/TikTok Shop của đối thủ — website 3 đối thủ không có link sàn [18][19][20], chưa tìm trên sàn — xem tay.
- Ngày đăng bài blog E50UG và lượng truy cập — trang không hiện ngày [17] — hỏi chủ thương hiệu, xem Search Console.
- Dữ liệu từ bài đã đăng (`log.md`, `learnings.md`, `web-log.md`) — chưa có bài nào — chạy lại sau khi đăng bài đầu tiên và nhập số liệu.

## Nguồn
1. Hồ sơ nội bộ `brand/hoang-nam-phat/brand.md`, mục 4 "Hiện trạng marketing" và mục 5 — đọc 2026-11-08
2. `research/hoang-nam-phat/10-brand.md` — đọc 2026-11-08, 2026-11-14
3. `research/hoang-nam-phat/20-market.md` (mục TMĐT: GMV 4 sàn 2025, Q3/2026 dẫn Metric qua VnBusiness) — đọc 2026-11-08, 2026-11-14
4. `research/hoang-nam-phat/21-competitors.md` — đọc 2026-11-08, 2026-11-14
5. `research/hoang-nam-phat/30-youtube-comments.md` — đọc 2026-11-08, 2026-11-14
6. `research/hoang-nam-phat/31-customers.md` — đọc 2026-11-08, 2026-11-14
7. [100+ PPC Benchmarks 2026 — Whatagraph](https://whatagraph.com/blog/articles/ppc-benchmarks) — kết quả tìm 2026-11-08 (CPC Google Search toàn cầu; chưa mở trang đầy đủ)
8. [Facebook Ads Benchmarks 2025 — Two Minute Reports](https://twominutereports.com/blog/facebook-ads-benchmarks) — kết quả tìm 2026-11-08 (benchmark toàn cầu)
9. [Chi phí quảng cáo trên Facebook — 24hmoney](https://24hmoney.vn/news/chi-phi-quang-cao-tren-facebook-cach-tinh-toi-uu-hieu-qua-c53a2802920.html) — kết quả tìm 2026-11-08 (CPC VN 1.000–5.000đ, nguồn gốc số không rõ)
10. [Phí sàn Shopee — Misa eShop (bảng ngành, không ghi ngày)](https://www.misaeshop.vn/?p=31599) — kết quả tìm 2026-11-08
11. [Cập nhật phí sàn TMĐT tháng 5/2026 — Sapo](https://www.sapo.vn/blog/cap-nhat-phi-san-tmdt-thang-5-2026) — kết quả tìm 2026-11-08, 2026-11-14
12. [Zalo thu phí người dùng 2026 — Sforum (CellphoneS)](https://cellphones.com.vn/sforum/zalo-thu-phi-nguoi-dung) — kết quả tìm 2026-11-08 (PRO 165.000đ/tháng "Beta", ZNS 200–250đ)
13. [Zalo OA có mất phí không — ViettelStore](https://viettelstore.vn/tin-tuc/zalo-oa-co-mat-phi-khong) — kết quả tìm 2026-11-08
14. [Google Ads vs Facebook Ads vs TikTok Ads: 2026 Benchmark — MetricNexus](https://metricnexus.ai/blog/google-ads-vs-facebook-ads-vs-tiktok-benchmarks) — kết quả tìm 2026-11-08 (CPM TikTok toàn cầu; chưa mở trang đầy đủ)
15. [Facebook Ads Benchmarks — Bestever](https://www.bestever.ai/post/facebook-ads-benchmarks) — kết quả tìm 2026-11-08 (tham chiếu phụ)
16. [Hoàng Nam Phát – Trang chủ](https://hoangnamphat.vn) — truy cập 2026-11-14 (link xã hội, nút Zalo/gọi, giá, mục UPS)
17. [Hoàng Nam Phát – Tin tức](https://hoangnamphat.vn/news) — truy cập 2026-11-14 (1 bài, không ngày, CTA Zalo)
18. [Việt Hàn Security – Trang chủ](https://viethansecurity.com) — truy cập 2026-11-14 (Facebook, YouTube, Zalo chat, Tin tức/Khuyến mãi; không TikTok, không link sàn)
19. [Meta.vn – Trang chủ](https://meta.vn) — truy cập 2026-11-14 (Zalo, Facebook, YouTube, TikTok chính thức; không blog, không link sàn trên trang chủ)
20. [CNTTShop – Trang chủ](https://cnttshop.vn) — truy cập 2026-11-14 (footer Facebook/YouTube/Twitter/Pinterest/Vimeo; không TikTok, không link sàn)
21. [Hai "ông lớn" Shopee và TikTok Shop cùng đẩy phí sàn chạm ngưỡng kỷ lục 25% doanh thu — VnBusiness](https://vnbusiness.vn/hai-ong-lon-shopee-va-tiktok-shop-cung-day-phi-san-cham-nguong-ky-luc-25-doanh-thu.html) — kết quả tìm 2026-11-14 (chỉ thấy tiêu đề, chưa mở trang)
22. [Các loại phí sàn TikTok Shop 2026 & cách tính — Misa eShop](https://www.misaeshop.vn/13131/phi-san-tiktok-shop/) — kết quả tìm 2026-11-14 (phí giao dịch 6%, hoa hồng 9–17,8% theo tóm tắt tìm kiếm, chưa mở trang); cùng lượt tìm CPC Facebook/Google toàn cầu 2026 (WordStream 5,42 USD; Facebook ~1,11 USD) qua kết quả tìm, chưa mở trang gốc
23. [TikTok Ads có hiệu quả không 2026 — Ecomobi](https://ecomobi.com/vi/tiktok-ads-co-hieu-qua-khong-2026/) — kết quả tìm 2026-11-14 (CPC VN khoảng 3.000–5.000đ, cột bảng không rõ nền tảng)
24. `research/hoang-nam-phat/22-vendor-products.md` — đọc 2026-11-14 (chỉ để đối chiếu danh mục hàng mới; không có dữ liệu kênh)
