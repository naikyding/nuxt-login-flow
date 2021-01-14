<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index.id">
        {{ mountain.title }}
      </li>
    </ul>

    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountains: []
    };
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(res =>
      res.json()
    );
  }
};
</script>
