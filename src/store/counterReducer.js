import React from "react";
const initialState={c:0};
 function counterReducer(state=initialState,action){
    if(action.type==='inc'){
        return {c:state.c+1}
    }
    if(action.type==='dec'){
        return {c:state.c-1}
    }
    if(action.type=='reset'){
        return {c:0}
    }
    return state
}
export default counterReducer