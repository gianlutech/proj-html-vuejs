<template>
  <div>
    <IntroForum />
    <Description />
    <News />
  </div>
</template>

<script>
import IntroForum from "./IntroForum.vue";
import Description from "./Description.vue";
import News from "./News.vue";
export default {
  name: "Main",
  components: {
    IntroForum,
    Description,
    News,
  },
};
</script>

<style>
</style>