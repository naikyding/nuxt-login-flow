<template>
  <div class="index">
    <LazyLogo1 v-if="Logo1" class="margin-bottom" />
    <LazyLogo2 v-if="Logo2" class="margin-bottom" />

    <template v-if="!isLogin">
      <input v-model="form.username" type="text" />
      <input v-model="form.password" type="password" />
      <button @click="userLogin">LOGIN</button>
    </template>

    <template v-else>
      <p class="text-center">
        <button @click="getData">打需要 token 的 api</button>
      </p>
    </template>

    <button @click="Logo1 = !Logo1">SHOW1</button>
    <button @click="Logo2 = !Logo2">SHOW2</button>
    <Button />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    form: {
      username: "mike",
      password: "7654321"
    },
    show: false,
    Logo1: false,
    Logo2: false
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

<style lang="css" scoped>
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text-center {
  text-align: center;
}
.margin-bottom {
  margin-bottom: 20px;
}
</style>
