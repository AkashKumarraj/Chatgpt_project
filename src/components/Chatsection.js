import React, { useContext } from 'react'
import './Chatsection.css'
import Darkmode from "./Darkmode.js"
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from "../UserContext";
import user from "../assets/user.png"
import ai from "../assets/ai.png"
function Chatsection() {
    let { sent, input, setInput, showResult, resultData, recentPrompt, loading } = useContext(dataContext)

    return (
        <div className="chatsection">

            <div className="topsection">
                {!showResult ? <div className='headings'>
                    <span>HELLO AKASH</span>
                    <span>I'm Your Assistant</span>
                    <span>How Can I Help You?</span>
                </div> : <div className='result'>
                    <div className='userbox'>
                        <img src={user} alt="" className="image" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="aibox">
                        <img src={ai} alt="" width="50px" />
                        {loading ? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                            : <p>{resultData}</p>}
                    </div>

                </div>}

            </div>
            <div className="bottomsection">
                <input onChange={(e) => setInput(e.target.value)} type="text"
                    placeholder="Enter a prompt" value={input} />

                {input ? <button className="sentbtn" onClick={() => {
                    sent(input)
                }}><LuSendHorizontal /></button> : null}

                <Darkmode />
            </div>
        </div>
    )
}

export default Chatsection