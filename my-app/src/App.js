
  import React from 'react';

import './App.css';






//actions
import { getActions } from './actions/Counter/actions';
// import { actions } from './actions/Counter/actions';
//store
import {createStore} from 'redux'
//reducer
import {counterReducer} from './reducers/Counter/reducer'

//init store
const store = createStore(counterReducer);






class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = store.state;
    this.amount = React.createRef();

    this.incrementActionCreator=this.incrementActionCreator.bind(this);
    this.decrementActionCreator=this.decrementActionCreator.bind(this);
    this.resetActionCreator=this.resetActionCreator.bind(this);
    this.getAmount=this.getAmount.bind(this);
  }

  componentDidMount(){
    store.subscribe(()=>this.forceUpdate());
  }

  getAmount(){
    let value = parseInt(this.amount.current.value || 1)
    return value;
  }


  incrementActionCreator(){
    store.dispatch(getActions(this.getAmount()).incrementAction);
  }
  
  decrementActionCreator(){
    store.dispatch(getActions(this.getAmount()).decrementAction);
  }
  
  resetActionCreator(){
    store.dispatch(getActions().resetAction);
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
        На число <input type="text" ref={this.amount} defaultValue="0"></input>
      </div>
      </div>
    )
  }
}






export default App;
