import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "home" */ '@/views/Home'),
    meta: {
      title: "Home - CoronaMap",
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '@/views/About'),
    meta: {
      title: "About - CoronaMap",
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import( /* webpackChunkName: "map" */ '@/views/Map'),
    meta: {
      title: "Map - CoronaMap",
    }
  },
  {
    path: '/country',
    name: 'country',
    component: () => import( /* webpackChunkName: "country" */ '@/views/Country'),
    meta: {
      title: "Country - CoronaMap",
    }
  },
  {
    path: '/india',
    name: 'india',
    component: () => import( /* webpackChunkName: "india" */ '@/views/India'),
    meta: {
      title: "India - CoronaMap",
    }
  },
  {
    path: '/country/:id',
    name: 'country-detailed',
    component: () => import( /* webpackChunkName: "ViewCountry" */ '@/views/ViewCountry'),
    meta: {
      title: "Country - CoronaMap",
    }
  },
  {
    path: '/check',
    name: 'check-health',
    component: () => import( /* webpackChunkName: "checkcovid" */ '@/views/CheckCovid'),
    meta: {
      title: "Check-Covid - CoronaMap",
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;