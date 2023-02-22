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
      <NavBarIcons />
    </v-toolbar>
  </div>
</template>

<script>
import NavBarIcons from "./NavBarIcons.vue";

export default {
  name: "NavBar",
  components: {
    NavBarIcons,
  },
};
</script>

<style lang="scss">
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
  padding: 1rem 4rem;

  &--title:link {
    text-decoration: none;
    font-size: 2rem;
  }

  &--icon {
    font-family: "Source Code Pro", monospace, Arial, Helvetica, sans-serif;
    font-weight: 900;
    letter-spacing: 0.15rem;
    transition: 0.7s;
    margin-right: 1.5rem;
  }

  &--button {
    font-size: 1.2rem;
  }
}
</style>