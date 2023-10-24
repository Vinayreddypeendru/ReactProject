import React, { useEffect, useState } from "react";
const URL ="https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
const Todos=()=>{
    const[fullname,setFullname]=useState([]);
    const[entername,setentername]=useState({text:"",id:""})
    const[jsondata,setjsondata]=useState([])
    const addtodo=(e)=>{setentername({...entername,text:e.target.value})}
    const handlesubmit =(e)=>{
        e.preventDefault()
        let newdata={text:entername.text,id:new Date().getTime().toString(),} 
        setFullname([...fullname,newdata])
        setentername({text:"",id:""})
        console.log(fullname)

    }
    const handledelete =(id)=>{
        let deletename=fullname.filter((eachname)=>{return eachname.id!==id})
        setFullname(deletename)
      
        


    }
    const fetchdata =async(url)=>{
        const response=await fetch(URL)
        const recvdata= await response.json();
        setjsondata(recvdata)
    }
   useEffect(()=>{
    fetchdata(URL)
   },[])


    return(
        <div>
           <h4>ToDos</h4> 
           <form>
           <input type="hidden" />
           <br></br>
           <input type="button" placeholder="button" />
            <input type="email" id="full name" placeholder="FULL name" value={entername.text} onChange={addtodo}/>
            <button onClick={handlesubmit}>add data</button>

           </form>
           <div>
            {fullname.map((eachone)=>{
                const{id,text}=eachone;
                return(
                    <ul>
                        <li>{text}</li>
                        <button onClick={()=>handledelete(id)}>Delete</button>
                    </ul>
                )
            })}
           </div>
           <hr></hr>
           <div>
            {jsondata.map((eachdata)=>{
                const{name,city}=eachdata
                return(
                    <>
                        <h3 >{name}</h3>
                        <h3>{city}</h3>
                        <button onClick={()=>handledelete()}>Delete</button>
                    </>
                )
            })}
           </div>

        </div>
    )

}
export default Todos;