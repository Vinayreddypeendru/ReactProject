import React from "react";

import Index from "./arraydel";
//import App from "./App";

let dataArray = [
    {firstName:"name1"},
    {firstName:"name2"},
    {firstName:"name3"},
    {firstName:"name4"},
]

const Data = () =>{
    return (
        <h1>
            {dataArray.map((eachName) =>{
        return(
            <section>
                {eachName.firstName}
                
            </section>

            
        )
    })}
        </h1>
    )
}
//export default Data;