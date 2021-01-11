// user api 相關文件

import { getMetadata } from "core-js/fn/reflect";
import { userLoginAPI, testTokenAPI } from "../api";

export const state = () => ({
  isLogin: false,
  token: ""
});

export const mutations = {
  USER_LOGIN_SUCCESS(state, data) {
    state.isLogin = data.success;
    // state.token = data.token;
  },

  USER_LOGOUT(state) {
    state.isLogin = false;
  }
};

export const actions = {
  async userLogin({ commit }, userData) {
    try {
      const { data } = await userLoginAPI(userData);
      if (!data.success) return console.log(`帳號或密碼錯誤!`);

      commit("USER_LOGIN_SUCCESS", {
        success: data.success
        // token: data.token
      });

      this.$cookie.set("token", data.token);
    } catch (err) {
      console.log(err.response);
    }
  },

  async get_data() {
    try {
      const { data } = await testTokenAPI(this.$cookie.get("token"));
      console.log(data.success);
    } catch (err) {
      console.log(err.response.data.error_message);
    }
  },

  logOut({ commit }) {
    this.$cookie.removeAll();
    commit("USER_LOGOUT");
  }
};
