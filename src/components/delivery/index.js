import React from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import "./delivery.css";
import Filters from '../common/filters';
import DeliveryCollection from './deliverycollection';
import Topbrands from './topbrands';
import ExploreSection from '../common/exploresection';
import { Restaurants } from '../../data/resturant';


const deliveryfilter=[ 
  { 
    id:1,
    icon: <div className='abs-centre'> <TuneOutlinedIcon /></div>,
    title:'Filters',
  },
  { 
    id:2, 
    title:'Rating 4.0+',
  },
  { 
    id:3,
   title:'Safe and Hygienic',
  },
  { 
    id:4,
    title: 'Pure veg ',
  },
  { 
    id:5,
    icon: <div className='abs-centre'>< SwapVertOutlinedIcon /></div>,
    title :'Delivery time ',
  },
  { 
    id:6, 
    title:'Great offers',
  }
];

const  restaurantlist = Restaurants;

const Delivery = () => {
  return (
    <div>
    <div className='max-width'>
      <Filters filterlist={deliveryfilter} />
       </div>
       <div><DeliveryCollection /></div>
       <Topbrands/>
       <ExploreSection  list ={restaurantlist} collectionName='Delivery Restaurants in Banglore'/>
       </div>
  );
}

export default Delivery;