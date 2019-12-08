import React from 'react'
import './input.css'
export default function input({message,setMessage,sendMessage}) {
    return (
        <form action="">
            <input className="input"
                placeholder="enter message here"
                value={message}
                onChange = {(event)=>setMessage(event.target.value)}
                onKeyPress = {(event)=> event.key === 'Enter'?sendMessage(event):null}
                type="text"/>
            <button className="sendButton" onClick = {(event)=>sendMessage(event)}>send</button>
        </form>
    )
}
