import { createStore } from "redux";
const intialstate={
    fullname:"",
    balance:0,
    mobilenumber:"",


}

function accountreducer(state=intialstate,action){
    switch(action.type){
        case "deposit":return{...state,balance:state.balance + + action.payload};
        case "withdraw":return{...state,balance:state.balance - + action.payload};
        case "fullnameupdate":return{...state,fullname:action.payload};
        case "numberupdate":
            return{...state,mobilenumber:action.payload}
            default: 
            return state
    }

}
const store = createStore(accountreducer);
export default store;