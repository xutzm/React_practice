
//actions
export const actions = {
    incrementAction : {type:'increment',payLoad:1},
    decrementAction : {type:'decrement',payLoad:1},
    resetAction : {type:'reset',payLoad:0}
}


export function getActions(payLoad=1){
return {
    incrementAction : {type:'increment',payLoad:payLoad},
    decrementAction : {type:'decrement',payLoad:payLoad},
    resetAction : {type:'reset',payLoad:0}
}
}



