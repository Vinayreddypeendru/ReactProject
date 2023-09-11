import React, { useContext } from "react";
import Child from "./child";
import { Sscontext } from "./usecontext";


const Final=()=>{
   
    const fdata = useContext(Sscontext);
    console.log(fdata); 
    const{firstname,lastname,email}=fdata;
    return(
        <ol>
            <li>vinay</li>
           
            <li>reddy</li> 
            <Child />
            
                    <h1>{firstname}</h1>
                    <h1>{lastname}</h1>
                    <h1>{email}</h1>
                
                
    
        </ol>
    )
};
export default Final;