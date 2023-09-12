const getStoreCart = ()=>{
   const storeCartString = localStorage.getItem('cart')
   if(storeCartString){
    return JSON.parse(storeCartString)
   }
   return [];
}
const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const addToLS = id =>{
    const cart =getStoreCart();
    cart.push(id);
    //save to local storage
    saveCartToLS(cart);
    
};
const removeFromLS = id =>{
    const cart =getStoreCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}
export {addToLS,getStoreCart, removeFromLS};