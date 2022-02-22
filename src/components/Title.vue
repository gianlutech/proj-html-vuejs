<template>
  <div class="py-5 text-center title">
    <h6>{{ prenews }}</h6>
    <h2 class="py-4">
      <strong>{{ news }}</strong>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["news", "prenews"],
};
</script>

<style lang="scss" scoped>
h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background-color: orange;
  margin: 1.5rem auto;
}
</style>