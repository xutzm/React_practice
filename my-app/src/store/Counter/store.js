

export class Store { 
    constructor(UpdateState,state){
        this._updateState = UpdateState;
        this._state=state;
        this._callbacks = [];
    }
    get state(){
        return this._state
    }
    update(action){
        this._state = this._updateState(this._state,action);
        this._callbacks.forEach(callback => callback());
    }
    subscribe(callback){
        this._callbacks.push(callback);
        return () => this._callbacks=this._callbacks.filter(cb=>cb!==callback);
    }
}


// const store = new Store(UpdateState,initialState);

// console.log(store);



// const unsubscribe = store.subscribe(()=>console.log('subscribe1 = '+ store.state.count));
// store.subscribe(()=>console.log('subscribe2 = '+ store.state.count));
// store.update(actions.incrementAction);
// unsubscribe();
// store.update(actions.decrementAction);
// store.update(actions.decrementAction);



