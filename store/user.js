// user api 相關文件

import { userLoginAPI } from "../api";

export const state = () => ({
  isLogin: false,
  token: ""
});

export const mutations = {};

export const actions = {
  async userLogin({ commit }, userData) {
    const { data } = await userLoginAPI(userData);
    console.log(data);
  }
};
