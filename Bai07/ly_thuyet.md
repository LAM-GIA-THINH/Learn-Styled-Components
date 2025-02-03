*   **Mục tiêu của bài tập:** Mở rộng kiểu dáng của component tiêu đề ngày trong tuần để tạo ra component tiêu đề ngày cuối tuần.
*   **Điều kiện:** Hiển thị component tiêu đề ngày cuối tuần nếu prop `text` là "S" (đại diện cho Saturday hoặc Sunday).
*   **Cách thực hiện:**
    *   **Tạo component `weekendTitle`:** Bằng cách mở rộng (extend) kiểu dáng của `weekdayTitle` và thay đổi màu nền thành màu xám nhạt.
    *   **Sử dụng prop `text`:** Kiểm tra xem prop `text` có bằng "S" hay không. Nếu đúng thì lưu vào biến `isWeekend`.
    *   **Hiển thị có điều kiện:** Sử dụng toán tử `&&` (and) để quyết định hiển thị `weekdayTitle` nếu không phải cuối tuần (`!isWeekend`) hoặc `weekendTitle` nếu là cuối tuần (`isWeekend`).
    *   **Bo tròn góc:** Thêm `border-radius` để bo tròn góc dưới bên trái của các thanh tiến trình.
*   **Kết quả:** Đã tạo thành công component `weekendTitle` và hiển thị nó một cách có điều kiện dựa trên prop `text`.
