<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo - Far Left -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center gap-2">
            <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">C</span>
            </div>
            <span class="text-2xl font-bold text-gray-900">Courigistics</span>
          </router-link>
        </div>

        <!-- Navigation Links - Center -->
        <div class="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#features" class="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105 relative group">
            Features
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#how-it-works" class="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105 relative group">
            How It Works
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#benefits" class="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105 relative group">
            Benefits
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimonials" class="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105 relative group">
            Testimonials
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <!-- Login & CTA - Far Right -->
        <div class="flex-shrink-0">
          <div class="flex items-center gap-3">
            <router-link 
              to="/login" 
              class="btn btn-ghost text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Login
            </router-link>
            <router-link 
              to="/signup" 
              class="btn bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white border-none font-medium px-6 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Navbar component
</script>
