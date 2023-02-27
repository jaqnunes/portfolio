<template>
  <div>
    <v-btn @click="scrollUp('navigation-bar')" icon="mdi-arrow-up" id="scroll-up-button">
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ScrollUpButton",
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
};
</script>

<style scoped>
#scroll-up-button {
  position: fixed;
  right: 50px;
  bottom: 50px;
  color: #fff;
  background-color: #5f3dc1;
}
</style>
