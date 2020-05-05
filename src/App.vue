<template>
  <v-app>
    <v-snackbar v-model="snackWithButtons" :timeout="timeout" bottom left class="snack">
      {{ snackWithBtnText }}
      <v-spacer />
      <v-btn dark text color="#00f500" @click.native="refreshApp">{{ snackBtnText }}</v-btn>
      <v-btn icon @click="snackWithButtons = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <AppBar />
    <v-container class="pa-0 ma-0" style="height:100%" fluid>
      <v-slide-y-reverse-transition>
        <router-view v-show="show" />
      </v-slide-y-reverse-transition>
    </v-container>
    <BottomNav class="hidden-md-and-up" />
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import AppBar from "@/components/Core/AppBar";
import BottomNav from "@/components/Core/BottomNav";

export default {
  name: "App",

  components: {
    AppBar,
    BottomNav
  },
  data: () => ({
    show: false,
    refreshing: false,
    registration: null,
    snackBtnText: '',
    snackWithBtnText: '',
    snackWithButtons: false,
    timeout: 7000,
  }),
  created(){
    this.show = true;
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
        this.refreshing = true;
      window.location.reload();
    });
  },
  methods:{
    showRefreshUI(e) {
      this.registration = e.detail;
      this.snackBtnText = 'Refresh';
      this.snackWithBtnText = 'New version available!';
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    }
  }
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}
</style>
