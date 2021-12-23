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
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';

library.add(faUser, faCogs, faCode, faEnvelope, faFeatherAlt, faBookReader, faUsers);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
