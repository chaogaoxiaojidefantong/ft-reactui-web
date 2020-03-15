import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'zent/css/index.css';
import FtRouter from './router/';
import { Provider } from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import 'element-theme-default';
// const render=(Component:any)=>{
//     ReactDOM.render(
//           <Component />,
//       document.getElementById('root')
//     )
//    }
//    render(FtRouter);
ReactDOM.render(
  <FtRouter />,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();