<template>
  <div>
    <input v-model="form.username" type="text" />
    <input v-model="form.password" type="password" />
    <button @click="userLogin">LOGIN</button>

    <p><button>打需要 token 的 api</button></p>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      username: "mike",
      password: "7654321"
    }
  }),

  mounted() {
    this.$store.dispatch("user/userLogin", this.form);
  },

  methods: {
    userLogin() {
      console.log("LOGIN");
    }
  }
};
</script>

<style lang="scss" scoped></style>
