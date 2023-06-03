import React from "react";

const SubchildData = ( { userDetailes } ) =>{
    return(<div>
        
        <h1>{userDetailes.email}</h1>
        <h1>{userDetailes.lastName}</h1>
    </div>
        
    )
}
export default SubchildData;