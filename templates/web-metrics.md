# Khuôn số liệu web (Search Console + GA4)

Dùng cho agent `content-measure` (nhập số liệu) và `gap-analysis` (đọc số liệu). Có hai cách lấy file thô:
- **Cách A: người dùng tự xuất CSV** (mục 1).
- **Cách B: agent chính đọc qua Chrome trên máy** (mục 1b, lệnh `/lay-so-web`). Agent dùng phiên Chrome đã đăng nhập Google của người dùng, chỉ xem và xuất, rồi cất file vào `raw/web/` giống cách A.

Subagent (`content-measure`, `gap-analysis`) không mở Chrome và không đăng nhập Search Console/GA4. Chúng chỉ đọc file trong `raw/web/`.

## 1. Cách lấy và cất file thô

Cất file CSV vào `research/<slug>/raw/web/` (thư mục `raw/` đã nằm trong `.gitignore`, không đưa lên git). Tên file: `YYYY-MM-DD-<nguon>-<loai>.csv`, với `YYYY-MM-DD` là ngày xuất.

| File | Lấy ở đâu | Khoảng thời gian |
|------|-----------|------------------|
| `...-gsc-queries.csv` | Search Console → Hiệu suất (Performance) → tab Truy vấn → Xuất | 28 ngày gần nhất |
| `...-gsc-pages.csv` | Search Console → Hiệu suất → tab Trang → Xuất | cùng khoảng với file trên |
| `...-ga4-pages.csv` | GA4 → Báo cáo → Mức độ tương tác → Trang và màn hình → Xuất; nên lọc kênh Organic Search | cùng khoảng |

- Tên cột trong CSV có thể là tiếng Anh hoặc tiếng Việt tuỳ ngôn ngữ giao diện (thường là Clicks / Impressions / CTR / Position với GSC; Views / Active users / Engagement time / Key events với GA4). Agent đối chiếu theo ý nghĩa cột, không theo tên chính xác.
- Search Console thường trễ 2–3 ngày và **không liệt kê truy vấn ẩn danh**, nên tổng click của các dòng truy vấn có thể nhỏ hơn tổng thật. Không cộng bù.
- Số liệu GSC và GA4 đo khác nhau: **không cộng, không trừ, không quy đổi** giữa hai nguồn.
- Nên xuất đều đặn (gợi ý mỗi tuần, cùng ngày). Cần ≥ 2 lần xuất cách nhau để thấy xu hướng.

## 1b. Cách B: đọc bằng Chrome trên máy (claude-in-chrome)

Điều kiện: Chrome trên máy đã cài extension **Claude in Chrome**, đang đăng nhập tài khoản Google có quyền xem Search Console và GA4 của website, và extension đã được phép truy cập `search.google.com`, `analytics.google.com`. Chỉ **agent chính** làm việc này (skill `claude-in-chrome`), không giao subagent.

| Nguồn | Mở trang | Làm gì |
|-------|----------|--------|
| Search Console | `https://search.google.com/search-console/performance/search-analytics` → chọn property của website (vd `sc-domain:hoangnamphat.vn` hoặc `https://hoangnamphat.vn/`) → Ngày: 28 ngày gần nhất | Bật đủ 4 chỉ số (Click, Hiển thị, CTR, Vị trí). Bấm **Xuất → Tải CSV** (ra file zip có `Queries.csv`, `Pages.csv`…) |
| GA4 | `https://analytics.google.com/` → đúng property → Báo cáo → Mức độ tương tác → **Trang và màn hình**, cùng khoảng ngày; thêm bộ lọc nhóm kênh mặc định = Organic Search nếu được | Bấm **Chia sẻ báo cáo → Tải tệp xuống → CSV** |

Sau khi tải:
1. Lấy file trong thư mục Downloads (zip của GSC thì giải nén vào một thư mục tạm riêng), đổi tên theo quy ước ở mục 1 (`YYYY-MM-DD-gsc-queries.csv`, `-gsc-pages.csv`, `-ga4-pages.csv`) rồi chép vào `research/<slug>/raw/web/`.
2. Nếu không tải được (nút xuất bị chặn, thiếu quyền): đọc bảng trên màn hình, lấy tối đa 50 truy vấn/trang có hiển thị cao nhất, ghi thành CSV cùng tên kèm hậu tố `-chrome` (vd `2026-11-15-gsc-queries-chrome.csv`), dòng đầu là tiêu đề cột. Chép đúng số trên màn hình, không làm tròn, không ước tính.
3. Ghi lại khoảng ngày đúng như báo cáo hiển thị, property đã xem và điều bất thường (dữ liệu trễ, thiếu cột) để `content-measure` đưa vào `Ghi chú nhập liệu`.
4. Chạy `content-measure` nhập file như cách A.

Quy tắc an toàn khi dùng Chrome:
- **Chỉ xem và xuất.** Không đổi cài đặt, không thêm/xoá người dùng, không gửi sitemap, không yêu cầu lập chỉ mục, không sửa sự kiện/chuyển đổi GA4, không chia sẻ báo cáo cho người khác.
- Không ghi thông tin tài khoản (email, mã property) vào file được commit. File thô nằm trong `raw/` (đã gitignore).
- Chưa đăng nhập, gặp màn hình xác minh/2FA hoặc tài khoản không có quyền thì dừng và báo người dùng tự đăng nhập rồi chạy lại. Không nhập mật khẩu thay người dùng.
- Không thấy property của website thì ghi "Chưa xác minh" và nhờ người dùng cấp quyền. Không đoán số.

## 2. Khuôn `content/<slug>/web-log.md`

`content-measure` tạo file này nếu chưa có, **thêm bản ghi mới sau mỗi lần nhập, không ghi đè bản cũ**.

````markdown
# Nhật ký số liệu web — Hoàng Nam Phát

## Trang (page level)
| Ngày lấy | Khoảng dữ liệu | URL | Click | Hiển thị | CTR | Vị trí TB | Lượt xem GA4 | Thời gian tương tác | Sự kiện chính | Brief liên quan |
|----------|----------------|-----|-------|----------|-----|-----------|--------------|---------------------|---------------|-----------------|
| 2026-11-10 | 2026-10-13 → 2026-11-09 | https://hoangnamphat.vn/... | | | | | | | | 2026-11-07-gia-e50ug |

## Truy vấn (query level) — giữ tối đa 50 truy vấn có hiển thị cao nhất mỗi lần lấy
| Ngày lấy | Khoảng dữ liệu | Truy vấn | Trang chính | Click | Hiển thị | CTR | Vị trí TB |
|----------|----------------|----------|-------------|-------|----------|-----|-----------|
````

Quy tắc:
- Ô không có số → để trống, không ước tính, không làm tròn khác nguồn.
- CTR ghi đúng đơn vị nguồn (phần trăm); vị trí TB giữ 1 chữ số thập phân.
- `Brief liên quan`: điền khi khớp được URL với link đã đăng trong `content/<slug>/<ten-brief>/publish.md`; không khớp → để trống.
- Cùng URL/truy vấn cùng `Ngày lấy` → cập nhật dòng cũ, không tạo trùng.
- Cuối file giữ mục `## Ghi chú nhập liệu`: ngày nhập, file nguồn, điều bất thường (cột thiếu, khoảng ngày lệch).

## 3. Cột web trong `content/<slug>/log.md`

Khuôn `log.md` (xem agent `content-measure`) có thêm 4 cột cho bài đăng lên website: `Click web`, `Hiển thị web`, `Vị trí TB`, `Phiên GA4`. Cột này lấy từ dòng `web-log.md` mới nhất khớp URL của bài; bài Facebook/TikTok để trống.
