// api 入口文件
import { requestAPI } from "./index";

export const userLogin = userData => requestAPI.post("/login", userData);

// 帶 headers Authorization 打 api
export const testToken = userToek => {
  requestAPI.defaults.headers.common["Authorization"] = userToek;
  return requestAPI.post("/testToken", userToek);
};
