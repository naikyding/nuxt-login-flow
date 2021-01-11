<template>
  <div>
    <template v-if="!isLogin">
      <input v-model="form.username" type="text" />
      <input v-model="form.password" type="password" />
      <button @click="userLogin">LOGIN</button>
    </template>

    <template v-else>
      <p><button @click="getData">打需要 token 的 api</button></p>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    form: {
      username: "mike",
      password: "7654321"
    }
  }),

  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin
    })
  },

  mounted() {
    if (this.$cookie.get("token")) {
      this.$store.commit("user/USER_LOGIN_SUCCESS", { success: true });
    } else this.$store.dispatch("user/logOut");
  },

  methods: {
    userLogin() {
      this.$store.dispatch("user/userLogin", this.form);
    },

    getData() {
      this.$store.dispatch("user/get_data");
    }
  }
};
</script>

<style lang="scss" scoped></style>
