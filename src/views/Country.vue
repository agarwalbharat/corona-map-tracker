<template>
  <v-content class="black" style="height:100%">
    <v-container class="fill-height" v-if="isLoading">
        <v-row justify="center" align="center">
          <v-col col="12" md="2" class="text-center">
            <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
          </v-col>
        </v-row>
    </v-container>
    <v-container v-else>
        <v-row >
          <v-col cols="12">
            <v-toolbar
          class="elevation-0 pa-0 ma-0"
          style="border:1px solid #e0e0e0;border-radius:5px;"
        >
          <v-toolbar-title class="mr-3 hidden-sm-and-down">Total Countries: {{ countryData.length }}</v-toolbar-title>
          <v-spacer class="hidden-sm-and-down"></v-spacer>
          <v-text-field
            flat
            v-model="search"
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-search-web"
            label="Search"
            single-line
          ></v-text-field>
        </v-toolbar>
          </v-col>
          <v-col cols="12" class="black">
            <v-data-iterator
              :items="countryData"
              :loading="isLoading"
              loading-text="Loading Speakers from Dir"
              :search="search"
              disable-pagination
              hide-default-footer
            >
              <template v-slot:default="props">
                <v-row class>
                  <v-col
                    cols="6"
                    md="2"
                    lg="2"
                    sm="3"
                    v-for="(item) in props.items"
                    :key="item.id"
                    class="pa-1"
                  >
                    <v-card
                      class="ma-0 pa-0"
                      height="100%"
                      v-ripple
                      @click="goToDetails(item.country)"
                    >
                      <v-img
                        class="white--text align-end"
                        height="10vh"
                        :src="item.countryInfo.flag"
                      >
                        <v-card-title>{{ item.country }}</v-card-title>
                      </v-img>
                      <v-card-text class="text--primary">
                        <v-card-text class="text--primary">
                          <p>Total: {{ item.cases }}</p>
                          <p>Deaths: {{ item.deaths }}</p>
                          <p>Recovered: {{ item.recovered }}</p>
                        </v-card-text>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-col>
        </v-row>
    </v-container>
  </v-content>
</template>

<script>
import services from '@/services/service';

export default {
  name: "ALlCountries",
  data: () => ({
    search: "",
    isLoading: false,
    countryData: []
  }),
  created() {
    this.getDataCountry();
  },
  methods: {
    goToDetails(name) {
      this.$router.push("/country/" + name);
    },
    getDataCountry() {
      this.isLoading = true;
      services.getDataCountry().then(res=>{
          if (res.success == true) {
            this.countryData = res.data;
            this.isLoading = false;
          }
      }).catch(e=>{
        alert(e);
        this.isLoading = false;
      })
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