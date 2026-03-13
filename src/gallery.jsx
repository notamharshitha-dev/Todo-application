import React from "react";
var ar=["https://tse4.mm.bing.net/th/id/OIP.oE9iyaUOMyD1t258ZbdeLAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://th.bing.com/th/id/OIP.R5sHK5qN0Ebe-Ktj_0qC5gHaKS?w=122&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://tse4.mm.bing.net/th/id/OIP.U6VNe8hKyuZMHqT2ecFEOAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
]
function Gal(){
    var [i,setI]=React.useState(0);
    function n(){
        if(i==ar.length-1){
            i=-1
        }
        else{
            setI(i+1)
        }
    }
    function p(){
        if(i===0){
            i=ar.length
        }
        else{
            setI(i-1)
        }
    }
    return <div className="border border-3 border-success p-3 m-3 bg-info  ">   
        <img src={ar[i]}  />
        <button onClick={()=>{n()}}>Next</button>
        <button onClick={()=>{p()}} >Prev</button>
    </div>
}
export default Gal