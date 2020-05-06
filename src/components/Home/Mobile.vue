<template>
  <v-container fluid class=" fill-height ma-0 pa-0">
    <v-row align="center" class="ma-0" v-if="isLoading">
      <v-col cols="12" md="12" class="text-center">
        <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
      </v-col>
    </v-row>
    <v-row align="center" class="ma-0" v-else>
        <v-col cols="12" class="mt-1 text-center headline">
        Coronavirus COVID-19
        <br />Global Cases
      </v-col>
      <v-col cols="12" class="text-center mt-1 pa-0">
        <p>Total Cases</p>
        <p style="font-size:35px;" class="font-weight-bold">{{ baseData.cases }}</p>
      </v-col>
      <v-col class="text-center mt-1 pa-0" cols="12">
        <p>Deaths</p>
        <p style="font-size:30px;" class="font-weight-bold red--text">{{ baseData.deaths }}</p>
      </v-col>
      <v-col class="text-center mt-0 pa-0" cols="12">
        <p>Recovered</p>
        <p style="font-size:30px;" class="font-weight-bold green--text">{{ baseData.recovered }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MobileViewHome",
  props: ["isLoading", "baseData"],
  data:()=>({
    indiaData:{}
  }),
  created(){
  },
  methods:{
    
  }
};
</script>

<style scoped>
p {
  margin: 0px;
  padding: 0px;
}
</style>