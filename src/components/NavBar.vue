<template>
  <div class="navBar">
    <v-toolbar color="transparent">
      <v-toolbar-title>
        <a href="https://github.com/jaqnunes" class="navBarTitle navBarIcon">
          &lt;/JACKELYNE&gt;
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" class="navBarIcon navBarButton">
        CONTACT ME
      </v-btn>
      <v-btn
        variant="outlined"
        class="navBarIcon navBarButton"
        icon="mdi-lightbulb-on"
        size="large"
      ></v-btn>
    </v-toolbar>
  </div>
</template>

<style scoped>
.navBar {
  margin: 0.5rem;
}
.navBarIcon {
  font-family: "Source Code Pro", monospace, Arial, Helvetica, sans-serif;
  color: #b14315;
  letter-spacing: 0.15rem;
  transition: 0.7s;
  margin-right: 1.5rem;
}

.navBarIcon:hover {
  text-shadow: 0px 0px 10px #ea4d0a77, 0px 0px 20px #ea4d0a77;
}

.navBarTitle {
  text-decoration: none;
  font-size: 1.6rem;
}

.navBarButton {
  font-size: 1.2rem;
}
</style>