// /src/stores/theme.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(localStorage.getItem('theme') === 'dark')

  const themeClass = computed(() => (isDark.value ? 'dark-theme' : 'light-theme'))

  function toggleTheme() {
    console.log('toggleTheme.value', themeClass.value)
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, themeClass, toggleTheme }
})
