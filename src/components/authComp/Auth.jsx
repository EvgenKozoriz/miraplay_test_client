import React, { useState, useRef, useEffect } from "react";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const [isLogin, setLogin] = useState(true);
  const loginBtnRef = useRef(null);

  useEffect(() => {
    if (isAuth) {
      navigate('/games');
    }
  }, [isAuth]);

  useEffect(() => {
    loginBtnRef.current.focus();
  }, []);

  return (
    <div className={styles.auth}>
      <div className={styles.navBlock}>
        <button
          className={styles.loginBtn}
          onClick={() => setLogin(true)}
          ref={loginBtnRef}
        >
          Login
        </button>
        <button className={styles.loginBtn} onClick={() => setLogin(false)}>
          Registration
        </button>
      </div>
      <div className={styles.authBlock}>
        <h2 className={styles.authTitle}>Відчуй нові відчуття</h2>
        <h3 className={styles.authSubTtile}>
          Війди, щоб грати на максималках в свої улюблені ігри
        </h3>
        {isLogin ? <Login /> : <Registration />}
      </div>
    </div>
  );
};

export default Auth;
