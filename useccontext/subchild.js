import React, { useContext } from "react";
import { Sscontext } from "./context";






const SubchildData = () =>{
    const ccdata = useContext(Sscontext);
    console.log(ccdata);
    const{firstName,lastName,email} = ccdata;
    return(
        <div>
            
           <ul>     
                    <li>Name:{firstName}</li>
                    <li>surName:{lastName}</li>
                    <li>{email}</li>

                    
            </ul>    
                    
        
        </div>
    )}
export default SubchildData;