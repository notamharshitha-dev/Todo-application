import React from "react";
import { useCounter } from "./useCounter";
function Count(){
    var [c,inc,dec]=useCounter()
    return <div className="m-3 p-3" >
        <h1>Counter: {c} </h1>
        <button onClick={()=>{inc()}} >Increment</button>
        <button onClick={()=>{dec()}} >Decrement</button>
    </div>
}
export default Count