<template>
  <div>
    <main>
      <HomeContent id="home"/>
    </main>
  </div>
</template>

<script>
import HomeContent from '../components/HomeContent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeContent,
  },
};
</script>

<style scoped>

</style>