import React ,{ useState } from 'react'
import { Link } from 'react-router-dom'
import './join.css'

export default function Join() {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');


    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
            <h1 className="headings">{name}</h1>
                <div><input  placeholder = "Name" type="text" className="joinInput" onChange={(event)=>setName(event.target.value)}/></div>
                <div><input  placeholder = "Room" type="text" className="joinInput mt-20" onChange={(event)=>setRoom(event.target.value)}/></div>
                <Link onClick = {event=>(!name || !room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" className="button mt-20">sign in</button>
                </Link>
            </div>
        </div>
    )
}
