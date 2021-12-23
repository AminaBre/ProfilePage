<template>
  <div class="main-container p-5">
    <div class="row">
      <div class="col-sm-5 col-md-6 sidebar-container">
        <Sidebar />
      </div>
      <div class="col-sm-7 col-md-6 content-container">
        <AboutMe />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import AboutMe from './AboutMe.vue';

export default {
  name: 'Index',
  components: {
    Sidebar,
    AboutMe,
  },
};
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  background-color: rgb(240, 235, 233);
}

.content-container {
  background-color: #c0857b;
  color: #fff;
}
.sidebar-container {
  height: 100vh;
  background-color: #c0857b;
}
</style>
