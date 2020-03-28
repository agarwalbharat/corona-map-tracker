<template>
  <v-app-bar class="pa-0 ma-0" app fixed>
    <v-toolbar-title class="px-0">
      <div class="communityName">
        <span class="google-font" style="text-decoration:none;font-weight:550;">COVID-19</span>
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn
      v-for="(link, i) in appBarLinks"
      :key="i"
      :to="link.to"
      class="ml-1 google-font hidden-sm-and-down"
      style="text-transform: capitalize;"
      text
      @click="goTO($event, link)"
    >{{ link.text }}</v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppBar",
  components: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["appBarLinks"])
  },
  methods: {
    goTO(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>

<style scoped>
.communityName {
  font-size: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>