import Cookie from "js-cookie";

export default (context, inject) => {
  inject("cookie", {
    set(key = "", value = "") {
      Cookie.set(key, value);
    },

    get(key = "") {
      const resData = Cookie.get(key);
      if (resData) return resData;
      return "";
    },

    remove(key = "") {
      Cookie.remove(key);
    },

    removeAll() {
      Object.keys(Cookie.get()).forEach(item => Cookie.remove(item));
    }
  });
};
