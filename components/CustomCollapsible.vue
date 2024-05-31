<script setup>
import { ref } from "vue";
import { CaretSortIcon, Cross2Icon } from "@radix-icons/vue";
const isOpen = ref(false);
</script>

<template class="">
  <Collapsible
    v-model:open="isOpen"
    class="w-[350px] space-y-2 bg-gray-300 rounded-lg"
  >
    <CollapsibleTrigger
      class="cursor-pointer w-full flex justify-between items-center px-4 py-2"
    >
      <p class="text-lg">UnoCSS & Notivue</p>
      <div>
        <Cross2Icon v-if="isOpen" class="h-4 w-4" />
        <CaretSortIcon v-else class="h-6 w-6" />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent class="space-y-2 px-4 py-3">
      <slot />
    </CollapsibleContent>
  </Collapsible>
</template> 