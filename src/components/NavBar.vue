<template>
  <v-app-bar 
    class="navbar"
    flat 
    app
    color="#151314"
    density="compact"
  >
    <v-btn icon>
      <v-icon icon="fas fa-cat" />
    </v-btn>
    <v-spacer />
      <v-btn
        class="hidden md:block mr-8"
        v-for="item in navigationItems"
        :key="item.value"
        @click="scrollTo(item.value)"
      >
        {{ item.title }}
      </v-btn>
    <v-app-bar-nav-icon 
      @click="isMenuOpen = !isMenuOpen"
      class="md:hidden"
    />
  </v-app-bar>

  <v-navigation-drawer
    class="navigation-drawer"
    app
    v-model="isMenuOpen"
    temporary
    location="right"
  >
    <v-col 
      v-for="item in navigationItems"
      :key="item.value"
    >
      <v-btn
        class="drawer-buttons"
        flat
        @click="scrollTo(item.value)"
      >
        {{ item.title }}
      </v-btn>
    </v-col>
  </v-navigation-drawer>
</template>
  
<script>
  
export default {
  name: 'NavBar',
  data: () => ({
    title: ' My Portfolio',
    isMenuOpen: false,
    navigationItems: [
      { title: 'Home', value: 'home' },
      { title: 'About', value: 'about' },
      { title: 'Projects', value: 'projects' },
      { title: 'Contact', value: 'contact' }
    ],
  }),
  methods: {
    scrollTo(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid #1d1d1d;
}
.navigation-drawer {
  background-color: #151314;
}
.drawer-buttons {
  width: 100%;
}
</style>