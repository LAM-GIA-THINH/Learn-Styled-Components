import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'
import Section from './components/Section'

const Title = styled.h1`
  color: #b19cd9;
`

class Main extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>
        <div>
          <Section text='M' progress='100%'/>
          <Section text='T' progress='80%'/>
          <Section text='W' progress='70%'/>
          <Section text='T' progress='60%'/>
          <Section text='F' progress='40%'/>
          <Section text='S' progress='20%'/>
          <Section text='S' progress='10%'/>
        </div>
      </>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
//CẦN LÀM:
// mở rộng thành phần WeekdayTitle để tạo thành phần WeekendTitle
// sử dụng WeekendTitle nếu thuộc tính văn bản là 'S'