<template>
  <input type="file" @input="handleFileInput" />
</template>

<script>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";

export default {
  setup() {
    const file = ref(null);

    const rules = {
      file: {
        required: true,
        file: true,
      },
    };

    const v$ = useVuelidate(rules, file);

    function handleFileInput(event) {
      file.value = event.target.files[0];
    }

    return { file, v$, handleFileInput };
  },
};
</script>
