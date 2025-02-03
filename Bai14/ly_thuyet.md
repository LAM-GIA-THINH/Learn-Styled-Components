*   **Nhập `keyframes`**: Để tạo animation, cần nhập `keyframes` từ `styled-components`.
*   **Định nghĩa animation với `keyframes`**:
    *   Sử dụng `keyframes` để định nghĩa các trạng thái của animation. Ví dụ, `const fadeIn = keyframes\``.
    *   Sử dụng cú pháp backticks (``) để viết code animation.
    *   Các trạng thái được xác định theo phần trăm, ví dụ, `0%` và `100%`. Ví dụ: ở `0%` opacity là 0 và ở `100%` opacity là 1.
*   **Sử dụng animation**:
    *   Để áp dụng animation, sử dụng thuộc tính `animation` trong CSS.
    *   Cú pháp: `animation: <thời gian> <tên animation> <kiểu easing>`. Ví dụ: `animation: 5s fadeIn ease-in;`.
    *   Có thể sử dụng các kiểu easing khác nhau để làm cho animation mượt mà hơn.
*   **Ví dụ animation `fadeIn`**:
    *   Animation này làm cho một phần tử xuất hiện dần từ opacity 0 đến 1 trong thời gian xác định.
*  **Ví dụ animation `rotate`**:
    *   Sử dụng `transform: rotate(0deg)` để bắt đầu ở 0 độ và `transform: rotate(360deg)` để xoay 360 độ.
    *   Có thể sử dụng `linear infinite` để animation xoay liên tục.
*   **Mini challenge**:
    *   Thử tạo animation xoay 360 độ cho tiêu đề trang.
    *   Sử dụng `from` và `to` để xác định trạng thái bắt đầu và kết thúc của animation.
*   **Kế thừa animation**: Các phần tử con có thể kế thừa animation từ phần tử cha.

Tóm lại, nguồn cung cấp hướng dẫn chi tiết về cách tạo animation đơn giản như fade in và rotate sử dụng `styled-components` và `keyframes`.
