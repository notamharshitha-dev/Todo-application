import { ADD, DEL } from "./actionTypes";

const initialState={todos:['goto ketarnath','clean house']};
 function todolistReducer(state=initialState,action){
    if(action.type==ADD){
        return {todos:[...state.todos,action.payload]}
    }
    if(action.type==DEL){
        let temp=[...state.todos];
        temp.splice(action.payload,1);
        return {todos:[...temp]}
    }
    return state
}
export default todolistReducer