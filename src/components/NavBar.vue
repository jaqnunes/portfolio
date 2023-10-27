<template>
    <v-app-bar 
      flat 
      app
      color="#111111"
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
      app
      v-model="isMenuOpen"
      temporary
      location="right"
    >
      <v-col 
        v-for="item in navigationItems"
        :key="item.value"
      >
        <p @click="scrollTo(item.value)"> {{ item.title }} </p>
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
  