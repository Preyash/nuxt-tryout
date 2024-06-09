<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";

const plugins = [new Arrow(), new Pagination({ type: "bullet" })];
const cards = ["1", "2", "3", "4", "5", "6", "7", "8"];
</script>

<template>
  <h2>Flicking Carousel</h2>
  <Flicking :options="{ circular: true, renderOnlyVisible: true }" :plugins="plugins">
    <div class="card-panel">1</div>
    <div class="card-panel">2</div>
    <div class="card-panel">3</div>
    <div v-for="(card, index) in cards" :key="index" class="card-panel">{{ card }}</div>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
      <div class="flicking-pagination"></div>
    </template>
  </Flicking>
</template>

<style scoped>
.card-panel {
  align-items: flex-end;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  height: 200px;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 30px 20px;
  position: relative;
  width: 50%;
  background-color: rgb(24, 26, 27);
  box-shadow: rgba(8, 8, 8, 0.1) 0px 0.5em 1em -0.125em,
    rgba(8, 8, 8, 0.02) 0px 0px 0px 1px;
}
.flicking-pagination {
  bottom: 1px;
}
</style>
