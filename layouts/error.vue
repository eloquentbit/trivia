<template>
  <div>
    <h1 clas="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link to="/" v-id="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.title {
  font-size: 5em;
}
.info {
  font-weight: 300;
  color: #9AABB1;
}
</style>
