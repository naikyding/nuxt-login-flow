import axios from "axios";
import { userLogin, testToken } from "./user";

export const requestAPI = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/"
});

export const userLoginAPI = userLogin;
export const testTokenAPI = testToken;
