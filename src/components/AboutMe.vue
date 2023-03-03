<template>
  <div>
    <div class="aboutMe">
      <p class="title">Welcome! i am a <strong class="aboutMe--emphasisText">Front-end developer</strong>, get to know me:
      </p>
      <p class="subtitle">
        Hi! my name is <strong class="aboutMe--emphasisText">Jackelyne</strong>, i am a 19 years old Software Engineer
        student currently working as a <strong class="aboutMe--emphasisText">Fullstack Developer Intern at IBM.</strong>
      </p>
    </div>
    <v-divider class="section-divider" />
  </div>
</template>

<script>
export default {
  name: "AboutMeSection",
};
</script>

<style scoped>
.title {
  font-size: 2.3rem;
}

.subtitle {
  font-size: 1.3rem;
}
</style>

<style lang="scss" scoped>
.aboutMe {
  padding: 18rem 0;
  text-align: center;
  font-weight: 400;
  line-height: 2.5rem;

  &--emphasisText {
    font-weight: 900;
  }
}
</style>

