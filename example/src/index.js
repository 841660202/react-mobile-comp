// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';




// ReactDOM.render(<App />,document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
// 路由使用 history模式
import { BrowserRouter } from 'react-router-dom';
// 路由采用 hash模式
// import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
