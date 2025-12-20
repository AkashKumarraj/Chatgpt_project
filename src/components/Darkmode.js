import React,{useState, useEffect} from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import "./Darkmode.css"
function Darkmode() {
    const[mode,setMode]=useState("dark-mode")
    function toggle(){
        if(mode==="dark-mode"){
            setMode("light-mode")
        }
        else{
            setMode("dark-mode")
        }
    }
    useEffect(()=>{
        document.body.className=mode
    },[mode])
  return (
    <button className="darkmodebtn" onClick={()=>{
        toggle()
        console.log(mode);
    }}>{mode==="dark-mode"?<IoSunnyOutline />:<FaMoon />
}</button>

  )
}

export default Darkmode