import React from 'react';
import style from "../../style/main.module.css"

const FeaturesSection = ({ features, icons }) => {
  return (
    <section className={style.features}>
      <h2 className={style['sr-only']}>Features</h2>
      {features.map((feature, index) => (
        <div key={index} className={style['feature-item']}>
          <img src={icons[feature.icon]} alt={feature.title} className={style['feature-icon']} />
          <h3 className={style['feature-item-title']}>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};


export default FeaturesSection;