import React, { useEffect, useState } from "react";

const Parent =()=>{
    const [count, setcount]=useState(0);
    const increment=()=>{
        setcount(count +1)
        
    }
    useEffect(()=>{
        document.title=`count -${count}`;
    },[count])
    return(
        <div>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
};
export default Parent;