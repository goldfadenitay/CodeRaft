import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    isAuthenticated: false,
  }),
  actions: {
    login(name: string) {
      this.name = name
      this.isAuthenticated = true
    },
    logout() {
      this.name = ''
      this.isAuthenticated = false
    },
  },
})
