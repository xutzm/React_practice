
  import React, {  useEffect } from 'react';

import './App.css';

import {BrowserRouter,Route} from "react-router-dom";

//struct
import Header from './components/Header/Header';



//pages
import IndexPage from './components/IndexPage';
import InputTextPage from './components/InputTextPage';





//actions
import { actions } from './actions/Counter/actions';

import store from './store/Counter/funcStore'






function App(props) {

  useEffect(() => {
    store.subscribe(()=>console.log('APP отрисован заново'))
  });




let incrementActionCreate = () => {
  store.dispatch(actions.incrementAction);
  console.log(store);
}


  let decrementActionCreate = () => {
    store.dispatch(actions.decrementAction);
    console.log(store);
  }

  let resetActionCreate = () => {
    store.dispatch(actions.resetAction);
    console.log(store);
  }

  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <div className="counter">
      <h2>{props.state.count}</h2> 
        <button onClick={incrementActionCreate}>Up</button>
        <button onClick={decrementActionCreate}>Downd</button>
        <button onClick={resetActionCreate}>Reset</button>
      </div>
    </div>
    <Route path="/IndexPage" component={IndexPage}/>
    <Route path="/InputTextPage" component={InputTextPage}/>
    </BrowserRouter>
  );
}

export default App;
