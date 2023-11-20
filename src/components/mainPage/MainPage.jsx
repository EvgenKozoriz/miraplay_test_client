import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const userEmail = useSelector((state) => state.user.currentUser.email);
  const dispatch = useDispatch();
  return (
    <div className={styles.mainPage}>
      <h1>Main Page</h1>
      {isAuth && <h1>Hello user with email: {userEmail}</h1>}
      {isAuth && <button onClick={() => dispatch(logout())}>Log out</button>}
    </div>
  );
};

export default MainPage;
