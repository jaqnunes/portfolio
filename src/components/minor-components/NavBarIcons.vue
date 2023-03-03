<template>
  <div>
    <v-btn @click="GlobalStore.scroll('about')">
      ABOUT ME
    </v-btn>
    <v-btn @click="GlobalStore.scroll('portfolio')">
      PORTFOLIO
    </v-btn>
    <v-btn @click="GlobalStore.scroll('contact')">
      CONTACT ME
    </v-btn>
    <v-btn @click="ThemeStore.toggleTheme()" :icon="ThemeStore.getThemeIcon" size="large"></v-btn>
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

