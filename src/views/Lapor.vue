<template>
  <div class="lapor">
    <h1>Pengaduan</h1>
    <h4>quis ullamco officia adipisicing excepteur do ad excepteur.</h4>
    <div class="inspire pa-16">
      <form>
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="email"
          reqiured
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-textarea></v-textarea>
        <v-btn @click="submit">Submit</v-btn>
      </form>
    </div>
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
</style>

