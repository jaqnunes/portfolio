<template>
  <v-card>
    <v-img cover height="250" src="../../../images/undraw_proud_coder_re_exuy.svg"></v-img>

    <v-card-item>
      <v-card-title>My Portfolio</v-card-title>
    </v-card-item>
    <v-card-text>
      <span>This is a project that i made to store and present all of my codes.</span>
    </v-card-text>

    <v-divider />

    <div class="chips">
      <v-chip-group>
        <v-chip>VUE.JS</v-chip>
        <v-chip>SASS</v-chip>
      </v-chip-group>
    </div>

    <v-divider />

    <div class="buttons">
      <a href="https://github.com/jaqnunes" target="_blank" class="button mb-2">
        VIEW PAGE DEMO
        <v-icon end icon="mdi-open-in-new"></v-icon>
      </a>
      <a href="https://github.com/jaqnunes" target="_blank" class="button">
        VIEW CODE REPO
        <v-icon end icon="mdi-open-in-new"></v-icon>
      </a>
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
  margin: 20px;
}

.v-card:hover {
  transition: 0s;
  box-shadow: 0px 20px 20px 0px rgba(115, 115, 115, 0.7);
}

.v-card-item {
  padding-bottom: 5px;
}

.v-card-title {
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
}

.v-card-text {
  font-weight: 400;
  font-size: 0.833rem;
  letter-spacing: 0.5px;
  padding-bottom: 0;
}

.v-divider {
  margin-top: 12px;
}

.chips {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.v-chip {
  letter-spacing: 0.5px;
  font-size: 0.833rem;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  max-width: 350px;
}

.button {
  text-decoration: none;
  text-align: center;
  background-color: #5f3dc4;
  color: #fff;
  border-radius: 30px;
  padding: 15px;
  width: 100%
}

.button:hover {
  background-color: #4c319d;
}

.button:active {
  background-color: #5637b0;
}

a {
  font-weight: 700;
  font-size: 0.833rem;
  letter-spacing: 0.05rem;
}
</style>

