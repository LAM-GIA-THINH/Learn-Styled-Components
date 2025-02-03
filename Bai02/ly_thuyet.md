*   **Cài đặt ban đầu:**
    *   File `index.js` render component tại root, ban đầu có một thẻ `h1` hiển thị "hello world".
    *   Một component `content` đã được tạo trước và sẽ được sử dụng
    *   Component `content` được import vào `index.js` để hiển thị.
*   **Mục đích của styled-components:**
    *   Thay vì sử dụng CSS riêng biệt, styled-components cho phép **gộp style trực tiếp vào component**, giúp quản lý code gọn gàng hơn.
    *   Khi xóa component, style đi kèm cũng sẽ bị xóa.
    *   Style sẽ được tải cùng với component khi server trả về trình duyệt.
*   **Các bước sử dụng styled-components:**
    *   **Import `styled` từ `styled-components`**.
    *   **Tạo một component styled bằng cách sử dụng `styled.<tag_name>`** (ví dụ: `styled.h1`, `styled.div`, `styled.button`).
    *   **Style được viết bên trong cặp backtick (``)** sau `styled.<tag_name>`.
*   **Ví dụ:**
    *   **Tạo component `title`:** Thay thế thẻ `h1` bằng component `title` được style bằng styled-components, với màu chữ được đặt.
    *   **Tạo component `section`:** Thay thế thẻ `div` có class name "section" bằng component `section` được style, di chuyển style từ CSS cũ vào đây.
*   **Thử thách:**
    *   Thêm hai nút "click me" màu trắng dưới chữ "section" bằng cách sử dụng styled-components.
*   **Giải pháp thử thách:**
    *   **Tạo component `button`:** Style cho thẻ `button` với màu nền trắng, padding, border radius.
    *   Sử dụng `flex-direction: column` và `justify-content: center` để căn chỉnh các nút.

Tóm lại, hướng dẫn cách cài đặt và sử dụng styled-components để tạo các component có style đi kèm, giúp quản lý code và style một cách hiệu quả hơn.
