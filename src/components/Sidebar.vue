<template>
  <div class="row">
    <div class="col-md-2 d-none d-md-block">
      <Navigation />
    </div>
    <div class="col image-container">
      <div class="row">
        <img src="../assets/profilepic.png" class="p-0" />
        <div class="row about-me-container p-0 m-0">
          <p class="name mx-0 my-2">Amina Brenneng</p>
          <div class="col">
            <a href="https://www.linkedin.com/in/amina-brenneng-699190b0" target="_blank"
              ><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="p-0"
            /></a>
          </div>

          <div class="col">
            <a href="https://github.com/AminaBre" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" size="2x" class="p-0" />
            </a>
          </div>

          <div class="col">
            <a href="mailto:aminahb@live.no">
              <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="p-0" />
            </a>
          </div>
          <button class="btn-md btn-primary py-3 mt-3">Download CV</button>
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
  box-shadow: 0px 0px 15px 5px #4a343454;
  background-color: white;
  width: 33%;
  left: 9%;
  position: absolute;
  top: 0px;
  height: 100vh;
}

img {
  position: absolute;
  background-color: white;
  width: 700px;
}

.about-me-container {
  background-color: rgba(240, 237, 233, 0.678);
  width: 100%;
  position: absolute;
  bottom: 0%;
}

.name {
  font-size: 2rem;
}

a {
  color: rgb(77, 97, 80);
}

@media screen and (min-width: 0px) and (max-width: 766px) {
  .image-container {
    width: 100%;
    left: 0%;
    height: 50%;
    text-align: center;
    overflow: hidden;
  }

  img {
    top: -45px;
    min-width: 400px;
    min-width: 450px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .image-container {
    left: 13%;
  }
}
</style>
