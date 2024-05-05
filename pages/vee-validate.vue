<script setup>
import { defineRule } from 'vee-validate';
import { required, email, alpha } from '@vee-validate/rules';
defineRule('required', required);
defineRule('email', email);
defineRule('alpha', alpha);

</script>

<template>
  <VeeValidate />
</template>
  