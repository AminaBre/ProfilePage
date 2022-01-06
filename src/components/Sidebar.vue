<template>
  <div class="col-md-2 d-none d-md-block">
    <Navigation />
  </div>
  <div class="col image-container">
    <div class="row">
      <img src="../assets/profile-image.png" class="p-0" />
    </div>
    <Links />
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Links from './Links.vue';

export default {
  name: 'Sidebar',
  components: { Navigation, Links },
};
</script>

<style scoped>
.image-container {
  box-shadow: 0px 0px 15px 5px #4a343454;
  background-color: white;
  width: 33%;
  left: 10%;
  position: absolute;
  overflow: hidden;
  top: 0px;
  height: 100vh;
}

img {
  position: relative;
  background-color: white;
  width: 100%;
  height: auto;
  top: -30px;
}

@media screen and (min-width: 0px) and (max-width: 766px) {
  .image-container {
    width: 100%;
    left: 0%;
    height: 30%;
    background-color: #e9e2d9;
  }

  img {
    width: 200px;
    position: relative;
    border-radius: 200px;
  }
}

@media screen and (min-width: 766px) and (max-width: 1050px) {
  .image-container {
    left: 13%;
  }
  img {
    top: 40px;
    left: -14%;
    min-width: 400px;
  }
}
</style>
