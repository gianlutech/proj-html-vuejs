<template>
  <div class="news-card">
    <img :src="product.image" :alt="product.title" />
    <h6>{{ product.title }}</h6>
    <address>{{ product.date }}</address>
    <p>{{ product.text }}</p>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["product"],
};
</script>

<style lang="scss" scoped>
.news-card {
  flex-basis: 30%;
  font-size: 12px;
  margin: 10px;
}
</style>