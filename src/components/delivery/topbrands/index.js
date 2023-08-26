import React from 'react'
import "./topbrand.css";
import NextArrow from '../../common/carousel/nextaar';
import PrevArrow from '../../common/carousel/prevarr';
import Slider from 'react-slick';


const topbrandlist=[ 
{ 
   id: 1,
   time: "25 min",
   title:" La Pino'z pizza",
   cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png" ,

},
{ 
    id: 2,
    time: "18 min",
    title: "KFC",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png" ,
 
 },
 { 
    id: 3,
    time: "23 min",
    title: "Burger King",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png" ,
 
 },
 { 
    id: 4,
    time: "15 min",
    title:"Pizza Hut",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png" ,
 
 },
 { 
    id: 5,
    time: "19 min",
    title: "McDonald's",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png" ,
 
 },
 { 
    id: 6,
    time: "30 min",
    title :"The Hazelnut Factory",
    cover:  "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png" ,
 
 },
 { 
    id: 7,
    time: "21 min",
    title : "Grandson Of Tunday Kababi",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1c69c696c67a0791937fab960a9bdf0a_1611298398.png" ,
 
 },
 { 
    id: 8,
    time: "32 min",
    title :"Royal Cafe - Royal Inn",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png" ,
 
 },
];
const settings = {
   
    infinite:false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow />,
};

const Topbrands = () => {
  return (
    <div className='top-brand max-width'>
        <div className='all-heading'>Top brands for you</div> 
<Slider {...settings}>
    {topbrandlist.map((brands)=>{ 
        return <div className='top-brands-cover'>
            <img className='top-brand-image' 
            src={brands.cover}
            alt={brands.title}
            />
            <div className='brand-title'>{brands.title}</div>
            
            <div className='brand-time'>{brands.time}</div>
        </div>
   
     } )}
</Slider>

    </div>
  );
}

export default Topbrands;