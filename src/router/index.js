import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "home" */ '@/views/Home'),
    meta: {
      title: "Home - CoronaTracker",
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
    meta: {
      title: "About - CoronaTracker",
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '@/views/Map'),
    meta: {
      title: "Map - CoronaTracker",
    }
  },
  {
    path: '/country',
    name: 'country',
    component: () => import(/* webpackChunkName: "country" */ '@/views/Country'),
    meta: {
      title: "Country - CoronaTracker",
    }
  },
  {
    path: '/country/:id',
    name: 'country-detailed',
    component: () => import(/* webpackChunkName: "ViewCountry.vue" */ '@/views/ViewCountry'),
    meta: {
      title: "Country - CoronaTracker",
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router