*   **Styled-components** là một thư viện giúp tăng cường CSS cho việc tạo kiểu (styling) các thành phần React.
*   **Mục đích chính**: Cho phép thêm kiểu trực tiếp vào các thành phần trong cùng file JavaScript.
*   **Lợi ích chính:**
    *   **Giảm bớt khó khăn cho lập trình viên**: Không cần tìm file CSS riêng biệt.
    *   **Tối ưu trải nghiệm người dùng**: Chỉ tải các CSS cần thiết cho thành phần được hiển thị.
    *   **Tự động tạo CSS quan trọng**: Theo dõi thành phần nào được render và chỉ inject CSS của các thành phần đó.
    *   **Kết hợp với chia nhỏ code (code splitting)**: Giúp người dùng tải ít code nhất.
    *   **Không có lỗi tên class**: Tạo tên class duy nhất, tránh trùng lặp, chồng chéo hoặc sai chính tả.
    *   **Dễ dàng xóa CSS**: Mỗi kiểu được gắn với một thành phần cụ thể, khi xóa thành phần, kiểu cũng bị xóa theo.
    *   **Kiểu động đơn giản**: Dễ dàng điều chỉnh kiểu dựa trên props hoặc theme, không cần quản lý nhiều class.
    *   **Tự động thêm vendor prefix**: Bạn có thể viết CSS theo chuẩn hiện tại và để styled-components xử lý phần còn lại.
*   **Cài đặt**:
    *   npm install --save styled-components

Tóm lại, styled-components giúp việc quản lý và áp dụng CSS trong React trở nên dễ dàng và hiệu quả hơn, đồng thời tối ưu hóa trải nghiệm người dùng.
