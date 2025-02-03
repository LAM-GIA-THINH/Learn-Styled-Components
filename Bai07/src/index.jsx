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
          <Section text='M'/>
          <Section text='T'/>
          <Section text='W'/>
          <Section text='T'/>
          <Section text='F'/>
          <Section text='S'/>
          <Section text='S'/>
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