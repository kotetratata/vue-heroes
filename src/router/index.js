import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Hero from '../components/Hero/Hero.vue';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
