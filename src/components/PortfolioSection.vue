<template>
  <h1 class="title">My Projects</h1>
  <div class="projects">
    <ProjectCard />
  </div>
</template>

<script>
import ProjectCard from "./minor-components/ProjectCard.vue";

export default {
  name: "PortfolioSection",
  components: {
    ProjectCard,
  }
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

