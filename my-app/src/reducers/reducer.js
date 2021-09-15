let state = 0;

const incrementAction = {type:'increment',amount:4};
const decrementAction = {type:'decrement',amount:2};




function UpdateState(state,action){
    switch(action.type){
        case 'increment':
            return state+action.amount;
        case 'decrement':
            return state-action.amount;
        default:
            return state;
    }
}



class Store {
    constructor(UpdateState,state){
        this._updateState = UpdateState,
        this._state=state
    }
    getState(){
        return this._state
    }
    update(action){
        this._state = this._updateState(this._state,action)
    }
}

const store = new Store(UpdateState,state);

console.log(store);

store.update(incrementAction);

console.log(store);
console.log(store.getState());


state = UpdateState(state,incrementAction);

state = UpdateState(state,decrementAction);

console.log(state);