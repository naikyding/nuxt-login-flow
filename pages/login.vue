<template>
  <div>
    <input v-model="form.username" type="text" />
    <input v-model="form.password" type="password" />
    <button @click="userLogin">LOGIN</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      username: "",
      password: ""
    }
  }),

  methods: {
    userLogin() {
      console.log("LOGIN");
    }
  }
};
</script>

<style lang="scss" scoped></style>
