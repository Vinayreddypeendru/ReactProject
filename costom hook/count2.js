import React from 'react'
import useCounter from './coustomhook'


 const Count2 = () => {
 const[count,increment,decrement,resetcount]=useCounter("")


  return (
    <div>count2
        <h4>count{count}</h4>
        <button onClick={increment}>increment</button>
        <button onClick={resetcount}>reset</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
export default Count2;
