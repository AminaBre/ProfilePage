<template>
  <div class="row">
    <div class="col-md-2 d-none d-md-block">
      <Navigation />
    </div>
    <div class="col image-container">
      <div class="row">
        <img src="../assets/profilepic.png" class="image mw-75 p-0" />
      </div>
      <div class="row">
        <div class="d-grid p-0">
          <button class="btn-md btn-primary py-3">Download CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  name: 'Sidebar',
  components: { Navigation },
};
</script>

<style scoped>
.image-container {
  margin-top: -25px;
  box-shadow: 0px 0px 15px 5px #4a343454;
}

.image {
  background-color: white;
}

.navigation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
