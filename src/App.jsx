import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { auth } from "./redux/actions/user";
import { useEffect } from "react";
import Auth from "./components/authComp/Auth";
import GameList from "./components/gameList/GameList";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import DevComp from "./components/devComp/DevComp";

function App() {
  const dispath = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    dispath(auth());
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        {!isAuth && <Navigate to={"/auth"} />}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/platform" element={<DevComp />} />
          <Route path="/rent" element={<DevComp />} />
          <Route path="/news" element={<DevComp />} />
          <Route path="/faq" element={<DevComp />} />
        </Routes>
      </div>
      <Footer />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
}

export default App;
