import axios from "axios";
import React, { useEffect, useState } from "react";
import "./axiosdata.css"
import Navbar from "./navlink";
const Axiosdata= ()=>{
   const[getdata,setgetdata]=useState([])
   const [loading,setloading] =useState(false)
   const [error,setError]=useState({status:false,msg:""})
    useEffect(()=>{
        getproducts()
    },[])
    async function getproducts (){
        setloading(true)
        setError({status:false,msg:""})
        try{ let res = await axios.get("https://fakestoreapi.com/products/category/jewelery")
         setgetdata(res.data);
         setloading(false)
         setError({status:false,msg:""})
        }
          catch(error){
                setloading(false)
                setError({status:true,msg:""})
            }
       
    }
    if(loading){
        return(
            <h3>loading</h3>
        )
        
    }
    
    if (error?.status) {
        return (
          <div>
            <h3 style={{ color: "red" }}>{error?.msg}</h3>
          </div>
        );
      }
    return(
        <React.Fragment  className="axios-data">
            <Navbar />
            <h3>axiosdata</h3>
        <ul className="product-list">
        {getdata.map((eachproduct)=>{
            const{id,tittle,image}=eachproduct;
            return(
                
                    <li key={id} className="product-item">
                        <img src={image} alt={tittle}  />
                        <h5>{tittle}</h5>

                    </li>
                    
                
            )
        })}</ul>
        </React.Fragment>
        
    )
}
export default Axiosdata;