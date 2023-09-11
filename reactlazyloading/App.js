 import React, { lazy,Suspense,useState } from "react"
 import "./style.css.css";
import Sap from "./sap";
 
 const sap= lazy(()=>import('./sap'))

  
 const App = ()=> {
    const[list,setlist]=useState([]);
    const[message,setmessage]=useState({text:"",id:""})
    const [ldata,setldata]=useState(false)
    
    const hadlemessage =(e)=>{
        setmessage({...message,text:e.target.value})}
    const handleadd =(e)=>{
       e.preventDefault()
        let newtodo = {
            text:message.text,
            id:new Date().getTime().toString()
        }
       setlist([...list,newtodo])
       setmessage({...message,text:"",id:""})
       console.log(newtodo)

    }
const handledelete = (id)=>{
    const newdata =list.filter((eachobj)=>{
        return eachobj.id!==id
    }
    ) 
    setlist(newdata)
    setmessage({...message,text:"",id:""})
    console.log(newdata)
    console.log(list)
}

    return( <div className="app-container">
    <h1>Simple Todo App</h1>
    <form className="todo-form"><input type="text" id="message" name="message" value={message.text} placeholder="inputmessage" onChange={hadlemessage} />
        <button onClick={handleadd} type="submit">add</button></form>
        <nav>{list.map((eachobj)=>{
            const{text,id}=eachobj
            return(
                <ul>
                    <li>{text}</li>
                    
                    <button onClick={()=>handledelete(id)}>delete</button>
                </ul>
            )
        })}</nav>
        <button onClick={()=>{setldata(true)}}>open</button>
        {
            ldata==true&&(
                <Suspense>
                    <Sap />
                </Suspense>
            )
        }
        
    </div>)
 }
  
  export default App;