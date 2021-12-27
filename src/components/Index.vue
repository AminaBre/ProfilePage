<template>
  <transition name="fade" appear>
    <div class="main-container p-md-5">
      <div class="row">
        <div class="col-md-6 col-lg-5 sidebar-container">
          <Sidebar />
        </div>
        <div class="col d-md-none content-container-mobile">
          <AboutMe />
          <TechnicalSkills />
          <History />
        </div>
        <div class="col-md-6 col-lg-7 d-none d-md-block content-container">
          <router-view />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Sidebar from './Sidebar.vue';
import AboutMe from './AboutMe.vue';
import TechnicalSkills from './TechnicalSkills.vue';
import History from './History.vue';

export default {
  name: 'Index',
  components: {
    Sidebar,
    AboutMe,
    TechnicalSkills,
    History,
  },
};
</script>

<style scoped>
.main-container {
  height: 100vh;
  background-color: rgb(238, 225, 220);
}

.content-container {
  background-color: #c0857b;
  color: #fff;
  overflow: auto;
  height: 90vh;
}

.content-container-mobile {
  background-color: #c0857b;
  color: #fff;
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
@media screen and (min-width: 0px) and (max-width: 766px) {
  .sidebar-container {
    height: 50vh;
  }
}
</style>
