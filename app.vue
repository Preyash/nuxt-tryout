<script setup>
import CustomTable from "./components/CustomTable.vue";
import CustomPagination from "./components/CustomPagination.vue";
import CustomCollapsible from "./components/CustomCollapsible.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
import { onMounted, watch } from "vue";
import { ref } from "vue";
import { useRuntimeConfig } from "nuxt/app";
const config = useRuntimeConfig();
const app_id = config.public.app_id;

const route = useRoute();
const loading = ref(false);
const fetchDataUrl = "https://dummyapi.io/data/v1/user";

const res = await $fetch(fetchDataUrl, {
  headers: { "app-id": app_id },
  query: { ...route.query, page: route.query.page, limit: 10 },
});
const { data } = res

watch(() => route.query, (newValue, oldValue) => {
  // Your logic here to handle the change in route.query
  console.log('route.query changed:', newValue);
});
</script>

<template>
  <div
    v-if="data"
    class="mx-auto max-w-4xl gap-10 flex flex-col justify-center items-center mt-[100px]"
  >
    <CustomCollapsible />
    <CustomTable :apidata="data" />
    <CustomPagination :apidata="res" />
  </div>
  <div v-else-if="loading">Loading...</div>
  <!-- <div v-else-if="error">{{ error }}</div> -->
  <Toaster duration="2000" />
</template>
