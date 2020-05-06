<template>
  <v-container fluid class="fill-height ma-0 pa-0">
    <!-- <div id="mapid" style="height:100%;width:100%;padding:0px;margin:0px;"></div> -->
    <l-map class="nodes-map" :zoom="zoom" :center="center" style="height: 100%; width: 100%">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-circle
        v-for="(d,idx) in countryData"
        :key="idx"
        :lat-lng="[d.countryInfo.lat, d.countryInfo.long]"
        :radius="(d.cases<1000)?d.cases*100:(d.cases>155370)?d.cases/2:d.cases*8"
        color="red"
        fillColor="#f03"
        :fillOpacity="0.3"
      >
        <l-popup :options="{maxWidth:'300', minWidth:'200'}" class="ma-0 pa-0">
          <v-card class="ma-0 pa-0">
            <v-img class="white--text align-end" :src="d.countryInfo.flag">
              <v-card-title>{{ d.country }}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <v-card-text class="text--primary">
                <p>Total Case: {{ d.cases }}</p>
                <p>Deaths: {{ d.deaths }}</p>
                <p>Recovered: {{ d.recovered }}</p>
            </v-card-text>
            </v-card-text>
          </v-card>
        </l-popup>
      </l-circle>
      <l-control :position="'bottomright'">
        <v-card max-width="350" class="ma-0 pa-0">
          <v-card-title>Global Cases</v-card-title>
          <v-card-text class="text--primary">
            <v-row justify="center" align="center" class v-if="isLoading">
              <v-col cols="12" md="12" class="text-center">
                <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" v-else>
              <v-col
                cols="12"
                class="ma-1 pa-1"
                style="font-size:25px"
              >Total Confirmed: {{ baseData.cases }}</v-col>
              <v-col
                cols="12"
                class="ma-1 pa-1 red--text"
                style="font-size:20px"
              >Deaths: {{ baseData.deaths }}</v-col>
              <v-col
                cols="12"
                class="ma-1 pa-1 green--text"
                style="font-size:20px"
              >Recovered: {{ baseData.recovered }}</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </l-control>
      <l-control :position="'bottomleft'"><a href="https://iambharat.tk" target="_blank" style="text-decoration:none">Bharat Agarwal</a></l-control>
    </l-map>
  </v-container>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LControl, LCircle, LPopup } from "vue2-leaflet";
import services from '@/services/service';

export default {
  name: "DesktopHome",
  components: {
    LMap,
    LTileLayer,
    LControl,
    LCircle,
    LPopup
  },
  props: ["baseData", "isLoading"],
  data: () => ({
    countryData:[],
    lat: 26.9967251,
    long: 75.7528487,
    zoom: 3,
    center: latLng(26.9967251, 75.7528487),
    url:
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
  }),
  created(){
    this.getDataCountry();
  },
  methods:{
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

<style>
.leaflet-control-attribution {
  display: none;
}
</style>
<style scoped>
p{
    margin:0 !important;
    padding:0 !important;
}
</style>