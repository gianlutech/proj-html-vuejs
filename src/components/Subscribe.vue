<template>
  <div>
    <h2>Subscribe to Newsletter</h2>
    <div class="input">
      <input
        class="py-1 mx-2"
        type="text"
        placeholder="Inserisci la tua mail..."
      />
      <button type="button" class="btn btn-dark px-5">SEND</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscibe",
};
</script>

<style lang="scss">
.input {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>