import React, { useState } from "react";
import ChildData from "./childcomp";


const Mainparent = ()=> {
    const[userDetailes, setuserDetailes] = useState({
        firstName:"vinay" , lastName:"reddy" , email:"vinayreddypendru@gmail.com" ,
    });
    return( <div>
        <h1>hello</h1>
        <ChildData userDetailes={userDetailes} />
     </div> );

};
export default Mainparent;