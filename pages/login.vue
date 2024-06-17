<script setup>
const clickHandle = (role) => {
  if (role.length) {
    localStorage.setItem("token", "28|5rzALgJl1tP90qrsEZNitk813Klr9XWQSiwedaicb0856579");
    localStorage.setItem("role", role);
    if (role == "admin") {
      navigateTo("/admin");
    } else if (role == "lessee") {
      navigateTo("/lessee");
    } else if (role == "enforcement") {
      navigateTo("/enforcement");
    }
  } else {
    navigateTo("/");
  }
};
</script>

<template>
  Login page
  <br />
  <br />
  <div class="space-x-4">
    <Button variant="destructive" @click="() => clickHandle('')">Login</Button>
    <Button variant="destructive" @click="() => clickHandle('admin')">Login admin</Button>
    <Button variant="destructive" @click="() => clickHandle('lessee')"
      >Login lessee</Button
    >
    <Button variant="destructive" @click="() => clickHandle('enforcement')"
      >Login enforcement</Button
    >
  </div>
</template>
