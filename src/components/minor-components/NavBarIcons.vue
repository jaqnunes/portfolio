<template>
  <div>
    <v-btn @click="GlobalStore.scroll('about')" class="navBar--icon navBar--button">
      ABOUT ME
    </v-btn>
    <v-btn @click="GlobalStore.scroll('portfolio')" class="navBar--icon navBar--button">
      PORTFOLIO
    </v-btn>
    <v-btn @click="GlobalStore.scroll('contact')" class="navBar--icon navBar--button">
      CONTACT ME
    </v-btn>
    <v-btn @click="ThemeStore.toggleTheme()" class="navBar--icon navBar--button" :icon="ThemeStore.getThemeIcon"
      size="large"></v-btn>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useThemeStore from "../../stores/ThemeStore.js";
import useGlobalStore from "../../stores/GlobalStore";

export default {
  name: "NavBarIcons",
  computed: {
    ...mapStores(useThemeStore),
    ...mapStores(useGlobalStore),
  },
};
</script>

