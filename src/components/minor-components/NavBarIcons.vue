<template>
  <div>
    <v-btn
      @click="scroll('about')"
      class="navBar--icon navBar--button"
    >
      ABOUT ME
    </v-btn>
    <v-btn
      @click="scroll('PORTFOLIO')"
      class="navBar--icon navBar--button"
    >
      PORTFOLIO
    </v-btn>
    <v-btn
      @click="scroll('contact')"
      class="navBar--icon navBar--button"
    >
      CONTACT ME
    </v-btn>
    <v-btn
      @click="ThemeStore.toggleTheme()"
      class="navBar--icon navBar--button"
      :icon="ThemeStore.getThemeIcon"
      size="large"
    ></v-btn>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useThemeStore from "../../stores/ThemeStore.js";

export default {
  name: "NavBarIcons",
  computed: {
    ...mapStores(useThemeStore),
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

