import { useReducer } from "react";
 const reducer = () =>{};

const Reducedata =()=>{
    const initialState = {
        data: [
          { id: "23432423", firstName: "vinayreddy", email: "vinayreddy@emgail.com" },
          { id: "rer3", firstName: "vinaypendru", email: "vinaypendru@emgail.com" },
        ],
        length: 2,
      };
    

   const [state , dispatch] = useReducer(reducer, initialState);
   
    return(<div>
       { state.data.map((eachitem)=>{
        const{firstName,email} = eachitem;
        return( <center><ol>
            <h3>{firstName}</h3>
            <h3>{email}</h3>
            <button><input type="checkbox"/></button>
        </ol> </center>)
       }
       )}
    </div>)
};
export default Reducedata;