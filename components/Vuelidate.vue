<script setup>
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, minValue, alpha } from "@vuelidate/validators";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { ref, onMounted } from "vue";
// import { fileValidator } from "../constants";

let image = ref(null);
let imageError = ref(null);
let form = ref({
  status: "Active",
});

const rules = {
  name: { required, alpha },
  operation_start: { required },
  operation_end: { required },
  link: { required },
  address: { required },
  region: { required },
  description: { required },
  // image: { required },
};

// onMounted(() => {
//   form.value = {
//     status: "Active",
//     name: "Jon Doe",
//     operation_start: "12:00 PM",
//     operation_end: "12:00 PM",
//     link: "eee",
//     address: "eeeee",
//     region: "two",
//     description: "eeeeeee",
//   };
// });

const config = {
  enableTime: true,
  noCalendar: true,
  dateFormat: "h:i K",
  allowInput: false,
};

const v$ = useVuelidate(rules, form);

async function handleSubmit() {
  const result = await v$.value.$validate();
  if (result) {
    const data = { ...form.value, image: image.value };
    console.log(data);
    form.value = {
      status: "Active",
    };
    image.value = null;
    await v$.value.$reset();
  }
}

function onFileChange(e) {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) {
    return;
  }
  image.value = files[0];
  // imageError.value = fileValidator(files[0]);
}

const test = useColor()
console.log(test.value)

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <main class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      <div>
        <label for="name">Business Name</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          placeholder="Insert your value"
        />
        <small class="text-red-500">{{ v$?.name?.$errors[0]?.$message }}</small>
      </div>

      <div>
        <label for="email">Operation Hours</label>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <flat-pickr
              :config="config"
              class="form-control"
              v-model="form.operation_start"
              placeholder="Start time"
            />
            <small class="text-red-500">{{
              v$?.operation_start?.$errors[0]?.$message
            }}</small>
          </div>
          <div>
            <flat-pickr
              :config="config"
              class="form-control"
              v-model="form.operation_end"
              placeholder="End time"
            />
            <small class="text-red-500">{{
              v$?.operation_end?.$errors[0]?.$message
            }}</small>
          </div>
        </div>
      </div>

      <div>
        <label for="link">Link/URL</label>
        <input
          v-model="form.link"
          type="text"
          id="link"
          placeholder="Insert your value"
        />
        <small class="text-red-500">{{ v$?.link?.$errors[0]?.$message }}</small>
      </div>

      <div>
        <label for="address">Address</label>
        <input
          v-model="form.address"
          type="text"
          id="address"
          placeholder="Insert your value"
        />
        <small class="text-red-500">{{ v$?.address?.$errors[0]?.$message }}</small>
      </div>

      <div>
        <label for="region">Region</label>
        <select name="region" id="region" v-model="form.region" class="h-[42px]">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
        <small class="text-red-500">{{ v$?.region?.$errors[0]?.$message }}</small>
      </div>

      <div class="radio">
        <label for="gender">Status</label>
        <section>
          <label
            ><input type="radio" name="status" value="Active" v-model="form.status" />
            Active</label
          >
          <label
            ><input type="radio" name="status" value="Inactive" v-model="form.status" />
            Inactive</label
          >
        </section>
        <small class="text-red-500">{{ v$?.gender?.$errors[0]?.$message }}</small>
      </div>

      <div>
        <label for="status">Description</label>
        <textarea
          v-model="form.description"
          type="text"
          id="description"
          placeholder="Insert your value"
          rows="4"
        />
        <small class="text-red-500">{{ v$?.description?.$errors[0]?.$message }}</small>
      </div>

      <div>
        <label for="file">Business Image</label>
        <input id="file" @change="onFileChange" type="file" />
        <small v-if="!image" class="text-red-500">{{
          imageError?.value || v$.image?.$errors[0]?.$message
        }}</small>
      </div>
    </main>
    <br />
    <button type="submit">Save</button>
  </form>
</template>

<style scope>
.radio label {
  display: flex;
  place-items: center;
}
.radio section {
  display: flex;
  gap: 12px;
}
label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}
</style>
