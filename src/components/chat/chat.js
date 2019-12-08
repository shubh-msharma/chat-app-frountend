








import React, { useEffect , useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './chat.css'
import InfoBar from '../infobar/infobar'
import Input from '../input/input'
import Messages from '../messages/messages'

let socket;





export default function Chat(props) {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const ENDPOINT = 'https://batiyalo.herokuapp.com/'

    useEffect(()=>{
        const {name,room} = queryString.parse(props.location.search);
        setName(name);
        setRoom(room);

        socket = io(ENDPOINT);

        socket.emit('join',{name,room},()=>{})

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }

    },[ENDPOINT,props.location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message]);
        })
    },[messages]);

    const sendMessage = (event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>{
                setMessage('')
            })
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room = {room}/>
                <Messages messages = {messages} name = {name}/>
                <Input
                    message = {message}
                    setMessage = {setMessage}
                    sendMessage = {sendMessage}
                />
                </div>
        </div>
    )
}
