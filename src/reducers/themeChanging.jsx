
import React from "react";
import Todolist from "./todoReducer";
import CounterReducer from "./counterReducers";
function themeReducer(state,action){
    if(action.type=="lightmode"){
        return {bg:"lightMode"}
    }
    if(action.type=='darkmode'){
        return {bg:'darkMode'}
    }
    if(action.type=='purple'){
        return {bg:'Purple'}
    }
}
function ThemeChanging(){
    var [state,dispatch]=React.useReducer(themeReducer,{bg:'lightMode'})
    return         <div className= { state.bg==="lightMode"?state.bg:state.bg  }    >
        <button  className="light" onClick={()=>{ dispatch({type:'lightmode'}) }} ></button>
        <button  className="dark" onClick={()=>{dispatch({type:'darkmode'})}} ></button>
          <button  className="purp" onClick={()=>{dispatch({type:'purple'})}} ></button><br/><br/><br/>
         <Todolist></Todolist><br/><br/><br/>
          <CounterReducer></CounterReducer>
    </div>
   
}
export default ThemeChanging