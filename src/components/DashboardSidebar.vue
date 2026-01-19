<template>
  <aside class="w-64 bg-base-200 min-h-screen">
    <ul class="menu p-4 w-full">
      <li>
        <router-link to="/dashboard" class="flex items-center gap-3 hover:bg-green-100 hover:text-green-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="w-5 h-5">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/deliveries" class="flex items-center gap-3 hover:bg-green-100 hover:text-green-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="w-5 h-5">
            <path d="M16 3h5v5"></path>
            <path d="M8 3H3v5"></path>
            <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
            <path d="m15 9 6-6"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
          </svg>
          <span>Deliveries</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/vehicles" class="flex items-center gap-3 hover:bg-green-100 hover:text-green-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="w-5 h-5">
            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
            <path d="M12 15a3 3 0 1 1 6 0 3 3 0 1 1-6 0"></path>
            <path d="M12 15v4"></path>
            <path d="M18 15v4"></path>
          </svg>
          <span>Vehicle Management</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/settings" class="flex items-center gap-3 hover:bg-green-100 hover:text-green-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="w-5 h-5">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span>Profile & Settings</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
// Sidebar component
</script>
