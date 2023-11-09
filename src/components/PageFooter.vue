<template>
  <div>
    <v-divider />
    <p>&copy; {{ getYear }} | Jackelyne</p>
  </div>
</template>
  
<script>

export default {
  name: 'PageFooter',
  computed: {
    getYear() {
      return new Date().getFullYear()
    }
  },
};
</script>

<style scoped>
p {
  padding: 10px 0;
  font-size: .8em;
}
</style>