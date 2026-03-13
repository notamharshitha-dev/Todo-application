import React from "react";
  var ar=[]
function Todo(){
  
    var [a,setA]=React.useState(0)
    function add(){
      ar.push(document.getElementById("i").value) 
     setA(a+1)
    }
    return <div className="border border-3 border-success p-3 m-3 ">
        <input type="text" id="i" />
        <button onClick={()=>{add()}} >Addtodo</button>
        <ul>
            {
                ar.map((a)=>{
                    return <li>{a}</li>
                })
            }
        </ul>
    </div>
}
export default Todo