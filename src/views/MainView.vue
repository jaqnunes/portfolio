<template>
  <div>
    <main>
      <HomeContent id="home"/>
      <ContactsContent id="contact"/>
    </main>
  </div>
</template>

<script>
import HomeContent from '../components/HomeContent.vue';
import ContactsContent from '../components/ContactsContent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeContent,
    ContactsContent,
  },
};
</script>

<style scoped>

</style>