import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const sidebarOpen = ref(false) // For mobile drawer
  const miniSidebar = ref(false) // For desktop collapse

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  return { sidebarOpen, miniSidebar, toggleSidebar }
})