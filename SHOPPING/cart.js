import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  const dispatch=useDispatch()
  const handleDeleteItem = (index) => {
    // Dispatch the 'DELETE_FROM_CART' action with the index to remove the item
    dispatch({ type: 'DELETE_FROM_CART', payload:index });
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item,index) => (
            <div>
            <li key={item.id}>{item.laptopname}</li>
            <li>{item.mobilename}</li>

            <button onClick={()=>handleDeleteItem(index)} >delete</button>
           
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
