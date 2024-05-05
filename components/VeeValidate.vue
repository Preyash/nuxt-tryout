<script setup>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

const config = {
  enableTime: true,
  noCalendar: true,
  dateFormat: "h:i K",
  allowInput: false,
};

const schema = {
  name: "required|alpha",
  operation_start: "required",
  operation_end: "required",
  link: "required",
  address: "required",
  region: "required",
  status: "required",
  description: "required",
  file: "required",
};

let status = ref("Active");
console.log(status.value);

function onSubmit(values) {
  console.log(values);
}
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <main class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      <div>
        <label>Business Name</label>
        <Field label="Business Name" name="name" />
        <ErrorMessage name="name" />
      </div>

      <div>
        <label>Operation Hours</label>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <Field name="operation_start" v-slot="{ field }">
              <flatPickr
                v-bind="field"
                :config="config"
                class="form-control"
                placeholder="Start time"
              />
            </Field>
            <ErrorMessage name="operation_start" />
          </div>
          <div>
            <Field name="operation_end" v-slot="{ field }">
              <flatPickr
                v-bind="field"
                :config="config"
                class="form-control"
                placeholder="End time"
              />
            </Field>
            <ErrorMessage name="operation_end" />
          </div>
        </div>
      </div>

      <div>
        <label for="link">Link/URL</label>
        <Field name="link" />
        <ErrorMessage name="link" />
      </div>

      <div>
        <label>Address</label>
        <Field name="address" />
        <ErrorMessage name="address" />
      </div>

      <div>
        <label>Region</label>
        <Field name="region" as="select" class="h-[42px]">
          <option value="">Select</option>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </Field>
        <ErrorMessage name="region" />
      </div>

      <div>
        <label>Status</label>
        <div class="h-[42px]">
          <Field name="status" type="radio" value="Active" v-model="status"/> Active
          <Field name="status" type="radio" value="Inactive" v-model="status"/> Inactive
        </div>
        <ErrorMessage name="status" />
      </div>

      <div>
        <label>Description</label>
        <Field name="description" as="textarea" rows="4"/>
        <ErrorMessage name="description" />
      </div>

      <div>
        <label for="file">Business Image</label>
        <Field name="file" type="file" />
        <ErrorMessage name="file" />
      </div>
    </main>
    <br />
    <button type="submit">Submit</button>
  </Form>
</template>

