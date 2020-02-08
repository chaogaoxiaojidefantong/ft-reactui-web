import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'zent/css/index.css';
import FtRouter from './router/';
import { Provider } from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux';
const render=(Component:any)=>{
    ReactDOM.render(
          <Component />,
      document.getElementById('root')
    )
   }
   render(FtRouter);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
