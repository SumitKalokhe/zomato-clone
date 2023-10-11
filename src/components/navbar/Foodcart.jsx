import React ,{useState}from "react";
import "./foodcart.css"

const Foodcart=()=>{

    const [count, setCount]= useState(0)

    return (
        <div className="shopping-cart" onClick={()=>setCount(count+1)}>
            <div className="count">
                {count>0 ? count: ''}
            </div>
            <div >
                <img className="cart-image" src="food-cart-images/shopping-cart.png" alt="" />
            </div>
            
        </div>
    )
}

export default Foodcart;