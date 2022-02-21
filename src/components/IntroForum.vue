<template>
  <div id="intro" class="relative">
    <div class="center container">
      <h1 class="text-white fw-800">Tech Forum!</h1>
      <p class="text-white my-4">
        Discuss all the latest technology news and trends
      </p>
      <button class="primary-button btn-lg">GET AVADA NOW!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroForum",
};
</script>

<style lang="scss">
#intro {
  min-height: 500px;
  background-image: url("../assets/images/home_slider_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>