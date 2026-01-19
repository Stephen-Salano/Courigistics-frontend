<template>
  <nav class="navbar sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-dashed border-gray-200 h-[74px] px-4 sm:px-6">
    <div class="flex-1">
      <!-- Sidebar Toggle Button -->
      <button 
        @click="toggleSidebar" 
        class="btn btn-square btn-ghost btn-sm text-gray-500 hover:bg-green-50 hover:text-green-600 mr-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      
      <!-- Search (Hidden on small screens) -->
      <div class="hidden md:flex items-center relative w-64">
        <span class="absolute left-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>
        <input 
          type="text" 
          placeholder="Ctrl + k" 
          class="input input-bordered input-sm w-full pl-9 bg-transparent border-gray-300 focus:border-green-500 focus:outline-none rounded-md"
        />
      </div>
    </div>

    <div class="flex items-center gap-4">
      <!-- Notifications -->
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <img src="@/assets/images/icons/Notifications.svg" class="h-5 w-5" alt="Notifications" />
          <span class="badge badge-xs badge-primary indicator-item bg-green-600 border-none"></span>
        </div>
      </button>

      <!-- Shopping Cart Dropdown -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="badge badge-sm indicator-item bg-green-600 border-none">0</span>
          </div>
        </div>
        <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          <div class="card-body">
            <span class="text-lg font-bold">No items</span>
            <span class="text-info">Start adding deliveries</span>
            <div class="card-actions">
              <router-link to="/dashboard/deliveries" class="btn btn-primary btn-block bg-green-600 hover:bg-green-700 border-none">
                View Deliveries
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- User Profile Dropdown -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full bg-green-600 flex items-center justify-center">
            <span class="text-white font-bold text-lg">{{ userInitials }}</span>
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li class="menu-title">
            <span>{{ user?.username || 'User' }}</span>
          </li>
          <li>
            <router-link to="/dashboard/settings" class="justify-between">
              Profile & Settings
            </router-link>
          </li>
          <li><a>Settings</a></li>
          <li><a @click="handleLogout" class="text-red-600">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useLayoutStore } from '@/stores/layout'

const router = useRouter()
const authStore = useAuthStore()
const layoutStore = useLayoutStore()

const toggleSidebar = () => {
  // If mobile, toggle open state
  // If desktop, toggle mini state
  if (window.innerWidth < 1024) layoutStore.sidebarOpen = !layoutStore.sidebarOpen
  else layoutStore.miniSidebar = !layoutStore.miniSidebar
}

const user = computed(() => authStore.user)
const userInitials = computed(() => {
  if (user.value?.username) {
    return user.value.username.charAt(0).toUpperCase()
  }
  return 'U'
})

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>
