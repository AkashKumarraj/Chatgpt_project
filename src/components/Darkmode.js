import React,{useState, useEffect} from 'react'

function Darkmode() {
    const[mode,setMode]=useState("darkmode")
    function toggle(){
        if(mode==="darkmode"){
            setMode("lightmode")
        }
        else{
            setMode("darkmode")
        }
    }
    useEffect(()=>{
        document.body.className=mode
    },[mode])
  return (
    <button onClick={()=>{
        toggle()
        console.log(mode);
    }}>dark</button>

  )
}

export default Darkmode