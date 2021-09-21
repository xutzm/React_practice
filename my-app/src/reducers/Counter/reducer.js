

//reducer
export function UpdateState(state,action){
    switch(action.type){
        case 'increment':
            return {count: state.count+action.amount};
        case 'decrement':
            return {count: state.count-action.amount};
        default:
            return state;
    }
}







