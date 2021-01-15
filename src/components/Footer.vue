<template>
  <v-footer color="#333333" class="footer" dark>
    <v-card-text class="py-2 white--text text-center">
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text class="py-2 white--text text-center">
      Alamat: Jl. Raya Randudongkal - Belik KM 7 Desa Bulakan Kecamatan Belik
      Kabupaten Pemalang
    </v-card-text>
    <v-card-text class="py-2 grey--text text-center">
      @2021 Copyright
      <br />
      Hosted by Desa
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-instagram", "mdi-facebook", "mdi-twitter"],
  }),
};
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
}
</style>