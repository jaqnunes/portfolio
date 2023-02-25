<template>
  <div class="aboutMe">
    <img src="../../images/undraw_proud_coder_re_exuy.svg" alt="developer_undraw">
    <div class="aboutMe--texts">
      <h1>I am a Developer, get to know me:</h1>
      <p>
        Hi! my name is Jackelyne, i am a 19 years old Software Engineer student currently working as Fullstack Developer
        Intern at IBM.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeSection",
};
</script>

<style lang="scss" scoped>
.aboutMe {
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  &--texts {
    max-width: 600px;
  }
}
</style>

