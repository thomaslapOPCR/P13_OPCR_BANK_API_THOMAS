import React from 'react';
import style from '../../style/main.module.css';

const HeroSection = () => {
  return (
    <div className={style.hero}>
      <section className={style['hero-content']}>
        <h2 className={style['sr-only']}>Promoted Content</h2>
        <p className={style.subtitle}>No fees.</p>
        <p className={style.subtitle}>No minimum deposit.</p>
        <p className={style.subtitle}>High interest rates.</p>
        <p className={style.text}>Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default HeroSection;