*   **Mở rộng kiểu dáng (Extending styles)**: Khi bạn có một component mà bạn thích và muốn thay đổi một chút mà không cần viết lại toàn bộ component, bạn có thể mở rộng kiểu dáng của nó.
*   **Ví dụ mở rộng từ component "title"**:
    *   Component "subtitle" được tạo ra bằng cách mở rộng component "title". "subtitle" kế thừa tất cả các thuộc tính của "title", nhưng có thể ghi đè (override) một số thuộc tính, chẳng hạn như kích thước font chữ.
    *   Cụ thể, component "subtitle" được tạo ra bằng cú pháp `styled(title)` và sau đó ghi đè font size thành 12px.
*   **Mở rộng component "subtitle" để tạo "paragraph title"**:
    *   Component "paragraph title" được tạo ra bằng cách mở rộng component "subtitle",  vốn đã là một sự mở rộng của "title". Điều này có nghĩa là "paragraph title" kế thừa các thuộc tính của "title" và "subtitle".
    *   "paragraph title" ghi đè thuộc tính màu sắc thành màu xám.
*  **Cú pháp**: Để mở rộng một component, sử dụng cú pháp `styled(ComponentToExtend)`. Sau đó, bạn có thể thêm các thuộc tính CSS mới hoặc ghi đè các thuộc tính hiện có trong dấu backtick ``.
*   **Mục đích**: Việc mở rộng kiểu dáng giúp tái sử dụng code, tránh viết lại code không cần thiết, và duy trì tính nhất quán trong dự án.

Tóm lại, nguồn tài liệu mô tả cách sử dụng `styled-components` để mở rộng kiểu dáng của các component, giúp tạo ra các component mới dựa trên các component đã có một cách dễ dàng và hiệu quả.
