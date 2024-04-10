<script setup>
import { computed } from "vue";
import { PaginationFirst } from "radix-vue";
import { DoubleArrowLeftIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";

const props = defineProps(['asChild', 'as', 'class', 'isFirstPage']);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const handleClick = () => {
  navigateTo({
    path: "/",
    query: { page: 1 },
  });
};
</script>

<template>
  <PaginationFirst v-bind="delegatedProps" @click="handleClick">
    <Button :class="cn('w-9 h-9 p-0', props.class)" variant="outline">
      <slot>
        <DoubleArrowLeftIcon />
      </slot>
    </Button>
  </PaginationFirst>
</template>
