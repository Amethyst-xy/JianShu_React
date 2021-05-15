import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './style';
import {GlobalFont} from './static/iconFont/iconfont';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <GlobalFont/>
    <App/>
  </Fragment>
,document.getElementById('root'));

