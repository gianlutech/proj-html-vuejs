<template>
  <div class="container py-4 d-flex justify-content-between align-items-center">
    <p class="">
      &copy;Copyright 2012 - 2020 | Avada Theme by
      <strong>Theme Fusion</strong> | All Rights Reserved | Powered by
      <strong>WordPress</strong>
    </p>
    <div class="social">
      <i class="fab fa-facebook-f bg-blue"></i>
      <i class="fab fa-twitter bg-sky"></i>
      <i class="fab fa-instagram bg-dark-blue"></i>
      <i class="fab fa-youtube bg-red"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBottom",
};
</script>

<style lang="scss" scoped>
p {
  font-size: 10px;
  margin: 0;
}
i {
  padding: 15px;
  border-radius: 50%;
  color: white;
  margin-right: 5px;
}
</style>