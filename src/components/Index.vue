<template>
  <transition name="fade" appear>
    <div class="main-container p-md-4">
      <div class="content-container">
        <div class="row px-5">
          <Navigation />
          <hr class="px-5" />
        </div>
        <AboutMe />
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
  color: black;
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

.main-container {
  height: 100vh;
  background-color: #b3c5ca;
  font-family: "Roboto Mono", monospace;
  text-align: left;
}

.typewriter h1 {
  overflow: hidden;
  border-right: 0.1em solid rgb(0, 0, 0);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.18em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(82, 82, 82);
  }
}

.content-container {
  background-color: #ffffff;
  height: 94vh;
}

.content-container-mobile {
  background-color: #c0857b;
  color: #fff;
}

.circle-image {
  border-radius: 200px;
  background-color: rgb(238, 234, 226);
}

.sidebar-container {
  background-color: #c0857b;
  height: 90vh;
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
