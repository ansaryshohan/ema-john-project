import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
  // console.log(props);
  const {product , handleAddToCart}=props;
  const {name, img,price,ratings,seller,} = product;
  return (
    <div className='product-card'>
      <img src={img} alt=''></img>
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>Price: ${price}</p>
        <p><small>manufacturer: {seller}</small></p>
        <p><small>ratings: {ratings} stars</small></p>
      </div>
      <button 
       onClick={()=>handleAddToCart(product)}
       className='btn-cart'
       >
        <p className='btn-text'>Add to cart</p>
       <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;