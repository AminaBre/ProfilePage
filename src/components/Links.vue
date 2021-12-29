<template>
  <div class="row about-me-container m-0">
    <p class="name mx-0 my-2">Amina Brenneng</p>
  </div>
  <div class="row my-3 links-container">
    <div class="col">
      <a href="https://www.linkedin.com/in/amina-brenneng-699190b0" target="_blank"
        ><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="p-0 icon"
      /></a>
    </div>
    <div class="col">
      <a href="https://github.com/AminaBre" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" class="p-0 icon" />
      </a>
    </div>
    <div class="col">
      <a href="mailto:aminahb@live.no">
        <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="p-0 icon" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Links',
};
</script>
<style scoped>
.about-me-container {
  background-color: rgba(240, 237, 233, 0.301);
  position: relative;
  top: -70px;
}

.links-container {
  position: relative;
  top: -70px;
}
.name {
  font-size: 2rem;
}
a {
  color: rgb(77, 97, 80);
}
.icon:hover {
  color: rgb(29, 44, 29);
  transform: scale(1.2);
}
</style>
