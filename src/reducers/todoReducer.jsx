import React from "react";
import { todoReducer } from "./reducers";

function Todolist(){
   var [state,dispatch]=React.useReducer(todoReducer,{todos:[
    {
        todo:"goto kerdarnath",
        status:false,
        flag:0
    },
    {
        todo:"clean house",
        status:false,
        flag:0
    }
   ]})
   function filterTodo(obj){
    if(cat==='all'){
        return true
    }
    if(cat==='completed'&& obj.status==true){
        return true
    }
    if(cat=="incompleted"&& obj.status==false){
        return true
    }
   }
   var [t,setT]=React.useState("")
   var [cat,setCat]=React.useState('all')
    return <div>
    <input type="text" onChange={(ev)=>{setT(ev.target.value)}} />
    <button onClick={()=>{
        dispatch({type:"add",payload:t})
    }} >add</button><br/>
    <input type="radio" name="cat" value="all"  onChange={(ev)=>{setCat(ev.target.value)}} />all
     <input type="radio" name="cat"   value="completed" onChange={(ev)=>{setCat(ev.target.value)}}  />completed
      <input type="radio" name="cat" value="incompleted" onChange={(ev)=>{setCat(ev.target.value)}} />incompleted
      <h4> Todos:{cat} </h4>
    <ul>
        {
            state.todos.filter(filterTodo).map((t,i)=>{
                return   <li  className={t.status?"text-decoration-line-through":"text-decoration-none" }> {t.todo} 
                <button onClick={()=>{ dispatch({ type:"del" ,payload:i})}}  >delete</button>
                <button onClick={()=>{   dispatch({type:"done",payload:i  }) }} > {t.status?"undone":"done"} </button>
                </li>
            })
        }
    </ul>
    </div>
}
export default Todolist