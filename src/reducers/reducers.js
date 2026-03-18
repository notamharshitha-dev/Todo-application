

export  function todoReducer(state,action){
    
    if(action.type=='add'){
        let temp={todo:action.payload,status:false,flag:0}
        return {todos:[...state.todos,temp]}
    }
    if(action.type=='del'){
        let temp=[...state.todos];
        temp.splice(action.payload,1)
        return {todos:[...temp]}
    }
    if(action.type==="done"){
        state.todos[action.payload].flag++
        if(state.todos[action.payload].flag%2==0){            
            state.todos[action.payload].status=false
        }
        else{
        state.todos[action.payload].status=true;
        }
        console.log(state.todos[action.payload])
        return { todos:[...state.todos] }
        
    }
}
export function counterReduce(state,action){
  if(action.type==='inc' ){
    return {c:state.c+1}
  }
  if(action.type==='dec'){
    return {c:state.c-1}
  }
  if(action.type==='reset'){
    return {c:0}
  }
}