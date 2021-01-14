<template>
  <div>
    List
    <LazyList v-show="show" :data="propsData" />
    <button @click="show = !show">Show List</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    propsData: {
      id: 1,
      name: "123"
    }
  })
};
</script>

<style lang="scss" scoped></style>
