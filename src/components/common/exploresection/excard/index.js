import React from 'react'
import "./excard.css";
import StarRateIcon from '@mui/icons-material/StarRate';

const ExploreCard = ({restaurants}) => {

const name= restaurants?.info?.name ?? "";
const coverImg =  restaurants?.info?.image?.url;
const deliveryTime =  restaurants?.order?.deliveryTime;
const rating = restaurants?.info?.rating?.rating_text;
const approxPrice =  restaurants?.info?.cfo?.text;
const offers =  restaurants?.bulkOffers ?? [];
const cuisines =  restaurants?.info?.cuisine ?. 
map((item)=> item.name).slice(0,3);


const bottomContainers =  restaurants?.bottomContainers;
const goldOff = restaurants?.gold?.text;

const discount = offers.length > 1 ? offers[1].text : offers.length===1? offers[0].text
:null;
  return (
    <div className='ex-card cur-po'>
    <div className='explore-card-cover'>
        <img className='card-image'
        src ={coverImg}
        alt={name}
        />
        <div className='ex-time'>{deliveryTime} </div>
        
        {goldOff && <div className='gold-off abs-centre'>{goldOff}</div>}
        {discount && <div className='ddiscount abs-centre '>{discount}</div>}
    </div>
    <div className='res-row'> 
      <div className='res-name'>{name}</div>
     { rating && ( <div className='res-rating abs-centre'>
       {rating} <StarRateIcon  className=' star abs-centre'/>
      </div>
      )}
    </div>
    <div className='res-row'> 
    {cuisines.length && (
      <div className='res-cuisine'>
        {cuisines.map( (item, i) => { 
          return (
            <span className='res-cuisine-tag'>{item}
            {i !== cuisines.length - 1 && ","} 
            </span>
          );
        })}
       
      </div>
       )}
     {approxPrice && <div className='app-price'>{approxPrice}</div>}
   </div>
     {bottomContainers. length > 0 && ( 
      <div> 
         <div className='separator'></div>
         <div className='ex-btm'>
          <img 
          src={bottomContainers[0]?.image?.url}
          style={{ height :"18px" }}
          alt={bottomContainers[0]?.text}
           />
   <div className='res-btm-text'>{bottomContainers[0]?.text}</div>
         </div>
      </div>
     )}
      
     
        
      </div>
   
    
  );
}; 

export default ExploreCard;