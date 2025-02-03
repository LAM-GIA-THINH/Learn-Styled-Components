*   **Tổ chức code**:
    *   Các component button và icon được chuyển vào các file riêng biệt trong thư mục `components` để tái sử dụng và tổ chức code tốt hơn.
    *   File `button.js` chứa logic của button component và file `icon.js` chứa logic của icon component.
    *   File `content.js` sử dụng các component button và icon đã được import.

*   **Props (Thuộc tính) trong React**:
    *   **Props** được dùng để truyền dữ liệu từ component cha xuống component con.
    *   Ví dụ: thuộc tính `text` được truyền vào button component để thay đổi nội dung chữ hiển thị trên button.
    *   Ví dụ: thuộc tính `primary` được truyền vào button component để thay đổi màu sắc của button.

*   **Styling với Props**:
    *   **Có thể truyền style thông qua props để component có các style khác nhau**.
    *   Sử dụng toán tử ternary (`condition ? valueIfTrue : valueIfFalse`) để quyết định màu sắc của button dựa trên props `primary`.
    *   Tương tự, màu của icon cũng được quyết định dựa trên props `primary`.

*   **Import và Export**:
    *   Sử dụng `import` để đưa các component vào file `content.js`.
    *   Sử dụng `export default` để có thể import component từ file khác.

*   **Component Chức Năng (Functional Component)**:
    *   Button và icon được xây dựng như là các functional component.
    *   Functional component là một hàm trả về JSX.

*   **Styled Components**:
    *   Sử dụng thư viện `styled-components` để tạo các component có style.
    *   `styled.div` được sử dụng để tạo các div có style.
    *   Các style như `background-color`, `width`, `height`, `border-radius`, `margin` được định nghĩa trong `styled.div`.

*   **Ví dụ cụ thể**:
    *   Button component có thể nhận `text` và `primary` props.
    *   Icon component có thể nhận `primary` prop.
    *   Component có thể được tái sử dụng nhiều lần và tùy chỉnh bằng cách truyền các props khác nhau.


