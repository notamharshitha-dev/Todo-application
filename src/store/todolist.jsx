import React from "react";
import { connect } from "react-redux";
import { addTodoAction,delTodoAction } from "./action";
function Todolist(props){
    console.log(props)
    var [ntd,setNtd]=React.useState("");
    return <div>
        <input type="text" onChange={(ev)=>{setNtd(ev.target.value)}} />
        <button onClick={()=>{ props.a(ntd) }}  >Add</button>
        <ul>
            {
                props.todos.map((t,i)=>{
                    return <li> {t}
                    <button onClick={()=>{ props.d(i) }} >delete</button>
                     </li>
                })
            }
        </ul>
    </div>
}
function mapStateToProps(state){
    return state.todolistR
}
function mapDispatchToProps(dispatch){
    return {
        a:(ntd)=>{
            dispatch(addTodoAction(ntd))
        },
        d:(i)=>{
            dispatch(delTodoAction(i))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)
//export default connect((store)=>{return store.todolistR})(Todolist)