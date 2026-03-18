
import React from "react";
import { Link ,Outlet} from "react-router-dom";
function Prodr(){
   var [p,setP]=React.useState([])
   React.useEffect(()=>{
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((data)=>{
        
       setP([...data.products])
    })
   },[])
    return <div>
       <h1>products</h1>
       
       <ul>
        {
            p.map((prod,id)=>{
                
              return <Link to={`/productsDis/:${id}`}><li> {prod.title} </li></Link>
            })
        }
        
       </ul>
   <Outlet/>
    </div>
  
}
export default Prodr