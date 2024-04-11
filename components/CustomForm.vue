<script setup>
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast/use-toast";
import { ErrorMessage, defineRule, useForm } from "vee-validate";
import { ref, defineProps, defineEmits, inject, onMounted } from "vue";
const url = "https://dummyapi.io/data/v1/user/create";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});

const loading = ref(false);
const { toast } = useToast();

const refresh = inject("refresh");
const open = inject("open");

const handleClose = () => {
  open.value = false;
};


const onSubmit = async (data, { resetForm }) => {
  loading.value = true;
  try {
    const resp = await useFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "app-id": "65f86ac91f2e05b7b444f58e",
      },
      body: JSON.stringify(data),
    });
    if (resp.status.value == "success") {
      toast({
        title: "Success",
        variant: "success",
      });
      loading.value = false;
      open.value = false;
      resetForm();
      refresh();
    } else {
      loading.value = false;
      toast({
        title: resp.error.value.data.data.email,
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    loading.value = false;
  }
};

const spanClasses = "text-xs font-medium text-destructive";
</script>

<template>
  <Form
    name="form"
    @submit="onSubmit"
    v-slot="{ errors }"
    class="space-y-3"
  >
    <FormField v-slot="{ field }" rules="required" name="firstName">
      <Input type="text" placeholder="First name" v-bind="field" />
      <span :class="spanClasses">{{ errors.firstName }}</span>
    </FormField>
    <FormField v-slot="{ field }" rules="required" name="lastName">
      <Input type="text" placeholder="Last name" v-bind="field" />
      <span :class="spanClasses">{{ errors.lastName }}</span>
    </FormField>
    <FormField v-slot="{ field }" rules="required" name="email">
      <Input type="text" placeholder="Email" v-bind="field" />
      <span :class="spanClasses">{{ errors.email }}</span>
    </FormField>
    <br />
    <div class="flex gap-2">
      <Button :loading="loading" type="submit" class="bg-purple-600 p-2">
        Submit
      </Button>
      <DialogClose as-child @click="handleClose">
        <Button type="button" variant="secondary"> Close </Button>
      </DialogClose>
    </div>
  </Form>
</template>
