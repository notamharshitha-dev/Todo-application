import React from "react";
function Timer(){
    const [min,setMin]=React.useState(0);
    const [sec,setSec]=React.useState(0);
    var tim=React.useRef();
    function start(){
      tim.current=  setInterval(()=>{
            setSec((cv)=>{
                if(cv==60){
                    setMin((pv)=>{
                        return pv+1
                    })
                    return 0
                }
                return cv+1
            })
        },100)
    }
    function pause(){
       //console.log("hello")
        clearInterval(tim.current)
    }
    function stop(){
        clearInterval(tim.current);
        setMin(0);
        setSec(0)
    }
    return <div className="m-5" >
        <h1> {min}:{sec} </h1>
        <button onClick={()=>{start()}} >Start</button>
        <button onClick={()=>{pause()}} >Pause</button>
        <button onClick={()=>{stop()}} >stop</button>
    </div>
}
export default Timer