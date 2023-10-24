import React from 'react'
import "./axiosdata.css"
 const Home = () => {
  return (

    <div>
        <form className='form-class'>
           <div className='input1'>
             <input type='text' placeholder='enter your full name' pattern='^[a-zA-z]{4,}$' />
            </div>
            <div className='input1'>
                 <input type='email' placeholder='enter email here'/>
            </div> 
            <div className='input1'> 
                <input type='tel' placeholder='Mobile number' pattern='^[0-9]{10}$'/>
            </div>   
            <button> submit</button>
        </form>
    </div>
  )
}
export default Home;
