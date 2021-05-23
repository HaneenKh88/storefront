import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Mystore from './Store/index';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);