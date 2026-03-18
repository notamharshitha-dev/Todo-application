import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import todolistReducer  from "./todolistReducer";
var store=createStore(combineReducers(
    {
        counterR:counterReducer,  
        todolistR:todolistReducer
    }
))
export default store