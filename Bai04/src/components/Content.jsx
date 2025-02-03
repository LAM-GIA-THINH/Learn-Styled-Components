import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const Title = styled.h1`
    color: #aaecf0;
`
const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
`
const Content = () => {
    return (
        <Section>
            <Title>💅🏻 Section</Title>
            <Button primary text="me first"/>
            <Button text="me second"/>
            <Icon primary/>
            <Icon/>
        </Section>
    )
}

export default Content

//Thử thách nhỏ
// Tương tự như cách chúng ta thêm prop chính và prop phụ vào hai Button, bạn có thể
// thêm hai vòng tròn hoặc ‘Biểu tượng’ bên dưới Button, nhưng biến chúng thành một
//functional component mà chúng ta nhập vào Content Component. 
//Icon chính có màu Xanh lục và Icon phụ có màu Vàng.

