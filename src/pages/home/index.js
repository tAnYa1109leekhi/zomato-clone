import React, { useState } from 'react'
import Header from '../../components/common/header';
import Tab from '../../components/common/tab';
import Footer from '../../components/common/footer';
import Delivery from '../../components/delivery';
import Dinningout from '../../components/dinningout';
import Nightlife from '../../components/nightlife';

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery")


  return (
    <div>
        <Header />
        <Tab activeTab= {activeTab}  setActiveTab={setActiveTab}   />
        {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  );
};

const getCorrectScreen = (pagechange) => { 
    switch (pagechange) { 
        case "Delivery":
        return  <Delivery />
        case "Dinning out":
        return  <Dinningout />
        case "Nightlife":
        return <Nightlife />
        default:
            return <Delivery />

    }
    
};

export default HomePage;