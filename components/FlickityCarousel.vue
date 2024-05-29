<script setup>
import Flickity from "vue-flickity";
import "flickity@2/dist/flickity.min.css";
</script>

<template>
  <Flickity ref="flickity" :options="flickityOptions">
    <div class="carousel-cell">1</div>
    <div class="carousel-cell">2</div>
    <div class="carousel-cell">3</div>
    <div class="carousel-cell">4</div>
    <div class="carousel-cell">5</div>
  </Flickity>
</template>

<style></style>
