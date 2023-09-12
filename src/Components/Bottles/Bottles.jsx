import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoreCart, removeFromLS } from "../../Utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] =useState([]);
    const [cart, setCart] =useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    },[]);
    // load card from local storage
    useEffect(()=>{
       if(bottles.length){
        const storedCard = getStoreCart();
        const saveCart = [];
        for(const id of storedCard){
           
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                saveCart.push(bottle)
            }
        }
        
        setCart(saveCart)
       }
    },[bottles])

    const handleToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)

    };
    const handleRemoveFromCart = id =>{ //visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        //remove from LS
        removeFromLS(id);

    };
    return (
        <div>
           <h2>Bottles Available: {bottles.length}</h2>
           <Cart handleRemoveFromCart={handleRemoveFromCart}  cart={cart}></Cart>
           <div className="bottles-container">
           {
            bottles.map(bottle => <Bottle key={bottle.id}  handleToCart={handleToCart} bottle={bottle}></Bottle>)
           }
            </div> 
        </div>
    );
};

export default Bottles;