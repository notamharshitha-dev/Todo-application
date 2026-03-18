import React from "react";
import { connect } from "react-redux";
function Todolist(props){
    console.log(props)
    var [ntd,setNtd]=React.useState("");
    return <div>
        <input type="text" onChange={(ev)=>{setNtd(ev.target.value)}} />
        <button onClick={()=>{ props.dispatch({ type:'add',payload:ntd }) }}  >Add</button>
        <ul>
            {
                props.todos.map((t,i)=>{
                    return <li> {t}
                    <button onClick={()=>{ props.dispatch({ type:'del',payload:i }) }} >delete</button>
                     </li>
                })
            }
        </ul>
    </div>
}
export default connect((store)=>{return store.todolistR})(Todolist)