import React  from "react";

const initialState =
  {
    firstName: "vinay",
    lastName: "reddy",
    email: "vinayreddypendru@gmail.com",
  }
  

export const Sscontext = React.createContext();

export const Dataprovider = ({children})=>{
    return(
        <Sscontext.Provider value={initialState}>{children}</Sscontext.Provider>
    )
};
 
