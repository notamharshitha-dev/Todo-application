import React from "react";
import Resdisplay from "./resdisplay";
function Resdata(){
    var [p,setP]=React.useState([{}]);
    React.useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data.recipes)
            setP([...data.recipes])           
            console.log(p)
        })
    },[])
    return <div  >
        <ul className="border border-3  "  style={{display:"flex",flexWrap:"wrap"}} >
            {
                p.map((pr)=>{
                  return  <li  className="p-3 m-3 border border-3 rounded-5 " style={{listStyle:"none"  ,background:"lightPink" , width:"300px"}} >
                    
                    <Resdisplay prod={pr} />
                  </li>
                })
            }
        </ul>
    </div>
}
export default Resdata