import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Title = styled.h1`
    color: #aac9f0;
`

const Section = styled.div`
    background-color: #f0d1aa;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #f0aeaa;
    border-radius: 15px;    
`

const Button = styled.button`
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
`

const Content = () => {
    return (
        <Section>
            <Title>💅 Section</Title>
            <Button>Click me</Button>
            <Button>Click me</Button>
        </Section>
    )
}

export default Content

//Thử thách nhỏ
// Trong thử thách nhỏ này, tôi muốn bạn giúp tôi thực hiện phần tiếp theo bằng cách
// thêm hai nút màu trắng trơn có dòng chữ 'Click me' bên dưới từ
// Section. Vui lòng sử dụng phương pháp chúng ta đã học hôm nay.