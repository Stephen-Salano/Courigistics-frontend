<template>
  <Transition name="toast-pop">
    <div v-if="show" class="toast toast-bottom toast-end z-50 p-4">
      <div 
        class="alert shadow-xl border-none rounded-2xl flex items-center gap-3 min-w-[300px]"
        :class="type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'"
      >
        <!-- Success Icon -->
        <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        
        <!-- Error Icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        
        <span class="font-medium">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'error'].includes(value)
  }
})
</script>

<style scoped>
/* Animation: Pop in from bottom right */
.toast-pop-enter-active,
.toast-pop-leave-active {
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.toast-pop-enter-from,
.toast-pop-leave-to {
  opacity: 0;
  /* Move down and right to simulate popping from corner */
  transform: translate(20px, 20px) scale(0.95);
}
</style>