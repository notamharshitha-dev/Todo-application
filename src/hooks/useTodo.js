import React from "react";
export function useTodo(){
    var [arr,setA]=React.useState(["Goto kerdarnath","Clean my room"]);
    function add(data){
        setA((cv)=>{
            return [...cv,data]
        })
    }
    function del(i){
        console.log(i)
        setA((cv)=>{
             cv.splice(i,1)
             return [...cv]
        })
    }
    return [arr,add,del]

}