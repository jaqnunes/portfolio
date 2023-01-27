<template>
  <div class="navBar">
    <v-toolbar color="transparent">
      <v-toolbar-title>
        <a
          href="https://github.com/jaqnunes"
          class="navBar--title navBar--icon"
        >
          &lt;/JACKELYNE&gt;
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" class="navBar--icon navBar--button">
        CONTACT ME
      </v-btn>
      <v-btn
        @click="toggleTheme()"
        variant="outlined"
        class="navBar--icon navBar--button"
        :icon="'mdi-lightbulb-' + `${isDarkMode ? 'on' : 'off'}`"
        size="large"
      ></v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  created() {
    this.toggleTheme();
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.className = this.isDarkMode ? "dark" : "light";
    },
  },
};
</script>

<style scoped lang="scss">
.navBar {
  padding: 0.5rem;

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
    font-size: 1.2rem;
  }
}
</style>