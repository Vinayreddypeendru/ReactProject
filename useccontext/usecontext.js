import react from "react";

const intialstate={
    firstname:"vinay", lastname:"reddy", email:"vinayreddy@gmail.com",
};

export const Sscontext=react.createContext();

export const Datacontextprovider=({children})=>{
    return(<Sscontext.Provider value={intialstate}>{children}</Sscontext.Provider>)
};