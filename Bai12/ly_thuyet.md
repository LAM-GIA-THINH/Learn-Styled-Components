*   **Mục tiêu**: Bài học này tập trung vào việc thay đổi màu sắc của thanh tiến trình (progress bar) dựa trên giá trị tiến trình.
*   **Phương pháp**: Sử dụng các câu lệnh `if else` để gán màu sắc khác nhau tùy thuộc vào giá trị phần trăm của thanh tiến trình.
*   **Xử lý chuỗi phần trăm**:
    *   Giá trị tiến trình ban đầu là một chuỗi (string) có chứa ký tự phần trăm (ví dụ: "80%").
    *   Để thực hiện so sánh số học (greater than, less than), cần phải chuyển đổi chuỗi này thành số.
    *   Hàm `slice` được sử dụng để loại bỏ ký tự phần trăm, tạo ra một chuỗi chỉ chứa số (ví dụ: "80").
    *   Hàm `parseInt` được sử dụng để chuyển đổi chuỗi số thành số nguyên (integer), cho phép so sánh số học.
*   **Gán màu**:
    *   Các màu sắc khác nhau được gán cho thanh tiến trình dựa trên giá trị số nguyên của tiến trình.
    *   Ví dụ:
        *   Nếu tiến trình lớn hơn hoặc bằng 80, màu đỏ.
        *   Nếu tiến trình lớn hơn hoặc bằng 60, màu cam.
        *   Nếu tiến trình lớn hơn hoặc bằng 40, màu vàng.
        *   Nếu không, màu xanh lá cây.
*  **Thay đổi màu sắc**: Màu sắc có thể sẽ được thay đổi trong bài học tiếp theo.
*   **Mục tiêu tiếp theo**: Hiển thị ngày dựa trên ngày hiện tại trên bộ theo dõi tiến trình (progress tracker) sẽ được thực hiện trong các bài học tiếp theo.
