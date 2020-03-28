<template>
  <v-content class="fill-height">
    <Desktop class="hidden-sm-and-down pa-0" :baseData="mainSs" :countryData="allCountries" :isLoading="isLoading"/>
    <Mobile class="hidden-md-and-up" :isLoading="isLoading" :baseData="mainSs"/>
  </v-content>
</template>

<script>
import { mapState } from "vuex";

import Desktop from "@/components/Home/Desktop";
import Mobile from "@/components/Home/Mobile";

export default {
  name: "Home",
  components: {
    Desktop,
    Mobile
  },
  data: () => ({
  }),
  computed: {
    ...mapState(["mainSs", "allCountries","isLoading"])
  },
};
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
