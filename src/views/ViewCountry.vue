<template>
  <v-content>
    <v-container fluid>
      <v-row  class="ma-0" align="center" v-if="isLoading">
          <v-col col="12" md="2" class="text-center">
            <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
          </v-col>
        </v-row>
      <v-row class="ma-0" align="center" v-else>
        <v-col cols="12" class="text-center"><p style="font-size:40px;" class="font-weight-bold">{{ co.country }}</p></v-col>
        <v-col cols="12" class="text-center mt-2 pa-0">
          <p>Total Cases</p>
          <p style="font-size:35px;" class="font-weight-bold">{{ co.cases }}</p>
        </v-col>
        <v-col cols="6" class="text-center">
          <p>Deaths</p>
          <p style="font-size:30px;" class="font-weight-bold red--text">{{ co.deaths }}</p>
        </v-col>
        <v-col cols="6" class="text-center">
          <p>Recovered</p>
          <p style="font-size:30px;" class="font-weight-bold green--text">{{ co.recovered }}</p>
        </v-col>
        <v-col cols="12" class="text-center">
            <v-divider></v-divider>
        </v-col>
        <v-col cols="6" class="text-center">
          <p>Today Cases</p>
          <p style="font-size:30px;" class="font-weight-bold">{{ co.todayCases }}</p>
        </v-col>
        <v-col cols="6" class="text-center">
          <p>Today Deaths</p>
          <p style="font-size:30px;" class="font-weight-bold green--text">{{ co.todayDeaths }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "viewDetailed",
  data: () => ({
    isLoading: false,
    co: {}
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.isLoading = true;
      fetch("https://corona.lmao.ninja/countries/" + this.$route.params.id, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(doc => {
          this.co = doc;
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
p {
  margin: 0;
  padding: 0;
}
</style>