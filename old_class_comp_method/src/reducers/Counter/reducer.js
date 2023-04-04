const defaultState = {
    count:10,
  }

//reducer
export function counterReducer(state=defaultState,action){
    switch(action.type){
        case 'increment':
            return {count: state.count+action.payLoad};
        case 'decrement':
            return {count: state.count-action.payLoad};
        case 'reset':
            return {count: action.payLoad};
        default:
            return state;
    }
}







