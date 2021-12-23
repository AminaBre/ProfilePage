<template>
  <div class="main-container p-5">
    <div class="row">
      <div class="col-sm-6 sidebar-container bg-success">
        <Sidebar />
      </div>
      <div class="col-sm-6 content-container">
        <h1 class="pt-4">Content-Container</h1>
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

.content-container {
  background-color: #c0857b;
  color: #fff;
}
</style>
