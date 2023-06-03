import React from "react";
import SubchildData from "./subchild";

const ChildData = (props) =>{
    console.log(props)
    return( <div>
        <div>how r u</div>
        <SubchildData userDetailes={props.userDetailes} />
        </div>
    );
};
export default ChildData;