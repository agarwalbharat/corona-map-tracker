<template>
  <v-bottom-navigation
    :value="activeBtn"
    color="primary"
    app
    grow
  > 
    
    <v-btn
        v-for="(link, i) in bottomLink"
        :key="i"
        :to="link.to"
        class="ml-0 google-font"
        style="text-transform: capitalize;" 
        text
        small
        @click="goTO($event, link)"
    >
        <span>{{ link.text }}</span>
        <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
 import {
    mapGetters,
  } from 'vuex'
  export default {
    name:"BottomNav",
    data:()=>({
        activeBtn: '/',
    }),
    computed: {
      ...mapGetters(['bottomLink']),
    },
    methods: {
      goTO (e, item) {
            e.stopPropagation()
            if (item.to || !item.href) return
            this.$vuetify.goTo(item.href)
        },
    }
  }
</script>

<style scoped>
/* .v-size--small{
  min-width: 50px !important;
} */
</style>