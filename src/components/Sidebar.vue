<template>
  <div class="row">
    <div class="col-2">
      <Navigation />
    </div>
    <div class="col-10 bg-primary">
      <h1>Image</h1>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  name: 'Sidebar',
  components: {
    Navigation,
  },
};
</script>

<style scoped></style>
