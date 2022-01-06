import { createRouter, createWebHistory } from 'vue-router';
import History from '../components/History.vue';
import AboutMe from '../components/AboutMe.vue';
import TechnicalSkills from '../components/TechnicalSkills.vue';
import Contact from '../components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: AboutMe,
    meta: { title: 'About Me' },
  },
  {
    path: '/technicalSkills',
    name: 'TechnicalSkills',
    component: TechnicalSkills,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
