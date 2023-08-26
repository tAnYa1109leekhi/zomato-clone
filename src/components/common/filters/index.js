import React from 'react'
import "./filter.css";
import FilterItem from './filtersitem';

const Filters = ({filterlist}) => {
  return (
    <div className='filterssss'>
      {filterlist && filterlist.map((filter)=>{
        return <FilterItem  filter={filter} key={filter.id} />;
      })}
    </div>
  )
}

export default Filters;