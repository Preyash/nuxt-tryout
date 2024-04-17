<script setup>
import CustomTable from "@/components/CustomTable.vue";
import CustomPagination from "@/components/CustomPagination.vue";
import CustomCollapsible from "@/components/CustomCollapsible.vue";
import CustomDialog from "@/components/CustomDialog.vue";
import { ref, computed, provide } from "vue";
import { useRuntimeConfig } from "nuxt/app";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-icons/vue";
import { navigateTo } from "nuxt/app";

const config = useRuntimeConfig();
const app_id = config.public.app_id;

const route = useRoute();
const loading = ref(false);
const fetchDataUrl = "https://dummyapi.io/data/v1/user";
const page = computed(() => route.query.page);

const res = await useFetch(fetchDataUrl, {
  headers: { "app-id": "6614d933c2921c5b50c3adf8" },
  query: { ...route.query, page, limit: 10 },
});
let { data, pending, error, refresh, execute, status } = res;
let open = ref(false);

const handleClick = (e) => {
  navigateTo({
    path: "/vuelidate",
  });
};

provide("open", open);
provide("refresh", refresh);
</script>

<template>
  <div class="mx-auto max-w-4xl">
    <div
      v-if="data"
      class="mx-6 gap-10 flex flex-col justify-center items-center my-[30px]"
    >
      <div class="flex w-full justify-between">
        <div class="relative w-full max-w-sm items-center">
          <Input id="search" type="text" placeholder="Search..." class="pl-10" />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
          </span>
        </div>
        <CustomDialog :open="open" />
      </div>
      <CustomTable :apidata="data.data" :refresh="refresh" />
      <CustomPagination :apidata="data" />
    </div>
    <div v-else-if="pending">Loading...</div>
  </div>
</template>
