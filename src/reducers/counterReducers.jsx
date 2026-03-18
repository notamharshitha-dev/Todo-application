import React from "react";
import { counterReduce } from "./reducers";
function CounterReducer(){
  var [state,dispatch]=React.useReducer(counterReduce,{c:0})
  return <div>
    <h1>Counter:{state.c} </h1>
    <button onClick={()=>{ dispatch({type:"inc"}) }} >Increment</button>
    <button onClick={()=>{ dispatch({type:"dec"}) }} >Decrement</button>
    <button onClick={()=>{ dispatch({ type:'reset' }) }} >Reset</button>
  </div>
}
export default CounterReducer