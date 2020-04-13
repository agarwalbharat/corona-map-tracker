<template>
  <v-content class="fill-height">
    <Desktop class="hidden-sm-and-down pa-0" :baseData="baseData" :isLoading.sync="isLoading"/>
    <Mobile class="hidden-md-and-up" :isLoading.sync="isLoading" :baseData="baseData"/>
  </v-content>
</template>

<script>
import Desktop from "@/components/Home/Desktop";
import Mobile from "@/components/Home/Mobile";

export default {
  name: "Home",
  components: {
    Desktop,
    Mobile
  },
  data: () => ({
    baseData:{},
    countryData:[],
    isLoading:false,
  }),
  created(){
    this.getBaseData();
  },
  methods: {
    getBaseData() {
      this.isLoading = true;
      fetch("https://corona.lmao.ninja/all", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(doc => {
          this.baseData = doc;
          this.isLoading = false
        }).catch(e=>{
          console.log(e);
          this.isLoading = false;
        });
    }
  }
};
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
