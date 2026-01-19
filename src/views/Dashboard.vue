<template>
  <div class="drawer lg:drawer-open">
    <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
    
    <!-- Page content -->
    <div class="drawer-content flex flex-col">
      <!-- Top Navbar -->
      <DashboardNavbar />
      
      <!-- Main Content -->
      <main class="flex-1 p-6 bg-gray-50">
        <div class="container mx-auto">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side">
      <label for="dashboard-drawer" class="drawer-overlay"></label>
      <DashboardSidebar />
    </div>
  </div>
</template>

<script setup>
import DashboardNavbar from '@/components/DashboardNavbar.vue'
import DashboardSidebar from '@/components/DashboardSidebar.vue'
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
