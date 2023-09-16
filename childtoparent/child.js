import React, { useState } from 'react'

const Child=(props)=>{
   const [todo,settodo]= useState({text:"",id:""})
    const addmessage=(e)=>{
        settodo({...todo,text:e.target.value})
    }
    const handlesubmit =(e)=>{
        e.preventDefault();
        let newdata={text:todo.text,id: new Date().getTime().toString(),}
        settodo({newdata});
        props.addtodo(newdata);
        settodo({ text: '', id: '' });
    
    }
   


    return(
        <React.Fragment>

            <h3>
                i am child data
            </h3>
            <form>
                <input type='text' id='text' value={todo.text} onChange={addmessage}/>
                <button onClick={handlesubmit} >Add</button>
            </form>

        </React.Fragment>
    )
}
export default Child;