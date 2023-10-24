
import { useSelector } from "react-redux";

const Fdata=()=>{
    const data = useSelector((state)=>{
        return state
    })

    return(
        <div>
            <h3>Account detailes 
                <h4>{data.fullname}</h4>
                 <h4>{data.mobilenumber}</h4>
                <h4>{data.balance}</h4>
                
            </h3>
        </div>
    )
}
export default Fdata;