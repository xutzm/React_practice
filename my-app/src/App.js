
  import React from 'react';

import './App.css';






//actions
import { actions } from './actions/Counter/actions';
//store
import {createStore} from './store/Counter/reduxFuncStore'
//reducer
import {counterReducer} from './reducers/Counter/reducer'

//init store
const store = createStore(counterReducer);






class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = store.state;
    this.incrementActionCreator=this.incrementActionCreator.bind(this);
    this.decrementActionCreator=this.decrementActionCreator.bind(this);
    this.resetActionCreator=this.resetActionCreator.bind(this);
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
    const count = store.getState().count;
    return(
      <div className="App">
      <div className="counter">
        <h2>{count}</h2>
        <button onClick={this.incrementActionCreator}>Up</button>
        <button onClick={this.decrementActionCreator}>Down</button>
        <button onClick={this.resetActionCreator}>Reset</button>
      </div>
      </div>
    )
  }
}






export default App;
