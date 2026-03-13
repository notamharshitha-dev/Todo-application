import React, { useEffect } from "react";
function Distodo(props){
    React.useEffect(()=>{
        console.log(props.dt)
    })
    useEffect(()=>{
        return ()=>{
            console.log(props.dt+"deleted")
        }
    },[])
    console.log(props)
    return <div>
        <li> {props.dt}
            <button onClick={()=>{props.d(props.index)}} >delete</button>
        </li>
    </div>
}
export default React.memo(Distodo)