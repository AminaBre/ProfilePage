import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faUser,
  faCogs,
  faCode,
  faEnvelope,
  faFeatherAlt,
  faBookReader,
  faUsers,
  faGraduationCap,
  faGlasses,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';

library.add(
  faUser,
  faCogs,
  faCode,
  faEnvelope,
  faFeatherAlt,
  faBookReader,
  faUsers,
  faGraduationCap,
  faGlasses,
  faShieldAlt,
);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
