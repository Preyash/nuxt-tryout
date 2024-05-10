<script setup>
const { for } = defineProps(["for"]);

</script>

<template>
  <label :for="for"><slot></slot></label>
</template>

<style></style>
