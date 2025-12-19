import React, { useContext } from 'react'
import './Chatsection.css'
import Darkmode from "./Darkmode.js"
import { LuSendHorizontal } from "react-icons/lu";
import {dataContext} from "../UserContext";

function Chatsection() {
    let{sent}=useContext(dataContext)
    
  return (
    <div className="chatsection">
        
        <div className="topsection">
            <div className='headings'>
                <span>HELLO AKASH</span>
            <span>I'm Your Assistant</span>
            <span>How Can I Help You?</span>
            </div>
            </div>
        <div className="bottomsection">
            <input type="text" placeholder="Enter a prompt"/>
            <button className="sentbtn" onClick={()=>{
                sent()
            }}><LuSendHorizontal /></button>
            <Darkmode/>
        </div>
    </div>
  )
}

export default Chatsection