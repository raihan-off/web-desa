<template>
  <v-app id="app">
    <v-app-bar app id="nav" color="black" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo-desa.png"
          transition="scale-transition"
          width="40"
        />

        <v-text
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          width="100"
          >Desa Sukamaju</v-text
        >
      </div>

      <v-spacer></v-spacer>

      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/berita">Berita</router-link> |
        <router-link to="/galeri">Galeri</router-link> |
        <router-link to="/lapor">Lapor</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
/* Edit your Main APP */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* Edit your nav */
#nav a {
  font-weight: bold;
  color: grey;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>