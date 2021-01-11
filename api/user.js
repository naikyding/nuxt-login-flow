import { requestAPI } from "./index";

export const userLogin = userData => requestAPI.post("/login", userData);
