*   **Mục tiêu:** Tạo một thanh tiến trình màu sắc, hiển thị phần trăm công việc đã hoàn thành cho mỗi ngày.
*   **Thanh tiến trình:**
    *   Sử dụng một `div` được tạo kiểu bằng `styled-components`.
    *   Ban đầu, thanh tiến trình có màu nền đỏ, chiều cao 50 pixel và chiều rộng 100%.
*   **Truyền dữ liệu (props):**
    *   Giá trị tiến trình (progress) được truyền từ phần (section) chứa thanh tiến trình.
    *   Giá trị progress được đặt theo phần trăm (ví dụ: 100%, 80%, 70%, v.v.) hoặc các giá trị khác (ví dụ: 1 đến 10), tùy chọn.
    *   Giá trị này được truyền vào thanh tiến trình như một prop có tên `progress`.
*  **Thay đổi chiều rộng:**
    *   Chiều rộng của thanh tiến trình phụ thuộc vào giá trị progress.
    *   Sử dụng hàm mũi tên để lấy giá trị `progress` và gán nó vào thuộc tính `width` của thanh tiến trình.
    *   Nếu không có giá trị `progress` truyền vào, chiều rộng mặc định là 0%.
*   **Vấn đề về kích thước:**
    *   Thanh tiến trình ban đầu có chiều rộng 100% so với phần (section) chứa nó, dẫn đến việc hiển thị không chính xác.
    *   Để khắc phục, thanh tiến trình được đặt trong một thành phần cha (parent component) mới có tên là `progress section`.
    *   `progress section` có chiều rộng cố định là 250 pixel, điều chỉnh để thanh tiến trình có chiều rộng chính xác.
*  **Thay đổi màu sắc:**
    *   Màu sắc của thanh tiến trình sẽ phụ thuộc vào giá trị progress.
    *   Cần sử dụng các câu lệnh `if else` để xác định màu sắc tương ứng với từng giá trị tiến trình.
    *   Tính năng thay đổi màu sắc sẽ được đề cập trong bài học tiếp theo.
