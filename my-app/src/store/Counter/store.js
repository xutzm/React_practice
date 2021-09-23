const defaultState = {
    count:0,
  }


export class Store { 
    constructor(counerReducer,state=defaultState){
        this._reducer = counerReducer;
        this._state=state;
        this._callbacks = [];
    }
    get state(){
        return this._state
    }
    dispatch(action){
        this._state = this._reducer(this._state,action);
        this._callbacks.forEach(callback => callback());
    }
    subscribe(callback){
        this._callbacks.push(callback);
        return () => this._callbacks=this._callbacks.filter(cb=>cb!==callback);
    }
}






