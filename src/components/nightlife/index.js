import React from 'react'
import "./nightlife.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Filters from '../common/filters';
import Collection from '../common/collection';
import ExploreSection from '../common/exploresection';
import { nightLife } from "../../data/nightlife" ;

const nightlifefilter=[ 
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
   title:'Distance',
  },
  { 
    id:4,
    title: 'pubs/Bars ',
  },
  

];

const Collectionlist =[ 
   { 
    id:"1",
    title: "21 Lit Party Places",
    cover: "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg?output-format=webp" ,
    place : "21 place",
   },
   { 
    id:"1",
    title: "19 Finest Microbreweries",
    cover:  "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078835.jpg?output-format=webp" ,
    place :  "18 place" ,
   },
];

const nightlifelist= nightLife;
const Nightlife = () => {
  return (

    <div> <Collection list={Collectionlist}/>
    <div className='max-width'>
      <Filters  filterlist={nightlifefilter}/>

    </div>
    <ExploreSection list={nightlifelist} collectionName= 'Nightlife Restaurants in Lucknow' />
    </div>
  )
}

export default Nightlife;