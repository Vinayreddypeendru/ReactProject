import React, { useState } from 'react'
import Child from './child';

 const Parent = () => {

    const[list,setlist]=useState([])
    const recivedchild =(childdata)=>{
        setlist([...list,childdata]);
        console.log("hii")

    }

  return (
    <div>parent
        <Child add={recivedchild} />
        {list.map((eachmsg)=>{
            return(
                <p>{eachmsg}</p>
            )
        })}
    </div>
  )
}
export default Parent;