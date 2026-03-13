import React from "react";
import { useTodo } from "./useTodo";
function Todo(){
    var [td,add,del]=useTodo();
    var [t1,setT]=React.useState();
    return <div className="p-3 m-3" >
        <input type="text" id="i" onChange={(ev)=>{ setT(ev.target.value) }} />
        <button onClick={()=>{add(/*document.getElementById('i').value*/t1)}} >Add</button>
        <ul>
            {
                td.map((t,i)=>{
                    return <li> {t}
                    <button onClick={()=>{del(i)}} >delete</button>
                     </li>
                })
            }
        </ul>
    </div>
}
export default Todo