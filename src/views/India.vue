<template>
  <v-content style="height:100%">
      <!-- <h1 style="z-index:9999999">{{countryData[0]}}</h1>
      <h1 style="z-index:9999999">{{indiaLocation[`${countryData[0].state}`]}}</h1> -->

    <l-map :zoom="zoom" :center="center" style="height: 100%; width: 100%">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-circle
        v-for="(d,idx) in countryData"
        :key="idx+'cc'"
        :lat-lng="[d.lat, d.long]"
        :radius="10*d.discharged"
        color="green"
        fillColor="green"
        :fillOpacity="0.6"
      />
      <l-circle
        v-for="(d,idx) in countryData"
        :key="idx+'aa'"
        :lat-lng="[d.lat, d.long]"
        :radius="(d.totalConfirmed > 600)?15*d.totalConfirmed:60*d.totalConfirmed"
        color="red"
        fillColor="#f03"
        :fillOpacity="0.3"
        @click="sheet=true"
      >
        <l-popup :options="{maxWidth:'300', minWidth:'200'}" class="ma-0 pa-0">
          <v-card class="ma-0 pa-0">
            <v-card-title>{{ d.loc }}</v-card-title>
            <v-card-text class="text--primary">
              <p>Total Case: {{ d.totalConfirmed }}</p>
              <p>Deaths: {{ d.deaths }}</p>
              <p>Discharged: {{ d.discharged }}</p>
              <p>Last Updated: {{ lastRefreshed | dateFilter }}</p>
            </v-card-text>
          </v-card>
        </l-popup>
      </l-circle>
      <l-control :position="'bottomright'">
        <v-card max-width="95vw	" class="ma-0 pa-0">
          <v-card-text>
            <v-row align="center" class="ma-0" v-if="isLoading">
              <v-col cols="12" md="12" class="text-center">
                <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" v-else>
              <v-col
                cols="12"
                class="ma-0 pa-0 mb-1"
                style="font-size:20px"
              >Total Confirmed: {{ summary.total }}</v-col>
              <v-col
                cols="12"
                class="ma-0 pa-0 my-1 red--text"
                style="font-size:20px"
              >Deaths: {{ summary.deaths }}</v-col>
              <v-col
                cols="12"
                class="ma-0 pa-0 mt-1 green--text"
                style="font-size:20px"
              >Discharged: {{ summary.discharged }}</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </l-control>
      <l-control :position="'bottomleft'">
        <a href="https://iambharat.tk" target="_blank" style="text-decoration:none">Bharat Agarwal</a>
      </l-control>
    </l-map>
  </v-content>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LControl, LCircle, LPopup } from "vue2-leaflet";
import services from '@/services/service';
import indiaLocation from "@/assets/indiaLoc.json";
export default {
  name: "MobileMap",
  components: {
    LMap,
    LTileLayer,
    LControl,
    LCircle,
    LPopup
  },
  filters: {
    dateFilter: value => {
      const date = new Date(value);
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      });
    }
  },
  data: () => ({
    zoom: 4.45,
    lastRefreshed:"",
    indiaLocation:[],
    summary:{},
    center: latLng(20.00, 80.7528487),
    url:
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
    countryData: [],
    isLoading: false
  }),
  mounted() {
    this.getIndiaData();
  },
  methods: {
   getIndiaData() {
      this.isLoading = true;
      services.getIndiaData()
        .then(res => {
          // console.log(res);
          if (res.success == true) {
            this.indiaLocation = indiaLocation
            this.summary = res.data.data.summary
            this.lastRefreshed = res.data.lastRefreshed;
            this.countryData = res.data.data.regional;
            // console.log(tempArr)
            this.countryData.forEach(element => {
              // console.log(element.loc + " " + indiaLocation[element.loc]);
              if(indiaLocation[element.loc] && indiaLocation[element.loc]!= undefined){
                element.lat = indiaLocation[element.loc].latitude
                element.long = indiaLocation[element.loc].longitude
                // this.countryData.push(element)
              }
            });
            this.isLoading = false;
          }else {
            
            this.isLoading = false;
          }
        })
        .catch(e => {
          alert(e);
          this.isLoading = false;
        });
    } 
  }
};
</script>

<style>
.leaflet-control-attribution {
  display: none !important;
}
</style>
<style scoped>
p {
  margin: 0 !important;
  padding: 0 !important;
}
</style>

<style>
</style>