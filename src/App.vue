<template>
  <v-app>
    <AppBar />
    <v-container class="fill-height pa-0 ma-0" fluid>
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

import { mapState, mapMutations } from "vuex";

export default {
  name: "App",

  components: {
    AppBar,
    BottomNav
  },
  computed: {
    ...mapState(["mainSs", "allCountries"])
  },
  data: () => ({
    show: false
  }),
  created() {
    this.show = true;
    if (
      this.mainSs == undefined ||
      this.mainSs == null ||
      this.allCountries == null ||
      this.allCountries == undefined ||
      this.allCountries.length <= 0
    ) {
      this.getBaseData();
      this.getDataCountry();
    } else {
      return;
    }
  },
  methods: {
    ...mapMutations(["setAllCounties", "setMainSs", "setIsloading"]),
    getBaseData() {
      this.setIsloading(true);
      fetch("https://corona.lmao.ninja/all", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(doc => {
          console.log(doc);
          this.setMainSs(doc);
          this.setIsloading(false);
        })
        .catch(e => {
          console.log(e);
          this.setIsloading(false);
        });
    },
    getDataCountry() {
      this.setIsloading(true);
      fetch("https://corona.lmao.ninja/countries", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(doc => {
          console.log(doc);
          this.setAllCounties(doc);
          this.setIsloading(false);
        })
        .catch(e => {
          console.log(e);
          this.setIsloading(false);
        });
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
