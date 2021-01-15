<template>
  <div class="home">
    <div class="jumbotron text--white text-center pa-16">
      <h3 class="white--text">
        Selamat Datang di Website<br />
        Resmi Desa Sukamaju
      </h3>
      <v-btn class="white--text mt-10" color="red">More</v-btn>
    </div>
    <div class="data-penduduk">
      <h3>Data Penduduk</h3>
      <h4>Berikut Merupakan Perkiraan Data Penduduk</h4>
      <div class="row justify-center mt-10">
        <div class="penduduk">
          <h5>{{ datapenduduk }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({
    datapenduduk: [
      {
        id: 1,
        image: "@/assets/icon/penduduk.png",
        name: "Penduduk",
        jumlah: 20000,
      },
      {
        id: 2,
        image: "@/assets/icon/kepala-keluarga.png",
        name: "Kepala Keluarga",
        jumlah: 9000,
      },
      {
        id: 3,
        image: "@/assets/icon/anggota-keluarga.png",
        name: "Anggota Keluarga",
        jumlah: 11000,
      },
      {
        id: 4,
        image: "@/assets/icon/laki-laki.png",
        name: "Laki-laki",
        jumlah: 11000,
      },
      {
        id: 5,
        image: "@/assets/icon/perempuan.png",
        name: "Perempuan",
        jumlah: 9000,
      },
    ],
  }),
};
</script>

<style scoped>
.jumbotron {
  background-image: url("../assets/jumbotron.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

.data-penduduk {
  padding: 5%;
  text-align: center;
}

.penduduk {
  padding: 5%;
}

.quote {
  background-image: url("../assets/kd-image.png");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: row;
}
</style>