import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PersonalPage from '../views/PersonalPage.vue';
import Hero from '../components/Hero/Hero.vue';
import User from '../components/User/User.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/hero/:id',
    name: 'Hero',
    component: Hero,
  },
  {
    path: '/PersonalPage',
    name: 'PersonalPage',
    component: PersonalPage,
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
