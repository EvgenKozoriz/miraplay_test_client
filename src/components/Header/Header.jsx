import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/triangle.svg";
import loginLogo from "../../assets/login-logo.svg";
import logoutLogo from "../../assets/logout-logo.svg";
import { logout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logoContainer}>
          <h2>MiraPlay</h2>
          <h3>CloudGaming</h3>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </Link>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/games">Ігри</Link>
          </li>
          <li>
            <Link to="/platform">Про Платформу</Link>
          </li>
          <li>
            <Link to="/rent">Здай ПК в оренду</Link>
          </li>
          <li>
            <Link to="/news">Новини</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.rightSection}>
        {isAuth ? (
          <div className={styles.auth} onClick={() => dispatch(logout())}>
            <img src={logoutLogo} alt="logout-logo" />
          </div>
        ) : (
          <Link className={styles.authBtn} to="/auth">
            <div className={styles.auth}>
              <img src={loginLogo} alt="login-logo" />
            </div>
          </Link>
        )}

        <button className={styles.downloadButton}>Скачати Клієнт</button>
      </div>
    </header>
  );
};

export default Header;
