<template>
  <v-content class="fill-height">
    <l-map :zoom="zoom" :center="center" style="height: 100%; width: 100%">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-circle
        v-for="(d,idx) in countryData"
        :key="idx"
        :lat-lng="[d.latitude, d.longitude]"
        :radius="500*d.infected"
        color="red"
        fillColor="#f03"
        :fillOpacity="0.3"
        @click="sheet=true"
      >
        <l-popup :options="{maxWidth:'300', minWidth:'200'}" class="ma-0 pa-0">
          <v-card class="ma-0 pa-0">
            <v-card-title>{{ d.name }}</v-card-title>
            <v-card-text class="text--primary">
              <p>Total Case: {{ d.infected }}</p>
              <p>Deaths: {{ d.dead }}</p>
              <p>Recovered: {{ d.recovered }}</p>
              <p>Last Updated: {{ d.lastUpdated | dateFilter }}</p>
            </v-card-text>
          </v-card>
        </l-popup>
      </l-circle>
      <l-control v-if="isLoading" :position="'bottomright'">
        <v-card>
          <v-card-text>
            <v-row align="center" class="ma-0" v-if="isLoading">
              <v-col cols="12" md="12" class="text-center">
                <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
              </v-col>
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
    lat: 23.9697018,
    long: 76.6851978,
    zoom: 4.3,
    center: latLng(26.9967251, 75.7528487),
    url:
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
    countryData: [],
    isLoading: false
  }),
  created() {
    this.getDataCountry();
  },
  methods: {
    tt() {
      alert("AA");
    },
    getDataCountry() {
      this.isLoading = true;
      fetch(
        "https://cors-anywhere.herokuapp.com/https://coronavirus.app/get-places",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-tokden": "asd",
            "x-date-req": "2020-04-13T21:27:04.977Z"
          }
        }
      )
        .then(res => res.json())
        .then(doc => {
          console.log(doc)
          this.countryData = doc;
          this.countryData = doc.data.filter(res => {
            if (res.country == "IN") return true;
          });
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
p {
  margin: 0 !important;
  padding: 0 !important;
}
</style>

<style>
</style>