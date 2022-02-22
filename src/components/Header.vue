<template>
  <div id="header">
    <div class="container d-flex align-items-center justify-content-between">
      <img id="brand-logo" src="../assets/images/logo.png" alt="" />
      <nav>
        <ul class="d-flex align-items-center m-0">
          <li v-for="link in links" :key="link.text">
            <a :href="link.url">{{ link.text }}</a>
          </li>
          <li><button class="secondary-button">JOIN US</button></li>
          <li>
            <a><i class="fas fa-search"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["links"],
};
</script>

<style lang="scss">
#brand-logo {
  width: 150px;
  cursor: pointer;
}
#header {
  background-color: #26a9bd;
  min-height: 70px;
  padding: 10px 0;
  ul {
    display: flex;
    li {
      list-style-type: none;
      padding: 10px 15px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>