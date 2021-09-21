
import './App.css';

import {BrowserRouter,Route} from "react-router-dom";

//struct
import Header from './components/Header/Header';



//pages
import IndexPage from './components/IndexPage';
import InputTextPage from './components/InputTextPage';


import { actions } from './actions/Counter/actions';
import {UpdateState} from './reducers/Counter/reducer'

import {Store} from './store/Counter/store'

const initialState = {
  count:0,
}



const store = new Store(UpdateState,initialState);
store.update(actions.incrementAction);
console.log(store);


function App() {



  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <div className="counter">
      <h2>{initialState.count}</h2>
        <button>Up</button>
        <button>Downd</button>
        <button>Reset</button>
      </div>
    </div>
    <Route path="/IndexPage" component={IndexPage}/>
    <Route path="/InputTextPage" component={InputTextPage}/>
    </BrowserRouter>
  );
}

export default App;
