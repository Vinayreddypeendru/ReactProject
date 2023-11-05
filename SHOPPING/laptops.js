import React from "react";
import { Laptops } from "./Products";
import Navbar from "./Navigate";
import { useDispatch } from "react-redux";
import Cart from "./cart";


const Laptopdata=()=>{
    let dispatch=useDispatch();
    const addToCart = (item) => {
        // Dispatch an action to add the item to the cart
        dispatch({ type: 'ADD_TO_CART', payload: item});
      };
    return(
        <div>

            {Laptops.map((eachobj)=>{
                const{id,laptopname,image,price}=eachobj;
                return(
                    
                    <ul key={id}>
                        <li>{id}</li>
                        <li><img src={image} alt={laptopname} /></li>
                        <li>{laptopname}</li>
                        <li>{price}</li>
                        <button onClick={()=>addToCart(eachobj)}>add to cart</button>
                    </ul>
                )
            })}
            <Cart />
            <Navbar />

        </div>
    )
}
export default Laptopdata;