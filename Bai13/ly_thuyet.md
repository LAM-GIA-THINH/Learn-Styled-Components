*   **Sử dụng "&" để lồng ghép style:** Để tạo style khi hover hoặc style cho các phần tử con, ta sử dụng cú pháp `&`. Ví dụ, `&:hover` để định nghĩa style khi hover.
*   **Style hover:** Trong ví dụ, khi hover lên styled button, màu nền sẽ chuyển thành xám bằng cách sử dụng `&:hover { background-color: gray; }`.
*   **Style cho phần tử con:** Có thể áp dụng style cho các phần tử con của styled component bằng cách chọn class name của chúng. Ví dụ, `.subtext` để chọn các phần tử có class là "subtext" bên trong styled button và định nghĩa style cho chúng.
*  **Chỉ áp dụng style trong phạm vi:** Các style được định nghĩa theo cách này chỉ áp dụng cho các phần tử nằm trong styled component. Nếu có phần tử khác có cùng class name nhưng nằm ngoài styled component thì style đó sẽ không ảnh hưởng đến chúng.
*   **Ví dụ với icon:** Tương tự, ta có thể thay đổi background color của icon thành màu xám khi hover bằng cách sử dụng `&:hover { background-color: gray; }` trong styled icon.
*   **Tính linh hoạt:** Việc lồng ghép style giúp tạo ra các style một cách có cấu trúc và dễ quản lý, cho phép áp dụng các style khác nhau dựa trên trạng thái tương tác (ví dụ: hover) hoặc vị trí của phần tử trong component.

Tóm lại, việc sử dụng `&` để lồng ghép style giúp tạo ra các style một cách có cấu trúc và dễ quản lý. Ta có thể định nghĩa style khi hover, style cho các phần tử con, và các style này chỉ áp dụng trong phạm vi của styled component.
