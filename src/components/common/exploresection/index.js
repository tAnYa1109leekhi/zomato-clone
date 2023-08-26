import React from 'react'
import "./expsec.css";
import ExploreCard from './excard';

const ExploreSection = ({list , collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='all-heading'>{collectionName}</div>
        <div className='explore-grid'>
            {list.map((restaurants)=>{ 
                return <div>
               <ExploreCard restaurants={restaurants } />
               </div>
            })} 
        </div>
    </div>
  )
};

export default ExploreSection;