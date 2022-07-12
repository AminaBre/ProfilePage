<template>
  <transition name="fade" appear>
    <div class="main-container px-md-4">
      <div class="content-container">
        <div class="row p-3">
          <Navigation />
          <hr class="px-5" />
        </div>
        <router-view />
      </div>
    </div>
  </transition>
</template>

<script>
import Navigation from "./Navigation.vue";
import AboutMe from "./AboutMe.vue";
import TechnicalSkills from "./TechnicalSkills.vue";
import History from "./History.vue";
import Contact from "./Contact.vue";

export default {
  name: "Index",
  components: {
    Navigation,
    AboutMe,
    TechnicalSkills,
    History,
    Contact,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200&display=swap");

a {
  color: rgb(61, 45, 37);
}

.enter-from {
  opacity: 0;
}

.enter-to {
  opacity: 1;
}

.enter-active {
  transition: opacity 2s ease;
}

h1 {
  font-family: "Roboto Mono", monospace;
}

.main-container {
  height: 100vh;
  background-color: #bfa89d;
  text-align: left;
  color: #fff;
  overflow-y: scroll;
}

.content-container-mobile {
  background-color: #c0857b;
  color: #fff;
}

.circle-image {
  border-radius: 200px;
  background-color: rgb(238, 234, 226);
}

.contact-container {
  background-color: #c0857b;
}

.history-container {
  background-color: #5b3832;
}

img {
  width: 100%;
}

@media screen and (min-width: 0px) and (max-width: 766px) {
  .sidebar-container {
    height: 30vh;
    padding: 0px;
  }
}
</style>
