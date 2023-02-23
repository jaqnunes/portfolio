<template>
  <v-card>
    <v-img
      cover
      height="250"
      src="../../../images/undraw_proud_coder_re_exuy.svg"
    ></v-img>

    <v-card-item>
      <v-card-title>My portfolio</v-card-title>
    </v-card-item>
    <v-card-text>
      <span>This is a project that i made to store and present all of my codes.</span>
    </v-card-text>

    <v-divider />

    <div class="chips">
      <v-chip-group>
        <v-chip>Vue.Js</v-chip>
        <v-chip>Sass</v-chip>
      </v-chip-group>
    </div>

  </v-card>
</template>

<script>
export default {
  name: "ProjectCard",
};
</script>

<style scoped>
.v-card {
  padding: 18px;
  border-radius: 30px;
  max-width: 350px;
  min-height: 460px;
  margin: 20px 20px 20px 20px;
}

.v-card:hover {
  transition: 0s;
  box-shadow: 0px 20px 30px 0px rgba(115,115,115,0.7);
}

.v-card:active {
  box-shadow: 0px 20px 20px -5px rgba(115,115,115,0.7);
}

.v-divider {
  margin-top: 10px;
}

.chips {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

</style>

