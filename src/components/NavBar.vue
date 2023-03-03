<template>
  <div>
    <v-toolbar class="navBar" color="transparent">
      <v-toolbar-title>
        <a href="https://github.com/jaqnunes" target="_blank" class="navBar--title navBar--icon">
          &ltJACKELYNE/&gt
        </a>
      </v-toolbar-title>
      <NavBarIcons />
    </v-toolbar>
  </div>
</template>

<script>
import NavBarIcons from "./minor-components/NavBarIcons.vue";

export default {
  name: "NavBar",
  components: {
    NavBarIcons,
  },
};
</script>

<style lang="scss">
.navBar {
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.35rem 13rem;
  border-bottom: solid #e5e7eb;

  &--title:link {
    transition: 0.5s;
    text-decoration: none;
    font-size: 1.15rem;
    letter-spacing: 0.25rem;
  }

  &--title:hover {
    letter-spacing: 0.833rem;
  }


  &--icon {
    color: #5f3dc4;
    font-weight: 900;
    margin-right: 1.5rem;
  }

  &--button {
    font-size: 1rem;
  }
}
</style>