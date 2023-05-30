// its only how we get data fetch from json and display 



import React, {useState,useEffect}from "react";

const URL="https://jsonplaceholder.typicode.com/users";

   const Final = () => {
    const [ usedata , setusedata  ] = useState([])
    const fetchusedata = async(url)=> {
        const response = await fetch (url)
        const data = await response.json();
        setusedata(data)

    }
    useEffect(() => {
        fetchusedata(URL);
      }, []);
    
    return(<div>
        <h1>useEffect example - 1</h1>
        <ul>
          {usedata.map((eachUser) => {
            const { id, name, email } = eachUser;
            return (
              <li key={id}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{email}</div>
              </li>
            );
          })}
        </ul>
      </div>
    )
        

   }   

export default Final;