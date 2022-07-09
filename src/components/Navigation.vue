<template>
  <div class="col my-4 navigation-content">
    <router-link to="/">
      <font-awesome-icon icon="user" size="2x" class="p-0" />
    </router-link>

    <router-link to="/technicalSkills">
      <font-awesome-icon icon="code" size="2x" class="p-0" />
    </router-link>

    <router-link to="/history"
      ><font-awesome-icon icon="briefcase" size="2x" class="p-0"
    /></router-link>

    <router-link to="/contact" tag="a">
      <font-awesome-icon icon="comment" size="2x" class="p-0" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.navigation-content {
  display: flex;
  justify-content: space-around;
}

a:hover {
  color: rgb(62, 26, 13);
  transform: scale(1.2);
}

a.router-link-active {
  color: rgb(62, 26, 13);
  transform: scale(1.2);
}
</style>
