<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { RouterLink, RouterView } from 'vue-router'

const isDark = useDark({
  storageKey: 'theme',
  valueDark: 'dark-theme',
  valueLight: 'light-theme',
})

const toggleDark = useToggle(isDark)
</script>

<template>
  <div :class="isDark ? 'dark' : 'light'">
    <header>
      <div class="wrapper">
        <nav>
          <button @click="toggleDark">
            {{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
          </button>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about" class="about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
body {
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
