<script setup>
import { computed } from "vue";
import { PaginationLast } from "radix-vue";
import { DoubleArrowRightIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";
import { navigateTo } from "nuxt/app";

const props = defineProps(['asChild', 'as', 'class', 'page', 'apidata']);

const { total, limit, page } = props.apidata

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const handleClick = () => {
  navigateTo({
    path: "/",
    query: { page: Math.ceil(total/limit) },
  });
};
</script>

<template>
  <PaginationLast v-bind="delegatedProps" @click="handleClick">
    <Button :class="cn('w-9 h-9 p-0', props.class)" variant="outline">
      <slot>
        <DoubleArrowRightIcon />
      </slot>
    </Button>
  </PaginationLast>
</template>
