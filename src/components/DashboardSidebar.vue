<template>
  <aside 
    class="bg-white border-r border-dashed border-gray-300 h-full transition-all duration-300 ease-in-out flex flex-col"
    :class="layoutStore.miniSidebar ? 'w-20' : 'w-72'"
  >
    <!-- Logo Section -->
    <div class="h-[74px] flex items-center px-6 border-b border-dashed border-gray-200">
      <router-link to="/dashboard" class="flex items-center gap-2 overflow-hidden whitespace-nowrap">
        <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
          <span class="text-white font-bold text-lg">C</span>
        </div>
        <span 
          class="text-xl font-bold text-gray-900 transition-opacity duration-300"
          :class="layoutStore.miniSidebar ? 'opacity-0 w-0' : 'opacity-100'"
        >
          Courigistics
        </span>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <div class="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
      <ul class="space-y-1">
        <template v-for="(item, index) in sidebarItems" :key="index">
          <!-- Header -->
          <li v-if="item.header" class="px-3 mt-4 mb-2">
            <span 
              class="text-xs font-bold text-gray-400 uppercase tracking-wider transition-opacity duration-300"
              :class="layoutStore.miniSidebar ? 'hidden' : 'block'"
            >
              {{ item.header }}
            </span>
            <div v-if="layoutStore.miniSidebar" class="h-px bg-gray-200 my-2"></div>
          </li>

          <!-- Menu Item -->
          <li v-else>
            <!-- Regular Link -->
            <router-link
              v-if="!item.action"
              :to="item.to"
              class="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative"
              :class="[
                isActive(item.to) ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
              ]"
            >
              <!-- Icon -->
              <span class="shrink-0">
                <img :src="item.icon" class="w-5 h-5" alt="icon" />
              </span>

              <!-- Text -->
              <span 
                class="whitespace-nowrap transition-all duration-300 overflow-hidden"
                :class="layoutStore.miniSidebar ? 'w-0 opacity-0' : 'w-auto opacity-100'"
              >
                {{ item.title }}
              </span>

              <!-- Tooltip for Mini Sidebar -->
              <div 
                v-if="layoutStore.miniSidebar"
                class="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50"
              >
                {{ item.title }}
              </div>
            </router-link>

            <!-- Action Button (e.g. Logout) -->
            <button
              v-else
              @click="handleAction(item.action)"
              class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative text-gray-600 hover:bg-red-50 hover:text-red-600"
            >
              <!-- Icon -->
              <span class="shrink-0">
                <img :src="item.icon" class="w-5 h-5" alt="icon" />
              </span>

              <!-- Text -->
              <span
                class="whitespace-nowrap transition-all duration-300 overflow-hidden"
                :class="layoutStore.miniSidebar ? 'w-0 opacity-0' : 'w-auto opacity-100'"
              >
                {{ item.title }}
              </span>

              <!-- Tooltip for Mini Sidebar -->
              <div
                v-if="layoutStore.miniSidebar"
                class="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50"
              >
                {{ item.title }}
              </div>
            </button>
          </li>
        </template>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { useLayoutStore } from '@/stores/layout'
import sidebarItems from './sidebarItems'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const layoutStore = useLayoutStore()
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const isActive = (path) => {
  // Exact match for dashboard home
  if (path === '/dashboard') {
    return route.path === '/dashboard'
  }
  // Prefix match for other routes, but exclude exact dashboard match if path is just /dashboard
  return route.path.startsWith(path)
}

const handleAction = (action) => {
  if (action === 'logout') {
    authStore.logout()
    router.push('/login')
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}
</style>
