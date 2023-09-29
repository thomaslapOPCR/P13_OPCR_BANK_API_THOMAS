import React, {useEffect, useState} from 'react';
import style from '../../style/main.module.css';
import { Link ,useNavigate} from 'react-router-dom';
import Logo from "../../Assets/argentBankLogo.png"
import {useDispatch, useSelector} from "react-redux";
import { logoutAction } from '../../store/userSlice.js';


const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.authenticated);
    const ReduxFirstName = useSelector((state) => state.user.user.firstName);
    const user = useSelector((state) => state.user.user);
    const [ firstName, setFirstName] = useState('');
    const [ id, setId] = useState('');

    useEffect(() => {
        if(isAuthenticated) {
          setFirstName(user.firstName)
            setId(user.id)
        }
    }, [user,isAuthenticated]);

    const logout = () => {
        dispatch(logoutAction());
        navigate("/");
    }

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
                {isAuthenticated ? (
                    <>
                        <Link className={style['main-nav-item']} to={`/user/${id}`}>
                            <i className="fa fa-user-circle"></i>
                            {!ReduxFirstName ? firstName :ReduxFirstName }
                        </Link>
                        <Link className={style['main-nav-item']} to={`/sign-in`}>
                            Sign In
                        </Link>
                        <Link className={style['main-nav-item']} onClick={logout}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <Link className={style['main-nav-item']} to="/sign-in">
                        <i className="fa fa-user-circle "></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;