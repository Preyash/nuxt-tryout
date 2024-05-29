<script setup>
import { defineRule } from "vee-validate";
import { required, email, alpha } from "@vee-validate/rules";
defineRule("required", required);
defineRule("email", email);
defineRule("alpha", alpha);

let apiData = {
  status: "Inactive",
  name: "Jane Doe",
  operation_start: "9:00 AM",
  operation_end: "5:00 PM",
  link: "example.com",
  address: "123 Street",
  region: "one",
  description: "Lorem ipsum dolor sit amet",
};
</script>

<template>
  <Link rel="stylesheet" href="https://unpkg.com/chota@latest" />
  <VeeValidate :apiData="apiData"/>
</template>
  