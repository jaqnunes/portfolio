<template>
  <div>
    <v-toolbar id="navBar" :class="ThemeStore.getTheme" :color="navBarColor">
      <v-toolbar-title>
        <a href=" https://github.com/jaqnunes" target="_blank" class="title">
          &ltJACKELYNE/&gt
        </a>
      </v-toolbar-title>
      <NavBarIcons />
    </v-toolbar>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import NavBarIcons from "./minor-components/NavBarIcons.vue";
import useThemeStore from "../stores/ThemeStore";

export default {
  name: "NavBar",
  components: {
    NavBarIcons,
  },
  computed: {
    ...mapStores(useThemeStore),
    navBarColor() {
      return this.ThemeStore.isDarkTheme ? '#181818' : '#f8f8f8';
    }
  },
};
</script>

<style lang="scss">
#navBar {
  transition: 0.7s;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  padding: 0.35rem 13rem;

  border-bottom: solid #e5e7eb;

  a {
    transition: 0.5s;
    text-decoration: none;
    font-size: 1.15rem;
    letter-spacing: 0.25rem;
    font-weight: 900;
    margin-right: 1.5rem;
    color: #313131;
  }

  a:hover {
    letter-spacing: 0.833rem;
  }

  .v-btn {
    font-size: 1rem;
    font-weight: 900;
    margin-right: 1.5rem;
    color: #313131;
  }

  .v-btn:hover {
    color: #5f3dc1;
  }

  &.dark {
    transition: 0.7s;
    border-bottom: 1px solid #2f2f2f;

    a {
      color: #dddddd;
    }

    .v-btn {
      color: #dddddd;
    }

    .v-btn:hover {
      color: #5f3dc1;
    }
  }
}
</style>