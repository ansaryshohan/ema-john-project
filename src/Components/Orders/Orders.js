import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const {products, initialCart} = useLoaderData();
  const [cart,setCart]=useState(initialCart);

  const handleRemove=(id)=>{
   const remaining= cart.filter(product=>product.id !== id);
   setCart(remaining);
   removeFromDb(id);
  }
  const clearCart=()=>{
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="order-container">
    {
      cart.map(item=> <ReviewItem
      key={item.id}
      item={item}
      handleRemove={handleRemove}></ReviewItem>)
    }
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to='/shipping'>
            <button>Proceed to shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;