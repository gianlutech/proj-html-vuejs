<template>
  <div class="footer-links px-3">
    <h5>
      <strong>{{ title }}</strong>
    </h5>
    <ul>
      <li v-for="(link, index) in links" :key="index" class="my-3">
        <a :href="link.url"
          ><i class="fas fa-angle-right"></i>{{ link.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterMenu",
  props: ["links", "title"],
};
</script>

<style lang="scss">
.footer-links {
  flex-basis: calc(100% / 4);

  ul {
    padding: 0;
    li {
      list-style: none;

      a {
        text-decoration: none;
        color: black;
        i {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>