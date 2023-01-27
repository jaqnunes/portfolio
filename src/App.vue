<template>
  <v-app id="app" :class="ThemeStore.getTheme">
    <NavBar />
    <v-container fluid></v-container>
  </v-app>
</template>

<script>
import { mapStores } from "pinia";
import useThemeStore from "./stores/ThemeStore";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapStores(useThemeStore),
  },
};
</script>

