<template>
  <div>
    <v-btn @click="GlobalStore.scroll()" icon="mdi-arrow-up" id="scroll-up-button">
    </v-btn>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useGlobalStore from '../../stores/GlobalStore';
export default {
  name: "ScrollUpButton",
  computed: {
    ...mapStores(useGlobalStore),
  }
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
