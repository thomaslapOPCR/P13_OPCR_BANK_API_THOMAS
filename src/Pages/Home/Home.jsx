import React from 'react';
import HeroSection from "../../Components/HeroSection/HeroSection";
import featuresData from "./featuresData.json"
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import chatIcon from '../../Assets/icon-chat.png';
import moneyIcon from '../../Assets/icon-money.png';
import securityIcon from '../../Assets/icon-security.png';


const Home = () => {
    
  const icons = {
    chat: chatIcon,
    money: moneyIcon,
    security: securityIcon
  };

  return (
    <>
      <HeroSection />
      <FeaturesSection features={featuresData} icons={icons}  />
    </>
  );
};

export default Home;