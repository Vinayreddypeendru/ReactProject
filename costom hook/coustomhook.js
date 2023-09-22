import { useState } from "react";

const useCounter=(intialvalue=0)=>{

    const[count,setcount]=useState(intialvalue=0);

    const increment=()=>{
        setcount(count +1)
    }
    const decrement=()=>{
        setcount(count -1)

    }
    const resetcount=()=>{
        setcount(count==0)
    }
    return[count,increment,decrement,resetcount]
}
export default useCounter;