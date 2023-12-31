import React from 'react';
import "./tab.css";

const tabs =[ 
  {
    id : 1,
    title : "Delivery",
    active_img :"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" ,
    backdrop: "#FCEEC0",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" 

  },
  {
    id : 2,
    title : "Dinning out",
    active_img : "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" ,
    backdrop: "#E5F3F3" ,
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" 

  },
  {
    id : 3,
    title : "Nightlife",
    active_img :"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"  ,
    backdrop: "#EDF4FF",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"  

  }
];
const Tab = ({activeTab, setActiveTab }) => {
  return (
    <div className='tab-option'>
     <div className='option-wrapper max-width'>
      {tabs.map((pagechange) => { 
        return (
        <div onClick={( ) => setActiveTab(pagechange.title)}
        className= {`tab-item abs-centre cur-po ${ activeTab === pagechange.title && 'active-tab'
      }`}  
        >
          <div className='image-container abs-centre '
          style={{ 
         backgroundColor: `${ activeTab === pagechange.title ? pagechange.backdrop: ""
         }`,
        }}
         >
          <img 
          className='images-tab'
          alt={pagechange.title}
          src={
            activeTab === pagechange.title ? pagechange.active_img : pagechange.inactive_img
          }
           />
          </div> 
          <div className='tab-name'>{pagechange.title}</div>
        </div>
        );
        })}
     </div>
    </div>
   );
      };
export default Tab;