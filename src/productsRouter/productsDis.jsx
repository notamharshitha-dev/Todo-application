import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
function Disp(){  
     
  var x=useParams()
  console.log(x.id)
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${x.id}`).then(res=>{
        return res.json()
    }).then(data=>console.log(data))
  },[x.id])
    return <h1> hello </h1>
}
export default  Disp