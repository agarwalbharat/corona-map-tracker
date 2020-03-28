<template>
  <v-content class="fill-height">
    <Desktop class="hidden-sm-and-down pa-0" :baseData="baseData" :countryData="countryData" :isLoading="isLoading"/>
  </v-content>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Desktop from "@/components/Home/Desktop";

export default {
  name: "Home",
  components: {
    Desktop
  },
  data: () => ({
    baseData:{},
    countryData:[],
    isLoading:false,
  }),
  created(){
    this.getBaseData();
    this.getDataCountry();
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
          console.log(doc);
          this.baseData = doc;
          this.isLoading = false
        }).catch(e=>{
          console.log(e);
          this.isLoading = false;
        });
    },
    getDataCountry() {
      this.isLoading = true;
      fetch("https://corona.lmao.ninja/countries", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(doc => {
          console.log(doc);
          this.countryData = doc;
          this.isLoading = false;
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
