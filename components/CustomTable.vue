<script setup>
import { defineProps, ref, defineEmits } from "vue";
const loading = ref(false);
import { ReloadIcon } from "@radix-icons/vue";
import { toast } from "./ui/toast";
import { useRuntimeConfig } from "nuxt/app";
const config = useRuntimeConfig();
const app_id = config.public.app_id;
import { inject } from 'vue';

const open = inject('open');
const { apidata, refresh } = defineProps(["apidata", "refresh"]);

const handleEdit = (item) => {
  open.value = true;
  // console.log(item);
};

const handleDelete = async (id) => {
  loading.value = true;
  const url = `https://dummyapi.io/data/v1/user/${id}`;
  try {
    const resp = await useFetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "app-id": "6614d933c2921c5b50c3adf8",
      },
    });
    if (resp.status.value == "success") {
      loading.value = false;
      toast({
        title: "Success",
        variant: "success",
      });
      refresh();
    } else {
      loading.value = false;
      console.log(resp.error.value.message);
      toast({
        title: resp.error.value.message,
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    loading.value = false;
  }
};
</script>

<template class="relative px-4">
  <ReloadIcon
    v-if="loading"
    class="absolute z-10 w-8 h-8 mr-2 text-purple-600 animate-spin"
  />
  <Table v-if="apidata" class="text-lg">
    <TableHeader>
      <TableRow class="uppercase">
        <TableHead>first name</TableHead>
        <TableHead>last name</TableHead>
        <TableHead class="text-right">action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="item in apidata" :key="item.id">
        <TableCell>{{ item.firstName }}</TableCell>
        <TableCell>{{ item.lastName }}</TableCell>
        <TableCell class="text-right space-x-3 text-sm">
          <Button @click="() => handleEdit(item)">Edit</Button>
          <Button @click="() => handleDelete(item.id)">Delete</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  <div v-else>No data available</div>
</template>