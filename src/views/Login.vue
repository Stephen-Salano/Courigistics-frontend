<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <!-- Back to Home -->
    <div class="absolute top-4 left-4 sm:top-8 sm:left-8">
      <router-link to="/" class="flex items-center gap-2 group">
        <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
          <span class="text-white font-bold text-xl">C</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Courigistics</span>
          <span class="text-xs text-gray-500 group-hover:text-green-600 transition-colors">← Back to Home</span>
        </div>
      </router-link>
    </div>

    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h2>
        <p class="text-gray-600">Sign in to your account</p>
        <router-link to="/signup" class="text-green-600 hover:text-green-700 text-sm font-medium mt-2 inline-block">
          Don't have an account? Sign up
        </router-link>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="label">
              <span class="label-text font-medium">Username or Email *</span>
            </label>
            <input
              type="text"
              v-model="form.usernameOrEmail"
              required
              class="input input-bordered w-full"
              :class="{ 'input-error': errors.usernameOrEmail }"
              placeholder="johndoe or john.doe@example.com"
            />
            <label v-if="errors.usernameOrEmail" class="label">
              <span class="label-text-alt text-error">{{ errors.usernameOrEmail }}</span>
            </label>
          </div>

          <div>
            <label class="label">
              <span class="label-text font-medium">Password *</span>
            </label>
            <input
              type="password"
              v-model="form.password"
              required
              class="input input-bordered w-full"
              :class="{ 'input-error': errors.password }"
              placeholder="••••••••"
            />
            <label v-if="errors.password" class="label">
              <span class="label-text-alt text-error">{{ errors.password }}</span>
            </label>
          </div>

          <div class="flex items-center justify-between">
            <label class="label cursor-pointer">
              <input type="checkbox" v-model="rememberMe" class="checkbox checkbox-primary checkbox-sm mr-2" />
              <span class="label-text">Remember me</span>
            </label>
            <a href="#" class="text-sm text-green-600 hover:text-green-700 font-medium">
              Forgot password?
            </a>
          </div>

          <div class="pt-4">
            <button
              type="submit"
              class="btn bg-green-600 hover:bg-green-700 text-white w-full"
              :class="{ 'loading': loading }"
              :disabled="loading"
            >
              {{ loading ? 'Signing in...' : 'Sign In' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Toast Notification -->
    <ToastNotification 
      :show="toast.show" 
      :message="toast.message" 
      :type="toast.type" 
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import ToastNotification from '@/components/ToastNotification.vue'
import api from '@/services/api'

const router = useRouter()
const authStore = useAuthStore()

const loading = ref(false)
const rememberMe = ref(false)
const toast = reactive({ show: false, message: '', type: 'success' })

const form = reactive({
  usernameOrEmail: '',
  password: ''
})

const errors = reactive({})

// Redirect if already logged in
onMounted(() => {
  if (authStore.accessToken) {
    router.push('/dashboard')
  }
})

const showToast = (message, type = 'success') => {
  toast.show = true
  toast.message = message
  toast.type = type
  setTimeout(() => {
    toast.show = false
  }, 3000)
}

const handleSubmit = async () => {
  Object.keys(errors).forEach(key => delete errors[key])

  if (!form.usernameOrEmail) {
    errors.usernameOrEmail = 'Username or email is required'
    return
  }

  if (!form.password) {
    errors.password = 'Password is required'
    return
  }

  loading.value = true

  try {
    const response = await api.post('/auth/login/customer', {
      usernameOrEmail: form.usernameOrEmail,
      password: form.password
    })

    if (response.data.success && response.data.data) {
      const data = response.data.data
      
      // Store authentication data
      authStore.setAuth({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        username: data.username,
        email: data.email,
        role: data.role
      })

      showToast('Login successful! Redirecting...', 'success')
      
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    }
  } catch (error) {
    const message = error.response?.data?.message || 'Invalid username or password'
    showToast(message, 'error')
    errors.password = 'Invalid credentials'
  } finally {
    loading.value = false
  }
}
</script>
