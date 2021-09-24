import {counterReducer} from '../../reducers/Counter/reducer';

const defaultState = {
    count:10,
  }


let Store = { 

        _callbacks : [],
        _state:defaultState,

    getState(){
        return this._state
    },
    dispatch(action){
        this._state = counterReducer(this._state,action);
        this._callbacks.forEach(callback => callback());
    },
    subscribe(callback){
        this._callbacks.push(callback);
        return () => this._callbacks=this._callbacks.filter(cb=>cb!==callback);
    },
}


export default Store;



