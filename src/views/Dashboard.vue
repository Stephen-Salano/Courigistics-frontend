<template>
  <div class="flex h-screen bg-gray-50 overflow-hidden">
    <!-- Sidebar (Desktop) -->
    <div class="hidden lg:block shrink-0 h-full">
      <DashboardSidebar />
    </div>

    <!-- Sidebar (Mobile Drawer) -->
    <div 
      class="fixed inset-0 z-50 lg:hidden" 
      v-if="layoutStore.sidebarOpen"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="layoutStore.sidebarOpen = false"></div>
      <!-- Sidebar Content -->
      <div class="absolute left-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300">
        <DashboardSidebar />
      </div>
    </div>
    
    <!-- Page content -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <!-- Top Navbar -->
      <DashboardNavbar />
      
      <!-- Main Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div class="max-w-7xl mx-auto">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
        
        <!-- Footer (Optional) -->
        <div class="mt-8 text-center text-xs text-gray-400">
          &copy; 2024 Courigistics. Crafted with ♥
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import DashboardNavbar from '@/components/DashboardNavbar.vue'
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
