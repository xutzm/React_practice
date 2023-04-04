import {counterReducer} from '../../reducers/Counter/reducer';

const defaultState = {
    count:10,
  }


export function createStore(reducer,intialState=defaultState){
    let callbacks = [];
    let state = intialState;

const getState=()=>{
    return state
};
const dispatch=(action)=>{
    state = counterReducer(state,action);
    callbacks.forEach(callback => callback());
};
const subscribe=(callback)=>{
    callbacks.push(callback);
    return () => callbacks=callbacks.filter(cb=>cb!==callback);
};
return {getState,dispatch,subscribe};
}






