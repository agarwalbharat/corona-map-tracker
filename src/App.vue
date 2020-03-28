<template>
  <v-app>
    <AppBar />
    <v-container :class="this.$vuetify.theme.dark == true?'black':'white'" fluid class="px-1">
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
    show: false
  }),
  created() {
    this.show = true;
  }
};
</script>
