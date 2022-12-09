import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ item,handleRemove }) => {
  const {id, name, price, quantity, shipping, img } = item;

  return (
    <div className='review-section'>
      <div className='image-conatainer'>
        <img src={img} alt="" />
      </div>

      <div className='info-container'>
        <div className='details-container'>
          <h3> {name}</h3>
          <p><small>Price: {price}</small></p>
          <p><small>Quantity: {quantity}</small></p>
          <p><small>Shipping: {shipping}</small></p>
        </div>
        <div className='btn-div' onClick={()=>handleRemove(id)}>
          <button>
            <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;