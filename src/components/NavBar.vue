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
  border-bottom: solid #e5e7eb;

  &--title:link {
    transition: 0.7s;
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 0.25rem;
  }

  &--title:hover {
    letter-spacing: 0.833rem;
  }


  &--icon {
    color: #5f3dc4;
    font-weight: 900;
    letter-spacing: 0.15rem;
    margin-right: 1.5rem;
  }

  &--button {
    font-size: 1.2rem;
  }
}
</style>