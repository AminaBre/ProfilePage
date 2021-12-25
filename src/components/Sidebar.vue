<template>
  <div class="row">
    <!--<div class="col-2">
      <Navigation />
    </div>-->
    <div class="col image-container bg-light">
      <div class="row">
        <img src="../assets/profilepic.png" class="image mw-100 p-0" />
      </div>
      <div class="row links bg-light">
        <div class="col d-grid p-0">
          <button class="btn-md btn-primary py-3">Download CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {},
};
</script>

<style scoped>
.image {
  box-shadow: 0px 0px 15px 5px #4a343454;
  position: relative;
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
