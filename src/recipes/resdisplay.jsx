import React from "react";
function Resdisplay(props){
    return <div  >
        <h3> {props.prod.name} </h3>
        <img src={props.prod.image} alt=""  style={{height:"200px"}} />
    </div>
}
export default Resdisplay