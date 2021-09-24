
  import React from 'react';

import './App.css';






//actions
import { actions } from './actions/Counter/actions';
//store
import {Store} from './store/Counter/oopStore'
//reducer
import {counterReducer} from './reducers/Counter/reducer'

//init store
const store = new Store(counterReducer);






class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = store.state;
  }

  componentDidMount(){
    store.subscribe(()=>this.forceUpdate());
  }

  incrementActionCreator(){
    store.dispatch(actions.incrementAction);
  }
  
  decrementActionCreator(){
    store.dispatch(actions.decrementAction);
  }
  
  resetActionCreator(){
    store.dispatch(actions.resetAction);
  }

  render(){
    return(
      <div className="App">
      <div className="counter">
        <h2>{store.state.count}</h2>
        <button onClick={this.incrementActionCreator}>Up</button>
        <button onClick={this.decrementActionCreator}>Down</button>
        <button onClick={this.resetActionCreator}>Reset</button>
      </div>
      </div>
    )
  }
}






export default App;
