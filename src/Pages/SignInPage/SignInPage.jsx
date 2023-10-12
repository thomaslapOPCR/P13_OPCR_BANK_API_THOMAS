import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {token, updateProfile, updaterRememberMe} from '../../store/userSlice.js';
import styles from "../../style/main.module.css"
import { useNavigate  } from 'react-router-dom';
import {getProfile, login} from '../../services/requestApi.js';
import {saveToLocalStorage} from "../../services/authContext";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.user.authenticated);


  useEffect(() => {
    if (isAuthenticated) navigate(`/user`);
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const loggedIn = await login(email, password);

      if (loggedIn.auth) {
        const getProfileData = await getProfile(loggedIn.token);
        dispatch(token(loggedIn.token));
        dispatch(updateProfile(getProfileData));
        saveToLocalStorage('profile',JSON.stringify(getProfileData),rememberMe);
        navigate(`/user`);
      } else {
        setError('Login failed - Email or password invalid');
      }
    } catch (err) {
      setError('An error occurred during login.');
    }
  };

  return (
      <section className={styles['bg-dark']}>
        <section className={styles['sign-in-content']}>
          <i className={`fa fa-user-circle ${styles['sign-in-icon']}`}></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSignIn}>
            <div className={styles['input-wrapper']}>
              <label htmlFor="email">Email</label>
              <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles['input-wrapper']}>
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <p className={styles.error}>{error}</p>
            </div>
            <div className={styles['input-remember']}>
              <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => {
                    setRememberMe(e.target.checked)
                    dispatch(updaterRememberMe(e.target.checked))
                  }}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className={styles['sign-in-button']} type="submit">
              Sign In
            </button>
          </form>
        </section>
      </section>
  );
};

export default SignIn;