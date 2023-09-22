import { useState } from "react"

const incrementLogic=(Samedcount)=>{
    const Newlogic=()=>{
const [count,setcount]=useState(0)
const increment =()=>{
    setcount(count +1)
}
return(
    <Samedcount count={count} increment={increment}/>
)
    }
return Newlogic;
}
export default incrementLogic;