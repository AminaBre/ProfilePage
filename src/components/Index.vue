<template>
  <div class="main-container p-5">
    <div class="row">
      <div class="col-md-6 col-lg-5 sidebar-container">
        <Sidebar />
      </div>
      <div class="col-md-6 col-lg-7 content-container">
        <AboutMe />
        <TechnicalSkills />
      </div>
    </div>
    <div class="row">
      <div class="col history-container"><History /></div>
    </div>
    <div class="row">
      <div class="col contact-container">
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
}

.history-container {
  background-color: #5b3832;
}
</style>
