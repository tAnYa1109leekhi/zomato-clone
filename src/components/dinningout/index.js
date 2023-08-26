import React from 'react';
import "./dinningout.css";
import Collection from '../common/collection';
import Filters from '../common/filters';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import { diningOut } from "../../data/dinningout" ;
import ExploreSection from '../common/exploresection';



const Collectionlist = [

  {
    id:"1",
    title: "10 Celeb-loved Places",
    cover:  "https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png" ,
    place: "10 place",
  },
  
  {
    id:"2",
    title: "21 Best Insta-worthy Places",
    cover:  "https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png"  ,
    place: "14 place",
  },
  
  {
    id:"3",
    title: "21 Romantic Dining Places" ,
    cover: "https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
    place: "20 place",
  },
  
  {
    id:"4",
    title:"24 Great Cafes",
    cover: "https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg" ,
    place: "21 place",
  },
  
  {
    id:"5",
    title: "10 Unique Dining Experiences",
    cover: "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg"  ,
    place: "10 place",
  },
  
  {
    id:"6",
    title: "26 Serene Rooftop Places" ,
    cover: "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg"  ,
    place: "27 place",
  },
  
  {
    id:"1",
    title: "18 Newly Opened Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg" ,
    place: " 11 place",
  },
];

const dinningfilter=[ 
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
  },
  { 
    id:7, 
    title:'Outdoor seating',
  },
  { 
    id:8, 
    title:'open now',
  }
];

const dininglist = diningOut; 
const Dinningout = () => {
  return (
    <div><Collection   list ={Collectionlist}/>
    <div className='max-width'>
      <Filters  filterlist =   {dinningfilter}/>
    </div>
    <ExploreSection list= {dininglist} collectionName= " Dinningout Restaurant in Lucknow" />
    </div>
  )
};

export default Dinningout;