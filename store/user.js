import { userLoginAPI } from "../api";

export const state = () => ({
  isLogin: false,
  token: ""
});

export const getters = {
  getterValue: state => {
    return state.value;
  }
};

export const mutations = {
  updateValue: (state, payload) => {
    state.value = payload;
  }
};

export const actions = {
  async userLogin({ commit }, userData) {
    const { data } = await userLoginAPI(userData);
    console.log(data);
  },
  updateActionValue({ commit }) {
    commit("updateValue", payload);
  }
};
