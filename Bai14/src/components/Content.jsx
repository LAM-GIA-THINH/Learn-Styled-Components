import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Title = styled.h1`
    color: #aaecf0;
    animation: 2s ${rotate} linear infinite;
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
            <Icon border='solid 3px' statusColor={'steady'} />
            <Icon status='in-progress'/>
            <ParagraphTitle as={ReversedTitle} >I am a paragraph title</ParagraphTitle>
        </Section>
    )
}

export default Content

//Thử thách nhỏ
//Bạn có thể làm cho Tiêu đề phần xoay 360 độ trên trang không?
