
import {useState,useEffect}from "react";

const useIntihook=(Tempratures)=>{
    const [minnum,setMinmum]=useState("null")
 const [squrerout,setSqurerout]=useState("null")
 useEffect(()=>{
    console.log(Tempratures);
  const newminnum=Math.min(...Tempratures)
  const newsqrrout =Tempratures.map((temp)=>Math.SQRT2(temp)) 
  console.log(newsqrrout)
  setMinmum(newminnum)
  setSqurerout(newsqrrout)
 },[minnum])
return[minnum,squrerout]



}
export default useIntihook;