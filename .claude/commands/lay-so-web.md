---
description: Lấy số liệu Search Console + GA4 bằng Chrome trên máy (chỉ xem/xuất), cất vào raw/web/ rồi nhập bằng content-measure
argument-hint: "[brand-slug] [số ngày, mặc định 28]"
---

# Lấy số liệu web qua Chrome

Đối số: `$ARGUMENTS`. Từ đầu tiên là brand slug (trống thì dùng `hoang-nam-phat`), số thứ hai là số ngày (trống thì 28). Hôm nay: ngày hiện tại của phiên.

Làm đúng **mục 1b trong `templates/web-metrics.md`**, gồm cả quy tắc an toàn: chỉ xem và xuất, không đổi cài đặt, không nhập mật khẩu.

1. Đọc `brand/<slug>/brand.md` hoặc `research/<slug>/10-brand.md` để biết domain website.
2. Gọi skill `claude-in-chrome`. Không kết nối được Chrome/extension → dừng, hướng dẫn người dùng cài/bật extension Claude in Chrome và cho phép `search.google.com`, `analytics.google.com`.
3. **Search Console**: mở báo cáo Hiệu suất của property ứng với domain, chọn khoảng ngày, xuất CSV. Lấy `Queries.csv` và `Pages.csv` → `research/<slug>/raw/web/<hôm nay>-gsc-queries.csv`, `<hôm nay>-gsc-pages.csv`.
4. **GA4**: mở Trang và màn hình cùng khoảng ngày (lọc Organic Search nếu được), xuất CSV → `<hôm nay>-ga4-pages.csv`.
5. Bước nào không xuất được → chép bảng trên màn hình ra file hậu tố `-chrome` (mục 1b bước 2). Bước nào bị chặn hẳn (chưa đăng nhập, không có quyền) → bỏ qua nguồn đó, ghi lý do, làm tiếp nguồn còn lại.
6. Có ít nhất một file mới → giao `content-measure`: "Nhập số liệu web từ các file <danh sách> cho <slug>; khoảng dữ liệu <từ → đến>; property <loại: domain/URL-prefix>; ghi chú: <bất thường>".
7. Báo lại: file đã lưu (đường dẫn), khoảng ngày, tóm tắt 5 truy vấn và 5 trang có hiển thị cao nhất, khối "Trả về" của `content-measure`, nguồn nào bị bỏ qua và vì sao.
