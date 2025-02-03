*   **Sử dụng `if else` trong styling**: Bài học này tập trung vào việc sử dụng các câu lệnh `if else` để áp dụng các kiểu dáng khác nhau cho các thành phần (components) dựa trên các prop (thuộc tính) được truyền vào.
*   **Prop `status` cho vị trí icon**: Một prop `status` được sử dụng để điều khiển vị trí của một icon. Prop này có thể nhận ba giá trị: "in progress", "done", hoặc giá trị mặc định (nothing). Dựa trên giá trị của `status`, icon sẽ được định vị ở các vị trí khác nhau bằng cách thay đổi `margin-left`.
    *   "in progress": `margin-left` là 70px.
    *   "done": `margin-left` là 140px.
    *   Mặc định (hoặc giá trị khác): `margin-left` là 5px.
*   **Mini challenge: Điều khiển màu sắc nút bằng `if else`**: Người học được giao một thử thách nhỏ để thay đổi màu nền của một nút (icon) dựa trên một prop mới gọi là `statusColor`.  Prop `primary` ban đầu được sử dụng để điều khiển màu nền đã bị loại bỏ.
*   **Prop `statusColor` cho màu icon**: Prop `statusColor` được sử dụng để thay đổi màu sắc của icon, tương tự như đèn giao thông. Có ba trạng thái được định nghĩa:
    *   "ready": màu vàng.
    *   "steady": màu cam.
    *   "go": màu xanh lá cây.
    *   Mặc định (hoặc giá trị khác): màu đỏ.
*   **Cấu trúc code**: Các câu lệnh `if else` được viết bên trong cú pháp JavaScript trong JSX để điều khiển các thuộc tính CSS, như `marginLeft` và `backgroundColor`. Prop được destructured và truyền vào các hàm để xử lý điều kiện.
*   **Ví dụ minh họa**: Các ví dụ được cung cấp về cách truyền các giá trị khác nhau vào props (`status`, `statusColor`) và kết quả là giao diện thay đổi như thế nào.

Tóm lại, bài học này minh họa cách sử dụng `if else` trong styling để tạo ra các giao diện linh hoạt dựa trên các props khác nhau. Hai ví dụ cụ thể là: di chuyển icon dựa trên `status` prop, và thay đổi màu sắc icon dựa trên `statusColor` prop.
