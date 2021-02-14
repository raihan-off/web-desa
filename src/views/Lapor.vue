<template>
  <div class="lapor mt-16 mb-16">
    <h2>Pengaduan</h2>
    Halaman mengadukan masalah atau laporan mengenai desa
    <v-col class="inspire form pa-16">
      <form style="width: 50%">
        <v-text-field outlined v-model="name" label="Name"></v-text-field>
        <v-text-field
          outlined
          v-model="email"
          :error-messages="emailErrors"
          label="Email"
          reqiured
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-textarea outlined v-model="input" label="Masukan"></v-textarea>
        <v-btn block class="submit" color="red" @click="submit"
          >Kirim Pengaduan</v-btn
        >
      </form>
    </v-col>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Lapor",
  components: {},
  mixins: [validationMixin],
  data: () => ({
    name: "",
    email: "",
  }),
  validations: {
    email: { required, email },
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>

<style scoped>
.lapor {
  text-align: center;
}

.form {
  display: flex;
  justify-content: center;
}

.submit {
  color: aliceblue;
}
</style>

