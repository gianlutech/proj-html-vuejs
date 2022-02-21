<template>
  <div>
    <div class="container">
      <div class="d-flex">
        <FooterMenu
          v-for="(menu, index) in footerMenus"
          :key="index"
          :title="menu.title"
          :links="menu.links"
        />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import FooterMenu from "./FooterMenu.vue";
export default {
  name: "FooterTop",
  components: {
    FooterMenu,
  },

  data() {
    return {
      footerMenus: [
        {
          title: "AVADA TECH FORUM",
          links: [
            {
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sit",
            },
          ],
        },
        {
          title: "POPULAR TOPICS",
          links: [
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
          ],
        },
        {
          title: "RECENT TOPICS",
          links: [
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
          ],
        },
        {
          title: "LATEST REPLIES",
          links: [
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
            { text: "Nam a dolor volutpat massa auctor semper", url: "#" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>