import React, { useState } from 'react'

 const Child =React.memo( (props) => {
    const [message,setmessage]=useState()
  return (
    <div>child
        <input type='text' id='message' placeholder='entersomemessage' pattern='^[a-zA-Z0-9]{2,}$'onChange={(e)=>setmessage(e.target.value)}/>
        <button onClick={()=>{props.add(message)}}>submit</button>
    </div>
  )
})
export default Child;
