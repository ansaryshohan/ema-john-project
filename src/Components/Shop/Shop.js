import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
  const products= useLoaderData();
  const [cart,setCart]=useState([]);
  // console.log(products);


  useEffect(()=>{
    const storedCart= getStoredCart();
    const savedCart= [];
    for( const id in storedCart){
      const addedProduct= products?.find(product=> product.id===id);
       if(addedProduct){
        addedProduct.quantity=storedCart[id];
        savedCart.push(addedProduct);
       }
    }
    setCart(savedCart);
  }, [products])

  const handleAddToCart=(selectedProduct)=>{
    // console.log(product);
    const exists= cart.find(product=>product.id===selectedProduct.id);
    let newCart=[];
    if(!exists){
      selectedProduct.quantity=1;
      newCart=[...cart,selectedProduct]
    }
    else{
      const rest= cart.filter(product=>product.id!== selectedProduct.id);
      exists.quantity=exists.quantity+1;
      newCart=[...rest,exists];
    }
   
    setCart(newCart);
    addToDb(selectedProduct.id);
  }
  const clearCart=()=> {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className='shop-container'>
      <div className="product-container">
          {
            products?.map(product=> <Product 
              key={product.id} 
              product={product}
              handleAddToCart={handleAddToCart}
              ></Product>)
          }
      </div>
      <div className="cart-container">
            <Cart cart={cart} clearCart={clearCart}>
              <Link to='/orders'>
                <button>Review Order</button>
              </Link>
            </Cart>
      </div>
    </div>
  );
};

export default Shop;