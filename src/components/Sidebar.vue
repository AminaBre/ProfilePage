<template>
  <div class="row sticky-content">
    <div class="col-2">
      <Navigation />
    </div>
    <div class="col-10 image-container bg-light">
      <div class="row">
        <img src="../assets/profilepic.png" class="image mw-100 p-0" />
      </div>
      <!--
      <div class="row links bg-light my-4">
        <div class="col"><font-awesome-icon icon="github" size="2x" class="p-0" /></div>
        <div class="col"><font-awesome-icon icon="feather-alt" size="2x" class="p-0" /></div>
        <div class="col"><font-awesome-icon icon="feather-alt" size="2x" class="p-0" /></div>
      </div>
      -->
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
.image {
  box-shadow: 0px 0px 15px 5px #4a343454;
}

.sticky-content {
  position: sticky;
  top: 0px;
}

.navigation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
