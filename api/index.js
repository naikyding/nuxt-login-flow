import axios from "axios";
import { userLogin } from "./user";

export const requestAPI = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/"
});

export const userLoginAPI = userLogin;
