<template>
  <v-app id="app" :class="ThemeStore.getTheme">
    <v-container fluid>
      <NavBar />
      <div class="content">
        <AboutMeSection id="about" />
        <PortfolioSection id="portfolio" />
      </div>
      <ContactMeFooter id="contact" />
      <ScrollUpButton />
    </v-container>
  </v-app>
</template>

<script>
import { mapStores } from "pinia";
import useGlobalStore from "./stores/GlobalStore";
import useThemeStore from "./stores/ThemeStore";
import NavBar from "./components/NavBar.vue";
import AboutMeSection from "./components/AboutMe.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ContactMeFooter from "./components/ContactMeFooter.vue";
import ScrollUpButton from "./components/minor-components/ScrollUpButton.vue";

export default {
  components: {
    NavBar,
    AboutMeSection,
    PortfolioSection,
    ContactMeFooter,
    ScrollUpButton,
  },
  computed: {
    ...mapStores(useThemeStore),
    ...mapStores(useGlobalStore),
  },
};
</script>


<style scoped>
.v-container {
  padding: 0;
}

.content {
  padding: 0 5rem;
}
</style>
