import React from "react";
import { Mobile } from "./Products";
import Navbar from "./Navigate";
import { useDispatch } from "react-redux";
import Cart from "./cart";

const Mobiledata=()=>{
    let dispatch=useDispatch()
    const addToCart = (eachobj) => {
        // Dispatch an action to add the item to the cart
        dispatch({ type: 'ADD_TO_CART', payload: eachobj });
      };
    return(
        <div>
            <Navbar />
            {Mobile.map((eachobj)=>{
                const{id,mobilename,image,price}=eachobj;
                return(
                    <ul key={id}>
                        <li>{id}</li>
                        <li><img src={image} alt={mobilename} /></li>
                        <li>{mobilename}</li>
                        <li>{price}</li>
                        <button onClick={()=>addToCart(eachobj)}>add to cart</button>
                    </ul>
                )
            })}
            <Cart />
        </div>

    )
}
export default Mobiledata;