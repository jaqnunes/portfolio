<template>
  <v-app id="app" :class="ThemeStore.getTheme">
    <NavBar />
    <v-container fluid>
      <AboutMeSection id="about" />
      <PortfolioSection id="portfolio" />
      <ContactMeFooter id="contact" />
    </v-container>
  </v-app>
</template>

<script>
import { mapStores } from "pinia";
import useThemeStore from "./stores/ThemeStore";
import NavBar from "./components/NavBar.vue";
import AboutMeSection from "./components/AboutMe.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ContactMeFooter from "./components/ContactMeFooter.vue";

export default {
  components: {
    NavBar,
    AboutMeSection,
    PortfolioSection,
    ContactMeFooter,
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
