import React from "react";
import  {myContext}  from "./mycontext";

function C(){
    var {fn,ln,name,hello}=React.useContext(myContext)
    //console.log(n)
    
    return <h1>This is component C and the name form the ancestor is {fn} {ln} {name} {hello() } </h1>
}
export default C