import React from "react";
import Distodo from "./displaytodo";
function Todolist(){
    var [t,setT]=React.useState([]);
    var [n,setN]=React.useState();
    const r1=React.useRef();
    function add(){
        setT((cv)=>{
            cv.push(n);;
            return [...cv]
        })
    }
   const de=React.useCallback( 
    function del(i){
        setT((cv,i)=>{
            cv.splice(i,1);
            return [...cv]
        })
    },[])
    const obj=React.useMemo(()=>{
      return  {
        fn:"harshitha",
        ln:"notam"
    }
    },[])
    React.useEffect(()=>{
        r1.current.focus()
    },[])
    return <div className="m-3 p-3" > 
        <input type="text" onChange={(ev)=>{setN(ev.target.value)}} ref={r1} />
        <button onClick={()=>{add()}} >Add</button>
        <ul>
            {
                t.map((td,i)=>{
                    return <Distodo dt={td}  d={de} o={obj} index={i} key={td} />
                })
            }
        </ul>
    </div>
}
export default Todolist