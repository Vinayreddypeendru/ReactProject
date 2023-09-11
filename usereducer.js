import react, { useReducer}  from "react";
import { isDOMComponent } from "react-dom/test-utils";

 const reducer = (state, action) =>{
    if(action.type==="DELETE_PERSON"){
        const newperson = state.sdata.filter((eachitem)=>{
            return eachitem.id !==action.payload;
        })
        return{
            sdata:newperson
        };
    }
    return state;
 };
const Final = () =>{
    const intialdata =  {
        sdata:[
        { id: "23432423", firstName: "srikanth", email: "srikanth@emgail.com" },
        { id: "rer3", firstName: "emma", email: "emma@emgail.com" },
      ]};
     const [state , dispatch] = useReducer(reducer , intialdata);
     
     const deletedata =(id)=>{
        dispatch({
            type:"DELETE_PERSON",
            payload:id,
        })
     };
      return(
        <div>
            <ul>
                {state.sdata.map((eachitem, index)=>{
                    const{firstName, email , id}=eachitem;
                    return(<li key={index} >
                       <div>{firstName}</div>
                       <div>{email}</div>
                       <button onClick={()=>deletedata(id)}>delete</button>
                      </li>
                    )
                })}
            </ul>
        </div>
      )
};
export default Final;
