<template>
  <v-app id="app" :class="ThemeStore.getTheme">
    <NavBar />
    <v-container fluid>
      <AboutMeSection />
      <PortfolioSection />
    </v-container>
  </v-app>
</template>

<script>
import { mapStores } from "pinia";
import useThemeStore from "./stores/ThemeStore";
import NavBar from "./components/NavBar.vue";
import AboutMeSection from "./components/AboutMe.vue";
import PortfolioSection from "./components/PortfolioSection.vue";

export default {
  components: {
    NavBar,
    AboutMeSection,
    PortfolioSection,
  },
  computed: {
    ...mapStores(useThemeStore),
  },
};
</script>


<style scoped>
.v-container {
  padding: 0;
}
</style>
