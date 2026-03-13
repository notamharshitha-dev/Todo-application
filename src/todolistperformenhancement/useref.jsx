import React from "react";
function Ref(){
    const r1=React.useRef();
    const r2=React.useRef();
    React.useEffect(()=>{
        r1.current.focus()
    },[])
    function cll(ev){
        if(ev.key==="Enter"){
            r2.current.focus()
        }
    }
    return <div className="m-3 p-3" >
        <input type="text" onKeyUp={(ev)=>{cll(ev)}}  className="m-3" ref={r1} />
        <input type="text" ref={r2} />
    </div>
}
export default Ref