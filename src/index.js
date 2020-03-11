import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.scss';

import App from './js/App';

const render = (_App) =>{
  ReactDOM.render(
    <_App />,
    document.getElementById('root')
  );
};

if(module.hot){
  module.hot.accept('./js/App', ()=>{
    const NextApp = require('./js/App').default;
    render(NextApp);
  });
}

render(App);
