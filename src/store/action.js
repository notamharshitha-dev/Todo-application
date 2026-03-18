import { ADD, DEC, DEL, INC, RES } from "./actionTypes"

export function incAction(){
    return {type:INC}
}
export function decAction(){
    return {type:DEC}
}
export function resetAction(){
    return {type:RES}
}
export function addTodoAction(ntd){
    return {type:ADD,payload:ntd}
}
export function delTodoAction(i){
    return {type:DEL,payload:i}
}