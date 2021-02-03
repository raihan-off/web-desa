<template>
  <div class="home">
    <div class="jumbotron text--white text-center">
      <h1 class="white--text">
        Selamat Datang di Website<br />
        Resmi Desa Sukamaju
      </h1>
      <v-btn class="white--text mt-10" color="red">More</v-btn>
    </div>
    <div class="data-penduduk">
      <h3>Data Penduduk</h3>
      <h4>Berikut Merupakan Perkiraan Data Penduduk</h4>
      <div>
        <div class="penduduk mt-15">
          <v-list class="stats align-center">
            <v-list-tile
              class="detail-stats"
              v-for="penduduk in datapenduduk"
              :key="penduduk.text"
            >
              <div>
                {{ penduduk.jumlah }} <br />
                {{ penduduk.name }}
              </div>
            </v-list-tile>
          </v-list>
        </div>
      </div>
    </div>
    <div class="quote pa-16">
      <div class="pemimpin"></div>
      <div class="ucapan">
        <h3 class="text--white">
          Selamat datang di Website resmi Pemerintah Desa Sukamaju Kecamatan
          Belik Kabupaten Pemalang Provinsi Jawa Tengah. Ini adalah ruang media
          informasi desa sebagai sarana komunikasi dan keterbukaan informasi
          publik. Jangan lupa selalu ikuti website dan media sosial kami untuk
          update informasi dalam penyelenggaran pemerintahan di Desa Sukamaju.
          Terima kasih sudah mengunjungi website kami. Semoga bermanfaat, kritik
          dan saran selalu kami harapkan untuk desa yang lebih baik
        </h3>
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
  padding: 200px 0 200px 0;
}

.data-penduduk {
  padding: 5%;
  text-align: center;
}

.penduduk {
  padding: 3%;
}

.stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.detail-stats {
  margin: 4%;
}

.quote {
  background-image: url("../assets/back-quote.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>