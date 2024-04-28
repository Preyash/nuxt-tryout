<script setup>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const file = ref(null);
const errors = ref({});

const v$ = useVuelidate({
  file: {
    required,
  },
});

const handleFileInput = (event) => {
  file.value = event.target.files[0];
  if (file.value.size > 1 * 1024 * 1024) {
    errors.value.file = "File size is more than 1MB";
  } else {
    errors.value.file = "";
  }
};

const handleSubmit = () => {
  if (!file.value) {
    errors.value.file = "Value is required";
  } else if (file.value.size > 1 * 1024 * 1024) {
    return false;
  } else if (!v$.value.$invalid) {
    console.log(file.value);
  } else {
    console.log("Form validation failed.");
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="file" @input="handleFileInput" />
    <div v-if="errors.file" class="error-message">{{ errors.file }}</div>
    <button type="submit">Submit</button>
  </form>
</template>