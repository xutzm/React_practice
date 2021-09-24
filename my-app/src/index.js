import reportWebVitals from './reportWebVitals';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import store from './store/Counter/funcStore'



 const rerenderAll = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  }

  store.subscribe(rerenderAll)

  rerenderAll(store.getState());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
