import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

ReactDOM.render(
  <React.StrictMode>
    <Row justify="center">
      <Col span={20}>
        <App />
      </Col>
    </Row>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
