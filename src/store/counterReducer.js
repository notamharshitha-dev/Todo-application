import React from "react";
import { DEC, INC, RES } from "./actionTypes";
const initialState={c:0};
 function counterReducer(state=initialState,action){
    if(action.type===INC){
        return {c:state.c+1}
    }
    if(action.type===DEC){
        return {c:state.c-1}
    }
    if(action.type==RES){
        return {c:0}
    }
    return state
}
export default counterReducer