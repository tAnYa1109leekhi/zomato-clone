import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NextArrow from '../../common/carousel/nextaar';
import PrevArrow from '../../common/carousel/prevarr';
import Slider from 'react-slick';
import "./collection.css";

const settings = {
   
  infinite:false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow:<NextArrow />,
  prevArrow:<PrevArrow />,
};

  
const Collection = ({list}) => {
  return (
    <div className=' coll-wrapper'>
      <div className='max-width collection'>
        <div className='all-heading'>Collections</div>
        <div className='coll-subtitle-row'>
          <div className='coll-text'> 
          Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
          </div>
          <div className='coll-location-right'>
            <div>All collection in Banglore</div>
           <div className='abs-centre'><PlayArrowIcon /></div> 
          </div>
        </div>
        <Slider {...settings}>
        {list.map(( item )=>( 
          <div>
            <div className='coll-cover'>
       <img className='coll-image'
       src= {item.cover}
       alt={ item.title}
        />
        <div className='graditent-bg'></div>
            </div>
            <div className='coll-card-title'>{item.title}</div>
            <div className='coll-card-subtitle'>
              <div>{item.place}</div>
              <div className='abs-centre'><PlayArrowIcon /></div>
            </div>
            </div>
          
        )  )}
        </Slider>
      </div>
    </div>
  );
}

export default Collection;