import React from 'react'
import './message.css'
export default function message({ message: { user, text }, name }) {
    
    let isSendByCurrentUser = false;
    const trimedName = name.trim().toLowerCase()

    if (user === trimedName) {
        isSendByCurrentUser = true
    }
    return isSendByCurrentUser ? <div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{trimedName}</p>
        <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
        </div>
    </div> :<div className="messageContainer justifyStart">
        
        <div className="messageBox backgroundLight">
            <p className="messageText colorDark ">{text}</p>
        </div>
        <p className="sentText pl-10">{user}</p>
    </div>
}
