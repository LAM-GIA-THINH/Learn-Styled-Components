import React from 'react'
import ReactDOM from 'react-dom'
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

const SubTitle = styled(Title)`
    font-size: 12px;
    align-self: center;
`;

const ParagraphTitle = styled(SubTitle)`
    color: grey;
`;

const ReversedTitle = props =>
    <ParagraphTitle {...props} children={props.children.split('').reverse()} />

const Content = () => {
    return (
        <Section>
            <Title>💅🏻 Section</Title>
            <SubTitle>I am a subtitle</SubTitle>
            <Button text='me first' primary/>
            <Button text='me second'/>
            <Icon border='solid 3px' statusColor={'ready'}/>
            <Icon status={'in-progress'}/>
            <ParagraphTitle as={ReversedTitle} >I am a paragraph title</ParagraphTitle>
        </Section>
    )
}

export default Content

//Thử thách nhỏ
//dựa trên câu lệnh if else cho trạng thái, bạn có thể thêm câu lệnh if else của riêng mình không
//điều đó sẽ hiển thị nút màu xanh lá cây giống như đèn giao thông, dựa trên một prop mà chúng ta truyền qua
//? Vui lòng xóa prop 'chính' kiểm soát background-color để
//thực hiện việc này.
