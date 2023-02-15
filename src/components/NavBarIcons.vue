<template>
  <div>
    <v-btn
      @click="scroll('about')"
      variant="outlined"
      class="navBar--icon navBar--button"
    >
      ABOUT ME
    </v-btn>
    <v-btn
      @click="scroll('PORTFOLIO')"
      variant="outlined"
      class="navBar--icon navBar--button"
    >
      PORTFOLIO
    </v-btn>
    <v-btn
      @click="scroll('contact')"
      variant="outlined"
      class="navBar--icon navBar--button"
    >
      CONTACT ME
    </v-btn>
    <v-btn
      @click="ThemeStore.toggleTheme()"
      variant="outlined"
      class="navBar--icon navBar--button"
      :icon="ThemeStore.getThemeIcon"
      size="large"
    ></v-btn>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useThemeStore from "../stores/ThemeStore";

export default {
  name: "NavBarIcons",
  computed: {
    ...mapStores(useThemeStore),
  },
};
</script>

