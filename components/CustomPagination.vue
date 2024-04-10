<script setup lang="ts">
import { navigateTo } from "nuxt/app";

const { apidata } = defineProps(["apidata"]);
const { page, limit, total } = apidata;

const handleClick = (e) => {
  navigateTo({
    path: "/",
    query: { page: e.target.value },
  });
};
</script>

<template>
  <Pagination v-slot="{ page }" :total="total" :sibling-count="1" show-edges>
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst :page="page" />
      <PaginationPrev :page="page" />

      <template v-for="(item, index) in items">
        <PaginationListItem
          v-if="item.type === 'page'"
          :key="index"
          :value="item.value"
          as-child
        >
          <Button
            @click="handleClick"
            class="w-10 h-10 p-0 rounded-lg"
            :class="{
              'bg-purple-600 text-white': item.value === page,
              'bg-gray-300 text-black': item.value !== page,
            }"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext :page="page" />
      <PaginationLast :apidata="apidata" />
    </PaginationList>
  </Pagination>
</template>