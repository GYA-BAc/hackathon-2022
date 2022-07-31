import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MessageList from './MessageList';

export default function Messaging() {
    const [messages, setMessages] =  useState([])
    const messageRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem("messages"))
        if (storedMessages) setMessages(storedMessages)

    }, [])

    
    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages))
    }, [messages])


    function addMessage(e) {
        const content = messageRef.current.value;
        if (content === '') return
        setMessages(prevMessage => {
          const ID = new Date()
          return [...prevMessage, { id: ID.toString(), content: content, user: JSON.parse(localStorage.getItem("current")) }]
        })
        messageRef.current.value = null
    }

    function logoutCurrentUser(e) {
        localStorage.removeItem("current")
        navigate('/signin')
    }

    return (
      <div style={{
        paddingTop: '150px',
        paddingLeft: '30px',
        justifyContent: 'Right',
        alignItems: 'Right',
        minHeight: '100vh'
      }}>
        <hr/>
        <MessageList messages={messages}/>
        <hr/>
        <input ref={messageRef} type="text"/>
        <button onClick={addMessage}>Send Message</button>
        <hr/><br/>
        <button onClick={logoutCurrentUser}>Logout</button>
      </div>
    )
}
