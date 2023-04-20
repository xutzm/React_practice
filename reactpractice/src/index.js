"use client";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ErrorBoundary } from "react-error-boundary";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ErrorBoundary fallback={<div>Error ErrorBoundary!</div>} onReset={() => {
    // reset the state of your app so the error doesn't happen again
  }}>
{/* <React.StrictMode> */}
    <App />
{/* </React.StrictMode> */}
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
