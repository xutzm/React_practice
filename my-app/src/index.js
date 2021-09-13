import reportWebVitals from './reportWebVitals';
import store from './components/Redux/Store';
// import store from './components/Redux/ReduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import {addPost} from './components/Redux/State';
// import {subscribe} from './components/Redux/State';

 const rerenderAll = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App postsArr={store.getState().postsPage.postsArr} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  }

rerenderAll(store.getState());
store.subscribe(rerenderAll);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
