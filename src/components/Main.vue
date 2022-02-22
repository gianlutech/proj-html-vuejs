<template>
  <div>
    <IntroForum />
    <Description />
    <Title :news="news" :prenews="prenews" />
    <section id="news-cards" class="container">
      <NewsCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </section>
  </div>
</template>

<script>
import IntroForum from "./IntroForum.vue";
import Description from "./Description.vue";
import NewsCard from "./NewsCard.vue";
import Title from "./Title.vue";
export default {
  name: "Main",
  components: {
    IntroForum,
    Description,
    Title,
    NewsCard,
  },

  data() {
    return {
      news: "All the latest news",
      prenews: "PHASELLUS EGET METUS",

      products: [
        {
          image: "../assets/images/post_feat_img_25-700x441.jpg",
          title: "Morbi vitae dui euismod vulputate sollicitudin",
          date: "October 11th, 2015 | 2 Comments",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cupiditate recusandae dolor quod, consectetur explicabo qui, ipsa quasi quisquam corporis ab? Rem dicta voluptatibus doloribus deserunt blanditiis ex? Esse, ab?",
        },
        {
          image: "../assets/images/post_feat_img_24-700x441.jpg",
          title: "Morbi vitae dui euismod vulputate sollicitudin",
          date: "October 11th, 2015 | 2 Comments",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cupiditate recusandae dolor quod, consectetur explicabo qui, ipsa quasi quisquam corporis ab? Rem dicta voluptatibus doloribus deserunt blanditiis ex? Esse, ab?",
        },
        {
          image: "../assets/images/post_feat_img_23-700x441.jpg",
          title: "Morbi vitae dui euismod vulputate sollicitudin",
          date: "October 11th, 2015 | 2 Comments",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cupiditate recusandae dolor quod, consectetur explicabo qui, ipsa quasi quisquam corporis ab? Rem dicta voluptatibus doloribus deserunt blanditiis ex? Esse, ab?",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#news-cards {
  display: flex;
  flex-wrap: wrap;
}
</style>