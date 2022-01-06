<template>
  <div class="row about-me-container m-0">
    <h1 class="name mx-0 my-2">Amina Brenneng</h1>
  </div>
  <div class="row my-3 links-container">
    <div class="col">
      <a href="https://www.linkedin.com/in/amina-brenneng-699190b0" target="_blank"
        ><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="p-0 icon"
      /></a>
    </div>
    <div class="col">
      <a :href="`${publicPath}CV-AminaBrenneng.pdf`" download="download">
        <font-awesome-icon
          :icon="['fas', 'file-download']"
          size="2x"
          class="p-0 icon"
          v-b-tooltip
        />
      </a>
    </div>
    <div class="col">
      <a href="mailto:aminabrenneng@gmail.com">
        <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="p-0 icon" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Links',
  data() {
    return { publicPath: process.env.BASE_URL };
  },
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
  color: rgb(70, 43, 42);
}
a {
  color: rgb(77, 97, 80);
}
.icon:hover {
  color: rgb(29, 44, 29);
  transform: scale(1.2);
}
</style>
