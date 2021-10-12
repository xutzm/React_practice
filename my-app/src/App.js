
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
const store = createStore(counterReducer,JSON.parse(localStorage['redux-store']));
store.subscribe(()=>localStorage['redux-store'] = JSON.stringify(store.getState()));





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.amount = React.createRef();
    
    this.incrementActionCreator=this.incrementActionCreator.bind(this);
    this.decrementActionCreator=this.decrementActionCreator.bind(this);
    this.resetActionCreator=this.resetActionCreator.bind(this);
    this.getAmount=this.getAmount.bind(this);
  }

  // componentDidMount(){
  //   store.subscribe(()=>this.forceUpdate());
  // }

  getAmount(){
    let value = parseInt(this.amount.current.value || 1)
    return value;
  }


  incrementActionCreator(){
    
    this.setState(store.dispatch(getActions(this.getAmount()).incrementAction))
  }
  
  decrementActionCreator(){
    this.setState(store.dispatch(getActions(this.getAmount()).decrementAction))
  }
  
  resetActionCreator(){
    this.setState(store.dispatch(getActions().resetAction))
  }


  render(){
    // const count = store.getState().count;
    const count = JSON.parse(localStorage['redux-store']);
    console.log(this.state);
    return(
      <div className="App">
      <div className="counter">
        <h2>{count.count}</h2>
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
