let state = 0;

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

const incrementAction = {type:'increment',amount:4};
const decrementAction = {type:'decrement',amount:2};

state = UpdateState(state,incrementAction);

state = UpdateState(state,decrementAction);

console.log(state);