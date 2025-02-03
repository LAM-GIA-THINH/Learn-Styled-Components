import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const Title = styled.h1`
    color: #aaecf0;
`

const SubTitle = styled(Title)`
    font-size: 12px;
    align-self: center;
`

const ParagraphTitle = styled(SubTitle)`
    color: grey;
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
            <SubTitle>I am a subtitle</SubTitle>
            <Button text='me first' primary/>
            <Button text='me second'/>
            <Icon primary />
            <Icon />
            <ParagraphTitle>I am a paragraph</ParagraphTitle>
        </Section>
    )
}

export default Content

//Thử thách nhỏ
// Tương tự như cách chúng ta đã ghi đè lên kiểu của Title Component, tôi muốn
// bạn làm tương tự với thành phần Tiêu đề phụ và tạo một Tiêu đề đoạn văn
//màu xám. Đặt nó ở cuối Section.