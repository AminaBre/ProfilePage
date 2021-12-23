<template>
  <div class="row sticky-content">
    <div class="col image-container bg-light p-0">
      <img src="../assets/profilepic.png" class="mw-100" />
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
.image-container {
  position: relative;
  box-shadow: 0px 0px 15px 5px #4a343454;
}

.sticky-content {
  position: sticky;
  top: 0;
}

.navigation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
