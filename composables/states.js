import { reactive } from 'vue'

export const store = reactive({
  formData: {}
})

export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}