import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store/Store';

// EVA US and Russia API
// https://data.nasa.gov/resource/eva.json

// Fireball and Bolide Reports 
// https://data.nasa.gov/resource/2af2-m89m.json

// NASA Facilities
// https://data.nasa.gov/resource/9g7e-7hzz.json

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
