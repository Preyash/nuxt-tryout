<!-- <script setup>
import { defineRule } from 'vee-validate';
import * as rules from '@vee-validate/rules';

export default defineNuxtPlugin(nuxtApp => {
  Object.keys(rules).forEach(rule => {
    defineRule(rule, rules[rule]);
  });
});
</script> -->

<template>
  <Link rel="stylesheet" href="https://unpkg.com/chota@latest" />
  <CustomNavbar />
  <div class="mx-6 mt-[40px]">
    <slot></slot>
  </div>
  <Toaster duration="1500" />
</template>