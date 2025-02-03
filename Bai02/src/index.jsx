import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './components/Content'

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Hello world!</h1>
        <Content />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);