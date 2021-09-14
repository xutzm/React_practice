import reportWebVitals from './reportWebVitals';

import store from './components/Redux/Store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


 const rerenderAll = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  }

rerenderAll(store.getState());
store.subscribe(()=>{
  let state = store.getState();
  rerenderAll(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
