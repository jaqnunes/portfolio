<template>
  <div class="navBar">
    <v-toolbar color="transparent">
      <v-toolbar-title>
        <h1>
          <a
            href="https://github.com/jaqnunes"
            class="navBar--title navBar--icon"
          >
            &lt;/JACKELYNE&gt;
          </a>
        </h1>
      </v-toolbar-title>
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
    </v-toolbar>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useThemeStore from "../stores/ThemeStore";

export default {
  name: "NavBar",
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

<style scoped lang="scss">
h1 {
  padding-right: 7rem;
}
.navBar {
  margin-left: 1.2em;
  margin-right: 1.2em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 2rem;
  padding-bottom: 2rem;

  &--title {
    text-decoration: none;
    font-size: 1.6rem;
  }

  &--icon {
    font-family: "Source Code Pro", monospace, Arial, Helvetica, sans-serif;
    color: #ff6701;
    letter-spacing: 0.15rem;
    transition: 0.7s;
    margin-right: 1.5rem;
  }

  &--icon:hover {
    text-shadow: 0px 0px 10px #ff3b00, 0px 0px 20px #ff3b00;
  }

  &--button {
    font-size: 0.9rem;
  }
}
</style>