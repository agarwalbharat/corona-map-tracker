<template>
  <v-content class="fill-height">
    <l-map :zoom="zoom" :center="center" style="height: 100%; width: 100%">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-circle
        v-for="(d,idx) in countryData"
        :key="idx"
        :lat-lng="[d.countryInfo.lat, d.countryInfo.long]"
        :radius="(d.cases<1000)?d.cases*100:d.cases*8"
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
                <p>Total Case: {{ d.cases }}</p>
                <p>Deaths: {{ d.deaths }}</p>
                <p>Recovered: {{ d.recovered }}</p>
            </v-card-text>
          </v-card>
        </l-popup>
      </l-circle>
      <l-control :position="'bottomleft'"><a href="https://iambharat.tk" target="_blank" style="text-decoration:none">Bharat Agarwal</a></l-control>
    </l-map>
  </v-content>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LControl, LCircle, LPopup } from "vue2-leaflet";
export default {
  name: "MobileMap",
  components: {
    LMap,
    LTileLayer,
    LControl,
    LCircle,
    LPopup
  },
  data: () => ({
    lat: 26.9967251,
    long: 75.7528487,
    zoom: 2,
    center: latLng(26.9967251, 75.7528487),
    url:
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
    baseData: {},
    countryData: [],
    isLoading: false
  }),
  created() {
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
          this.isLoading = false;
        })
        .catch(e => {
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
        })
        .catch(e => {
          console.log(e);
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
p{
    margin:0 !important;
    padding:0 !important;
}
</style>