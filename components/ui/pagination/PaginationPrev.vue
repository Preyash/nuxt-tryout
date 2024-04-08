<script setup>
import { computed } from "vue";
import { PaginationPrev } from "radix-vue";
import { ChevronLeftIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";
import { navigateTo } from "nuxt/app";

const props = defineProps({
  asChild: { type: Boolean, required: false, default: true },
  as: { type: null, required: false },
  class: { type: null, required: false },
  page: { type: Number },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const handleClick = () => {
  navigateTo({
    path: "/",
    query: { page: props.page ? parseInt(props.page) - 1 : "" },
  });
};
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button
      @click="handleClick"
      :class="cn('w-9 h-9 p-0', props.class)"
      variant="outline"
    >
      <slot>
        <ChevronLeftIcon />
      </slot>
    </button>
  </PaginationPrev>
</template>
