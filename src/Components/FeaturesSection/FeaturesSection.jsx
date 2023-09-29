import React from 'react';
import style from "../../style/main.module.css"

const FeaturesSection = ({ features, icons }) => {
  return (
      <div className={style['feature-item']}>
          <img src={icons[features.icon]} alt={features.title} className={style['feature-icon']} />
          <h3 className={style['feature-item-title']}>{features.title}</h3>
          <p>{features.description}</p>
      </div>
  );
};


export default FeaturesSection;