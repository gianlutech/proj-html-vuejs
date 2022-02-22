<template>
  <div class="jumbo my-3">
    <div class="p-5 jumbo-contain">
      <h5>FEATURED ARTICLE</h5>
      <h2>Cras malesuada et orci eget pharetra</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ab
        minima voluptates iste reprehenderit odit modi quia?
      </p>
      <button class="secondary-button fs-6">READ MORE ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbo",
};
</script>

<style lang="scss">
.jumbo {
  background-image: url("../assets/images/featured_article_1_bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 350px;
  width: 100%;
  color: white;
  position: relative;

  .jumbo-contain {
    position: absolute;
    bottom: 0;
  }
}
</style>