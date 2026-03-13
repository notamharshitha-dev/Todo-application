import React from "react";
import C from "./c";
function B(props){
    return <div> 
        <h1>Component B </h1>
        <C n={props.n} />
    </div>
}
export default B