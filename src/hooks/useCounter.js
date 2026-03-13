import React from "react";
export function useCounter(){
    var [count,setCount]=React.useState(0);
    function inc(){
        setCount((cv)=>{
            return cv+1
        })
    }
    function dec(){
        setCount((cv)=>{
            return cv-1
        })
    }
    return [count,inc,dec]
}