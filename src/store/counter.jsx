import { connect } from "react-redux";
import React from "react";
function Counter(props){
    console.log(props)
    return <div> 
        <h1>counter: {props.c} </h1>
    <button onClick={()=>{ props.dispatch({type:'inc'}) }} >increment</button>
    <button onClick={()=>{ props.dispatch({type:"dec"}) }} >decrement</button>
    <button onClick={()=>{ props.dispatch({ type:'reset' }) }} >Reset</button>
    </div>
}
export default connect((store)=>{return store.counterR})(Counter)