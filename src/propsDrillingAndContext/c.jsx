import React,{useContext} from "react";
import { myContext } from "./mycontext";
function C(props){
   
    return <h1>Component c {props.n} </h1>
}

export default C