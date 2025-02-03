Gợi ý:  

1. Trong này, chúng ta cần lưu trữ một hằng số (`const`) dưới dạng boolean. Ví dụ, nếu một điều kiện nào đó là `true`, chúng ta cần bắt giá trị đó và lưu lại để sử dụng sau này.  

Ví dụ:  

```javascript
const animals = ['cat', 'dog', 'parrot'];

const hasCat = animals.includes('cat'); // hasCat sẽ là 'true' trong trường hợp này.
```

Chúng ta có thể làm điều này theo nhiều cách khác nhau. Một ví dụ khác:  

```javascript
const isFriday = firstLetter === 'F'; // isFriday sẽ là 'true' nếu firstLetter là 'F'.
```

---

2. Chúng ta có thể sử dụng boolean để hiển thị các Component một cách có điều kiện. Ví dụ, ta có thể hiển thị một Component chỉ khi điều kiện đúng (`true`):  

```javascript
class Main extends React.Component {

  const isLoggedIn = true;
    
  render() {
    return (
      <>
        <StyledSection>
          {isLoggedIn && <BankDetails>My Secret Bank Details here.</BankDetails>}
        </StyledSection>
      </>
    );
  }
}
```

Trong ví dụ trên, người dùng chỉ nhìn thấy Component `<BankDetails/>` nếu `isLoggedIn` là `true`. Đừng quên sử dụng toán tử `&&` để điều này hoạt động.