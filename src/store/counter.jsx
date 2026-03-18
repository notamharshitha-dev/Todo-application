import { connect } from "react-redux";
import React from "react";
import { decAction, incAction, resetAction } from "./action";

function Counter(props){
    //console.log(props)
    return <div> 
        <h1>counter: {props.c} </h1>
    <button onClick={()=>{ props.i()}} >increment</button>
    <button onClick={()=>{ props.d() }} >decrement</button>
    <button onClick={()=>{ props.r() }} >Reset</button>
    </div>
}
function mapStateToProps(state){
    console.log(state)
   return state.counterR
}
function mapDispatchToProps(dispatch){
    console.log(dispatch)
    return { i:()=>{
        dispatch(incAction())
    },
        d:()=>{
            dispatch(decAction())
        },
        r:()=>{
            dispatch(resetAction())
        }
    
}
}
export default connect(mapStateToProps,mapDispatchToProps )(Counter)
//export default connect((store)=>{return store.counterR})(Counter)