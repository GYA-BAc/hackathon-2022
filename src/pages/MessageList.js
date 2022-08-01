import React from 'react';
import Message from './Message';

export default function MessageList({messages}) {
  return (
    messages.map(message => {
        return <Message id={message.id} message={message}/>
    })
  )
}