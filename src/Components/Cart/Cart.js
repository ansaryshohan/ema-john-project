import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {cart, clearCart, children}=props;
  // console.log(cart);

  let total=0;
  let shipping=0;
  let quantity=0;
  for(const product of cart){
    quantity= quantity+product.quantity;
     total= total+ product.price* product.quantity;
     shipping= shipping+ product.shipping* product.quantity; 

  }
  const tax= parseFloat((total* 0.1).toFixed(2));
  const grandTotal= total+ tax+shipping;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <h4>Selected items: {quantity}</h4>
      <h4>Total price: ${total}</h4>
      <h4>Total shipping price: ${shipping}</h4>
      <h4>Tax: {tax}</h4>
      <h3>Grand total: ${grandTotal.toFixed(2)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;