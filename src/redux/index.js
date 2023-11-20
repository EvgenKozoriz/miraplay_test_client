import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import gamesReduser from "./gamesSlice";
import thunk from "redux-thunk";

const reducer = {
  user: userReducer,
  games: gamesReduser,
};

export const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});
