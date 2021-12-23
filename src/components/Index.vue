<template>
  <div class="main-container p-5">
    <div class="row">
      <div class="col-sm-5 col-md-6 sidebar-container">
        <Sidebar />
      </div>
      <div class="col-sm-7 col-md-6 content-container">
        <AboutMe />
        <TechnicalSkills />
      </div>
    </div>
    <div class="row history-container">
      <div class="col"><History /></div>
    </div>
    <div class="row">
      <div class="col-sm-5 col-md-6 sidebar-container">
        <Sidebar />
      </div>
      <div class="col-sm-7 col-md-6 contact-container">
        <Contact />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import AboutMe from './AboutMe.vue';
import TechnicalSkills from './TechnicalSkills.vue';
import History from './History.vue';
import Contact from './Contact.vue';

export default {
  name: 'Index',
  components: {
    Sidebar,
    AboutMe,
    TechnicalSkills,
    History,
    Contact,
  },
};
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  background-color: rgb(240, 235, 233);
}

.content-container {
  background-color: #c0857b;
  color: #fff;
}
.sidebar-container {
  background-color: #c0857b;
}

.contact-container {
  background-color: #c0857b;
  position: relative;
}

.history-container {
  background-color: #5b3832;
}
</style>
