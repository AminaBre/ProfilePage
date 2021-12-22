<template>
  <div class="main-container">
    <div class="row">
      <div class="col-5 bg-primary">
        <Sidebar />
      </div>
      <div class="col-7">
        <h1>Hei</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  name: 'Index',
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  background-color: rgb(235, 230, 224);
}
</style>
