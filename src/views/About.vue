<template>
  <v-content class="ma-1">
    <v-row justify="center" class="ma-0" align="center">
      <v-col>
        <v-img
          :src="require('@/assets/about.svg')"
          :lazy-src="require('@/assets/about.svg')"
          max-height="150"
          contain
          class="transparent mb-5"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <p class="text-center">
          A Project Made with
          <v-icon>mdi-heart</v-icon> by
          <a href="https://iambharat.tk" target="_blank" style="text-decoration:none">Bharat Agarwal</a>
        </p>
      </v-col>
    </v-row>
  </v-content>
</template>
