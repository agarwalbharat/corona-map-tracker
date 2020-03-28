import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [{
        text: 'Home',
        to: '/',
        icon: 'mdi-home',
        meta:{
          showToolbar: true,
          showBottomNav: true
        }, 
      },
      {
        text: 'Map',
        to: '/map',
        icon: 'mdi-google-maps',
        meta:{
          showToolbar: false,
          showBottomNav: true
        }, 
      },
      {
        text: 'Country',
        to: '/country',
        icon: 'mdi-earth',
        meta:{
          showToolbar: true,
          showBottomNav: true
        }, 
      },
      {
        text: 'About',
        to: '/about',
        icon: 'mdi-account-multiple',
        meta:{
          showToolbar: false,
          showBottomNav: true
        }, 
      },
    ]
  },
  getters: {
    links:(state)=>state.links,
    bottomLink: (state)=> state.links.filter(link => link.meta.showBottomNav === true),
    appBarLinks: (state)=> state.links.filter(link => link.meta.showAppBar === true),
  },
  mutations: {
  },
  actions: {},
  modules: {}
});