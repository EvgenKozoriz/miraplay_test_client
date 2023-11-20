import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("test1@mail.com");
  const [password, setPassword] = useState("test123");
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setIsloading(true);
      await dispatch(login(email, password));
      navigate("/games");
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className={styles.loginBlock}>
      <h2 className={styles.loginTitle}>Login</h2>
      <label className={styles.inputLabel}>Введіть ваш email:</label>
      <input
        className={styles.loginInput}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="your email"
      />
      <label className={styles.inputLabel}>Введіть ваш пароль:</label>
      <input
        className={styles.loginInput}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="your password"
      />
      <button className={styles.submitBtn} onClick={handleLogin}>
        Login
      </button>
      {isLoading && (
        <div className={styles.loadingWave}>
          <div className={styles.loadingBar}></div>
          <div className={styles.loadingBar}></div>
          <div className={styles.loadingBar}></div>
          <div className={styles.loadingBar}></div>
        </div>
      )}
    </div>
  );
};

export default Login;
