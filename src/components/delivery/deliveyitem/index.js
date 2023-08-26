import React from 'react'
import "./deliveryitem.css";

const DeliveryItem = ({ items }) => {
  return (
    <div > 
        <div className='delivery-item-cover'>
           <img 
           className='delivery-item-image'
           src={items.cover} 
           alt={items.title}
           />
        </div>
        <div className='delivery-item-title'>{items.title}</div>
     </div>
  );
};

export default DeliveryItem;