import axios from "axios";
import { setUser } from "../userSlice";

const BASE_URL = 'https://miraplay-test-server-6wyk.onrender.com'

// "http://localhost:5000/api/auth/registration"
// "http://localhost:5000/api/auth/login"
// "http://localhost:5000/api/auth/auth"

export const registration = async (email, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/registration`,
      {
        email,
        password,
      }
    );
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e.response.data.message);
      localStorage.removeItem("token");
    }
  };
};
