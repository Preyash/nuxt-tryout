import { reactive } from 'vue'

export const store = reactive({
  formData: {},
  isLoggedIn: false
})

export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const useStateData = () => {
  const data = useState('state', () => {
    return {
      name: 'preyash',
      age: 32
    }
  })
  const setData = (user) => {
    data.value = user
  }
  return {
    data,
    setData
  }
}

export const useColor = () => useState('color', () => '')
