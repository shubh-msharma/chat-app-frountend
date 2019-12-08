import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './message/message'
import './messages.css'
export default function messages({messages,name}) {
    return (
        <ScrollToBottom className="messages">
            {
                messages.map((msg,i)=>{
                    return <div key={i}>
                        <Message message={msg} name = {name}/>
                    </div>
                })
            }
        </ScrollToBottom>
    )
}
