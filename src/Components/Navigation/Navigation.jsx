import React from 'react';
import style from '../../style/main.module.css';
import {Link} from "react-router-dom";
import Logo from "../../Assets/argentBankLogo.png"
const NavBar = () => {
  return (
    <nav className={style['main-nav']}>
      <Link className={style['main-nav-logo']} to="/">
        <img
          className={style['main-nav-logo-image']}
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className={style['sr-only']}>Argent Bank</h1>
      </Link>
      <div>
        <Link className={style['main-nav-item']} to="/sign-in">
          <i className={`fa fa-user-circle `}></i>
                    Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;