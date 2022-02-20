<template>
  <div id="app">
    <Header :links="links" />
    <Main />
    <FooterTop />
    <FooterBottom />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import FooterTop from "./components/FooterTop.vue";
import FooterBottom from "./components/FooterBottom.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    FooterTop,
    FooterBottom,
  },

  data() {
    return {
      links: [
        { text: "Home", url: "#", active: true },
        { text: "Apple", url: "#", active: false },
        { text: "Microsoft", url: "#", active: false },
        { text: "Android", url: "#", active: false },
        { text: "Forums", url: "#", active: false },
        { text: "Contact us", url: "#", active: false },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>
