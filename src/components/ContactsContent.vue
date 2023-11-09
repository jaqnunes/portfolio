<template>
  <div class="contacts">
    <v-divider />
    <PageFooter/>
  </div>
</template>
  
<script>
import PageFooter from './PageFooter.vue';
export default {
  name: 'ContactsContent',
  components: {
    PageFooter,
  }
};
</script>

<style>
.contacts {
  background-color: #151314;
}
</style>