<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue'
const open = ref(false)

</script>

<template>
  <Dialog :open="open">
    <DialogTrigger as-child>
      <Button variant="outline" class="bg-gray-300 text-black">
        Add Data
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Data</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <CustomForm :open="open"/>
    </DialogContent>
  </Dialog>
</template>