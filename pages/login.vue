<script setup>
const clickHandle = () => {
  store.isLoggedIn = true;
};
</script>

<template>
  Login page
  <br />
  <br />
  <Button @click="clickHandle">Login</Button>
</template>
