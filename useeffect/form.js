import React from "react";
import './formstyles.css'
import { useState,useEffect } from "react";
const URL="https://jsonplaceholder.typicode.com/users";

const Formapp = () =>{
    
    
   
   
    const [ usedata , setusedata  ] = useState([])
    const fetchusedata = async(url)=> {
        const response = await fetch (url)
        const data = await response.json();
        setusedata(data)

    }
    useEffect(() => {
        fetchusedata(URL);
      }, []);
    
     
      const [showData, setShowData] = useState(false);

      const handleChange = () => {
        setShowData(!showData);
      };
    return(
        <div className="login-s">
             <button onClick={handleChange}>{showData?"hide":"show"}</button>
            <h1>useEffect example - 1</h1>
            {usedata.map((eachobj)=>{
                const{id,name,email} =eachobj;
                return(<ul>
               
                {
                   showData&&(
                   <li className="hidendata">
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{email}</div></li>)}
                   
                </ul>)})}
            </div>
            )
        };
          
        

export default Formapp;