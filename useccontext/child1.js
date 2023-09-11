import React, { useContext } from "react";
import { Sscontext } from "./usecontext";

const Child=()=>{
    const ccdata =useContext(Sscontext);
console.log(ccdata)
const {firstname,lastname,email}=ccdata
return(
    <ul>
        <li>{firstname}</li>
        <li>{lastname}</li>
        <li>{email}</li>
    </ul>
)
};
export default Child;