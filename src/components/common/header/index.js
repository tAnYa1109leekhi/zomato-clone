import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import Person3Icon from '@mui/icons-material/Person3';
import "./header.css";




const Header = () => {
  return (
    <div className= "max-width header">
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt='zomatao-logo'
       className='header-logo' />
       <div className='header-right'> {/*include searchbar,location,profile */}
        <div className='header-loaction-search'>
          <div className='location-wrapper'>
            <div className='location-icon-name '> 
             <div className='abs-centre location-icon'><PlaceIcon /></div>
             <div>Banglore</div>
            </div>
            <div className='abs-centre'><ArrowDropDownIcon/></div>
            </div> 
            <div className='location-search-seprator'></div>
            <div className='search-bar'>
            <div className='abs-centre  Search-icon' ><SearchIcon/></div>
            <input placeholder='search for restaurant , cuisine or a dish' className='search-input'/> 
           </div>
            </div>
            <div className='profile-wrapper'> 
           < Person3Icon />
           <div className='username'>Tanya</div>
           <ArrowDropDownIcon className='abs-centre '/>
            </div>
      </div>
    </div>
  );
};

export default Header;