<template>
  <div class="forum-card">
    <div>{{ forum.icon }}</div>
    <h6 class="my-3">{{ forum.text }}</h6>
  </div>
</template>

<script>
export default {
  name: "ForumCard",
  props: ["forum"],
};
</script>

<style lang="scss" scoped>
.forum-card {
  flex-basis: 20%;
  margin: 20px;

  border-top: 2px solid blue;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  i {
    padding: 15px;
    background-color: #fc8c5e;
    display: block;
  }
}
</style>