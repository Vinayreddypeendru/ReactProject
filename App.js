import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
const App = ()=> {
  let dispach=useDispatch();
  const [amount, setAmount] = useState("");
  const [fullname,setfullname] = useState("");
  const [phonenumber,setPhonenumber]= useState("");
 
 


  const handleDeposit = () => {
    
   
    if (!isNaN(amount) && typeof amount === 'number') {
          dispach({type:"deposit",payload:amount}) 
          setAmount("");    
     
    
    } else {
      alert('Please enter a valid number for deposit.');
    }
  };

  const handleWithdraw = () => {
   
    if (!isNaN(amount) && typeof amount === 'number') {
      
     dispach({type:"withdraw",payload:amount})
    setAmount("");
    } else {
      alert('Please enter a valid number for withdrawal.');
    }
  };
  const handlesubmit = () =>{
    dispach({type:"fullnameupdate",payload:fullname})
  }
const updatenumber =()=>{
  dispach({type:"numberupdate" , payload:phonenumber})
}

  return (
    <div className="App">
      <div>
        <h4>enter amount</h4>
        <input
          type="number"
          placeholder="enter amount here"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={handleDeposit}  type='submit'>Deposit</button>
        <button onClick={handleWithdraw} type='submit'>Withdraw</button>
      </div>
     <div>
      <input  type='text' value={fullname} onChange={(e)=>setfullname(e.target.value)} />
      <button onClick={handlesubmit} type='submit'> Updatename</button>
     </div>
     <input type='tel'  value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} pattern='[0-9]{10}' />
     <button  onClick={updatenumber} type='submit'>updatenumber</button>
    </div>
  );
}

export default App;

