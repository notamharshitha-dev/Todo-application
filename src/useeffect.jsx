import React from "react";
function Ue(){
    var [s,setS]=React.useState(0)
    React.useEffect(()=>{
        document.getElementById("h").innerText+="no dependency array"
    })
    React.useEffect(()=>{ 
        document.getElementById('h').innerText+="dependency array"
    },[])
    React.useEffect(()=>{document.getElementById('h').innerText+=" dependency array with var "

    },[s])
    
    return <div>
        <h1 id="h" >hello</h1>
        <button onClick={()=>{setS(s+1)}} >one more</button>
        </div>
}
export default Ue