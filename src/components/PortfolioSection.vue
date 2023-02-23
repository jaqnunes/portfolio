<template>
  <h1 class="title">My Projects</h1>
  <ProjectCard />
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
</style>

