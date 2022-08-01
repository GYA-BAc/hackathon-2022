import React, {} from 'react'

export default function Message({message}) {

  return (
    <div>
        <p><b>{message.user}</b> on {message.id}: <br/> 
            {message.content}</p>
    </div>
  )
}