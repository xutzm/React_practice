let state = 0;

function UpdateState(state,action){
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
}

state = UpdateState(state,'decrement');
state = UpdateState(state,'decrement');
state = UpdateState(state,'decrement');
state = UpdateState(state,'increment');

console.log(state);