<template>
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ on }">
        <v-btn icon dark v-on="on"><v-icon>mdi-information</v-icon></v-btn>
      </template>
      <v-card class="white ma-0 pa-0">
        <v-card-text class="ma-0 pa-0">
            <v-img :src="require('@/assets/coronainfo.png')"></v-img>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
data:()=>({
    dialog: false,
})
}
</script>

<style>

</style>