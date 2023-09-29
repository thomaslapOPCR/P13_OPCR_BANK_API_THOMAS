import React from 'react';
import HeroSection from "../../Components/HeroSection/HeroSection";
import featuresData from "../../data/appData.json"
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import chatIcon from '../../Assets/icon-chat.png';
import moneyIcon from '../../Assets/icon-money.png';
import securityIcon from '../../Assets/icon-security.png';
import style from "../../style/main.module.css";


const Home = () => {
    
  const icons = {
    chat: chatIcon,
    money: moneyIcon,
    security: securityIcon
  };

  return (
    <>
      <HeroSection />
        <section className={style.features}>
            <h2 className={style['sr-only']}>Features</h2>
                {featuresData.features.map((feature,index)=>
                    <FeaturesSection key={index} features={feature} icons={icons} />
                )}
        </section>


    </>
  );
};

export default Home;