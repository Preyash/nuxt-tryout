<script setup lang="ts">
import { inject } from "vue";
const open = inject("open");

const handleOpen = () => {
  open.value = true;
};
</script>

<template>
  <Dialog :open="open">
    <Button
      variant="outline"
      class="bg-gray-300 text-black"
      @click="handleOpen"
    >
      Add Data
    </Button>
    <DialogContent class="sm:max-w-[425px]" :open="open">
      <DialogHeader>
        <DialogTitle>Add Data</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click submit when you're done.
        </DialogDescription>
      </DialogHeader>
      <CustomForm :open="open" />
    </DialogContent>
  </Dialog>
</template>