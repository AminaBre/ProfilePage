<template>
  <div class="col navigation-content">
    <div class="row">
      <router-link to="/">
        <font-awesome-icon icon="user" size="2x" class="p-0" />
      </router-link>
    </div>

    <div class="row mt-4">
      <router-link to="/technicalSkills">
        <font-awesome-icon icon="code" size="2x" class="p-0" />
      </router-link>
    </div>

    <div class="row mt-4">
      <router-link to="/history"
        ><font-awesome-icon icon="cogs" size="2x" class="p-0"
      /></router-link>
    </div>

    <div class="row mt-4">
      <router-link to="/contact" tag="a">
        <font-awesome-icon icon="envelope" size="2x" class="p-0" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
router-link {
  color: white;
}

.navigation-content {
  position: relative;
  top: 33%;
}

a {
  color: white;
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
