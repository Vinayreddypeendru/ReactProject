import React from 'react'
import useCounter from './coustomhook';

 const Count1 = () => {
    const[count,increment,decrement,resetcount]=useCounter("")
  
  return (
    <div>count1
        <h4>count:{count}</h4>
        <button onClick={increment}>+</button>
        <button onClick={resetcount}>reset</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
export default Count1;
