<template>
  <div>
    <IntroForum />
    <Description />
    <Title :news="news" :prenews="prenews" />
    <section class="cards container">
      <NewsCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
      <Jumbo />
      <NewsCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </section>
    <Banner />
    <section class="forum section bg-grey">
      <div class="container">
        <Title :news="news" :prenews="prenews" />
        <div class="forum-cards cards">
          <ForumCard
            v-for="(forum, index) in forums"
            :key="index"
            :forum="forum"
          />
        </div>
      </div>
    </section>
    <Banner />
    <section class="community">
      <CommunityJumbo />
    </section>
    <section class="sub bg-grey py-5 text-center">
      <Subscribe />
    </section>
  </div>
</template>

<script>
import IntroForum from "./IntroForum.vue";
import Description from "./Description.vue";
import NewsCard from "./NewsCard.vue";
import Title from "./Title.vue";
import Jumbo from "./Jumbo.vue";
import Banner from "./Banner.vue";
import ForumCard from "./ForumCard.vue";
import CommunityJumbo from "./CommunityJumbo.vue";
import Subscribe from "./Subscribe.vue";
export default {
  name: "Main",
  components: {
    IntroForum,
    Description,
    Title,
    NewsCard,
    Jumbo,
    Banner,
    ForumCard,
    CommunityJumbo,
    Subscribe,
  },

  data() {
    return {
      news: "All the latest news",
      prenews: "PHASELLUS EGET METUS",

      products: [
        {
          image: require("../assets/images/post_feat_img_25-320x202.jpg"),
          title: "Morbi vitae dui euismod vulputate sollicitudin",
          date: "October 11th, 2015 | 2 Comments",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cupiditate recusandae dolor quod, consectetur explicabo qui, ipsa quasi quisquam corporis ab? Rem dicta voluptatibus doloribus deserunt blanditiis ex? Esse, ab?",
        },

        {
          image: require("../assets/images/post_feat_img_24-320x202.jpg"),
          title: "Morbi vitae dui euismod vulputate sollicitudin",
          date: "October 11th, 2015 | 2 Comments",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cupiditate recusandae dolor quod, consectetur explicabo qui, ipsa quasi quisquam corporis ab? Rem dicta voluptatibus doloribus deserunt blanditiis ex? Esse, ab?",
        },

        {
          image: require("../assets/images/post_feat_img_23-320x202.jpg"),
          title: "Morbi vitae dui euismod vulputate sollicitudin",
          date: "October 11th, 2015 | 2 Comments",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cupiditate recusandae dolor quod, consectetur explicabo qui, ipsa quasi quisquam corporis ab? Rem dicta voluptatibus doloribus deserunt blanditiis ex? Esse, ab?",
        },
      ],

      forums: [
        {
          icon: "http://www.w3.org/2000/svg",
          text: "News & Community",
        },
        {
          icon: '<font-awesome-icon icon="fas fa-file-alt" />',
          text: "News & Community",
        },
        {
          icon: '<font-awesome-icon icon="fas fa-file-alt" />',
          text: "News & Community",
        },
        {
          icon: '<font-awesome-icon icon="fas fa-file-alt" />',
          text: "News & Community",
        },
        {
          icon: '<font-awesome-icon icon="fas fa-file-alt" />',
          text: "News & Community",
        },
        {
          icon: '<font-awesome-icon icon="fas fa-file-alt" />',
          text: "News & Community",
        },
        {
          icon: '<font-awesome-icon icon="fas fa-file-alt" />',
          text: "News & Community",
        },
        {
          icon: '<font-awesome-icon icon="fas fa-file-alt" />',
          text: "News & Community",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
}
.community {
  background-image: url("../assets/images/join_now_cta_bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px 400px;
}
</style>