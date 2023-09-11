import React, { useReducer } from "react";
const reducer=(state,action)=>{
    if(action.type==="DELETE_PERSON"){
        const newpersons = state.data.filter((eachperson)=>{
            return eachperson.id !== action.payload;
        })
        return{
            data:newpersons
        }
    }
    return state;
};
const Frdata=()=>{
    const intialstate={
        data:[{ id:"23235", firstname:"vinay" ,email:"vinay@gmail.com"},
    {id:"23234" ,firstname:"reddy" , email:"reddy@gmail.com"} ]
    };
    const[state,dispatch]=useReducer(reducer,intialstate);
    const handledelete=(id)=>{
        dispatch({
            type:"DELETE_PERSON",
            payload:id,
        })
    }

    return(<div>
        {state.data.map((eachitem)=>{
            const{id,firstname,email}=eachitem;
            return(
                <ul key={id}>
                    <li>{id}</li>
                    <li>{firstname}</li>
                    <li>{email}</li>
                    <button onClick={()=>handledelete(id)}>delete</button>
                </ul>
                
            )
        })};
        <h1>hello</h1>
        <h1>its reducer</h1>
    </div>)
};
export default Frdata;