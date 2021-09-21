
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
import {UpdateState} from './reducers/Counter/reducer'

//store
import {Store} from './store/Counter/store'

//start state
const initialState = {
  count:0,
}



const store = new Store(UpdateState,initialState);

function App() {

  let incrementActionCreate = () => {
    store.update(actions.incrementAction);
    console.log(store);
  }

  let decrementActionCreate = () => {
    store.update(actions.decrementAction);
    console.log(store);
  }

  let resetActionCreate = () => {
    store.update(actions.resetAction);
    console.log(store);
  }

  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <div className="counter">
      <h2>{initialState.count}</h2>
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
