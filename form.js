import React from "react";

import { useState,useEffect } from "react";
import Navbar from "./useeffect/navlink";

const URL="https://jsonplaceholder.typicode.com/users";

const Formapp = () =>{
    const [ usedata , setusedata  ] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [loading,setLoading]= useState(false)
    const[error,setError]=useState({status:false,msg:""})
    const [filteredUsers, setFilteredUsers] = useState([]);
    const fetchusedata = async(url)=> {
      setLoading(true);
      setError({ status: false, msg: "" });
      try{ 
           const response = await fetch(url)
           const data = await response.json();
              console.log(usedata)
             setusedata(data)
             console.log(data);
            
             setLoading(false);
             setError({ status: false, msg: "" });
                   }
           catch(error){
            setLoading(false);
            setError({ status: true, msg: "error fetching data" });

           }
                  }
           useEffect(() => {
        
            fetchusedata(URL);
            }, []);
            useEffect(() => {
              // Filter the users based on the search term
              const filtered = usedata.filter((user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setFilteredUsers(filtered);
            }, [searchTerm, usedata]);
                
      if (loading) {
        return (
          <div>
            <h3>Loading...</h3>
          </div>
        );
      }
    
      if (error?.status) {
        return (
          <div>
            <h3 style={{ color: "red" }}>{error?.msg}</h3>
          </div>
        );
      }
 
    
     
    return(
       
           
            
           <div>
            
            <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search something new..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <hr />
            {filteredUsers.map((eachone)=>{
              return(
                <ul className="list-group list-group-horizantal-sm">
                  <li className="list-group-item">{eachone.id}</li>
                  <li className="list-group-item">{eachone.name}</li>
                  <li className="list-group-item">{eachone.username}</li>
                  <li className="list-group-item">{eachone.email}</li>
                  <li className="list-group-item">{eachone.address.city}</li>
                  <li className="list-group-item">{eachone.website}</li>

                
                </ul>
              )
            })}</div>
            )
        };
          
        

export default Formapp;