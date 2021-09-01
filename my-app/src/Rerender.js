import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost} from './components/Redux/State';

export let rerenderAll = (State)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App paramArr={State.paramArr} addPost={addPost}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }