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
        icon: 'mdi-map',
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
        text: 'Instructions',
        to: '/instructions',
        icon: 'mdi-account-multiple',
        meta:{
          showToolbar: false,
          showBottomNav: false
        }, 
      },
      {
        text: 'About',
        to: '/about',
        icon: 'mdi-comment-alert-outline',
        meta:{
          showToolbar: true,
          showBottomNav: true
        }, 
      },
    ]
  },
  getters: {
    links:(state)=>state.items,
    appBarLinks: (state)=> state.items.filter(link => link.meta.showToolbar === true),
    bottomLink: (state)=> state.items.filter(link => link.meta.showBottomNav === true),
  },
  mutations: {
  },
  actions: {},
  modules: {}
});