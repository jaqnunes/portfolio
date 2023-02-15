<template>
  <div>
    <v-toolbar class="navBar" color="transparent">
      <v-toolbar-title>
        <a
          href="https://github.com/jaqnunes"
          target="_blank"
          class="navBar--title navBar--icon"
        >
          Jackelyne
        </a>
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
.v-toolbar-title {
  line-height: 3.7rem;
}

.v-btn--icon.v-btn--density-default {
  width: 50px;
  height: 50px;
}

.navBar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem 2rem;

  &--title:link {
    text-decoration: none;
    font-size: 2rem;
  }

  &--icon {
    font-family: "Source Code Pro", monospace, Arial, Helvetica, sans-serif;
    font-weight: 900;
    color: #a33aff;
    letter-spacing: 0.15rem;
    transition: 0.7s;
    margin-right: 1.5rem;
  }

  &--icon:hover {
    text-shadow: 0px 0px 10px #aa00ff, 0px 0px 20px #aa00ff;
  }

  &--button {
    font-size: 0.9rem;
  }
}
</style>