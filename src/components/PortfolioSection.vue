<template>
  <div>
    <h1 class="title">
      <div class="dots">
        <span class="dots--weak">•</span>
        <span class="dots--medium">•</span>
        <span class="dots--strong">•</span>
      </div>
      <span class="title--text">MY PROJECTS</span>
      <div class="dots">
        <span class="dots--strong">•</span>
        <span class="dots--medium">•</span>
        <span class="dots--weak">•</span>
      </div>
    </h1>
    <div class="projects">
      <ProjectCard />
    </div>
    <v-divider class="section-divider" />
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

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.583rem;
  font-weight: 700;
  letter-spacing: 0.4rem;
  padding-top: 2rem;

  &--text {
    margin: 0px 10px;
  }
}

.dots {
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
  letter-spacing: 0.4rem;

  &--strong {
    color: #8f77d6;
    font-size: 2.986rem;
  }

  &--medium {
    color: #af9ee2;
    font-size: 2.488rem;
    margin-top: 2.5px;
  }

  &--weak {
    color: #dfd8f3;
    font-size: 2.074rem;
    margin-top: 5px;
  }
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  padding: 0 5rem;
}
</style>

