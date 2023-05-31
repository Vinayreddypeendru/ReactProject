
import React, {useState,useEffect}from "react";

const URL="https://jsonplaceholder.typicode.com/users";

   const Final = () => {
    const [ usedata , setusedata  ] = useState([])
    const [useloading , setuseloading] = useState(false);
    const [iserror,setiserror] = useState({ status:false , msg:""})

    const fetchusedata = async(url)=> {
        setuseloading(true)
        setiserror({status:false , msg:""})
        try{const response = await fetch (url)
        const data = await response.json();
        console.log(data);
        setusedata(data)
         setuseloading(false)
         setiserror({status:false , msg:""})
        }

        catch(error){
            setuseloading(false)
            setiserror({status:true , msg:"somethingwrong try again"})


        }

    }
    useEffect(() => {
        fetchusedata(URL);
    
      }, []);
      // if data get slow loading u get this display
      if (useloading){
        return(
            <h1>loadingdata...</h1>
        )
      }
      if(iserror?.status){
        return(
            <h3>{iserror.msg}</h3>
        )
      }
    
    return(<div>
        <h1>useEffect example - 1</h1>
        <ul>
          {usedata.map((eachUser) => {
            for(let key in eachUser) {
              if(typeof eachUser[key] === "object") {
                for(let nestedKey in eachUser[key]) {
                
                  if(typeof eachUser[key][nestedKey] === "object") {
                    for(let nestedKey1 in eachUser[key][nestedKey]) {
                      console.log();

                    }
                  } else {
                    console.log(eachUser[key][nestedKey]);
                  }
                }
              } else {
                console.log(eachUser[key]);
              }
            }
             
             return (
               <li>
                
                 <div>{eachUser.name}</div>
                <div>{eachUser.email}</div>
                 <div>{eachUser.address.street}</div>
                 <div></div>
               </li>
             );
          })}
        </ul>
      </div>
    )
        

   }   

export default Final;