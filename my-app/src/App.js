
  import React, {  useState, useEffect } from 'react';

import './App.css';

import {BrowserRouter,Route} from "react-router-dom";

//struct
import Header from './components/Header/Header';



//pages
import IndexPage from './components/IndexPage';
import InputTextPage from './components/InputTextPage';





//actions
import { actions } from './actions/Counter/actions';

//reducers
import {counerReducer} from './reducers/Counter/reducer'

//store
import {Store} from './store/Counter/store'




function App() {

  useEffect(() => {
console.log('useEFF');
  });


const store = new Store(counerReducer);

const [count, setCount] = useState(5);

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
      <h2>{store.state.count}</h2>
        <button onClick={incrementActionCreate}>Up</button>
        <button onClick={decrementActionCreate}>Downd</button>
        <button onClick={resetActionCreate}>Reset</button>
      </div>

      <p>ХУК Вы кликнули {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Кликни меня!
        </button>
    </div>
    <Route path="/IndexPage" component={IndexPage}/>
    <Route path="/InputTextPage" component={InputTextPage}/>
    </BrowserRouter>
  );
}

export default App;
