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

    <div class="max-w-2xl w-full space-y-8">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-2">Create Your Account</h2>
        <p class="text-gray-600">Sign up to start managing your logistics operations</p>
        <router-link to="/login" class="text-green-600 hover:text-green-700 text-sm font-medium mt-2 inline-block">
          Already have an account? Login
        </router-link>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8 md:p-10">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Personal Information -->
          <div class="space-y-5">
            <h3 class="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-6">Personal Information</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-control">
                <label class="label pb-2">
                  <span class="label-text font-semibold text-gray-700">First Name *</span>
                </label>
                <input
                  type="text"
                  v-model="form.firstName"
                  required
                  class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  :class="{ 'input-error border-red-500': errors.firstName }"
                  placeholder="John"
                />
                <label v-if="errors.firstName" class="label py-1">
                  <span class="label-text-alt text-red-600">{{ errors.firstName }}</span>
                </label>
              </div>

              <div class="form-control">
                <label class="label pb-2">
                  <span class="label-text font-semibold text-gray-700">Last Name *</span>
                </label>
                <input
                  type="text"
                  v-model="form.lastName"
                  required
                  class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  :class="{ 'input-error border-red-500': errors.lastName }"
                  placeholder="Doe"
                />
                <label v-if="errors.lastName" class="label py-1">
                  <span class="label-text-alt text-red-600">{{ errors.lastName }}</span>
                </label>
              </div>
            </div>

            <div class="form-control">
              <label class="label pb-2">
                <span class="label-text font-semibold text-gray-700">Email *</span>
              </label>
              <input
                type="email"
                v-model="form.email"
                required
                class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                :class="{ 'input-error border-red-500': errors.email }"
                placeholder="john.doe@example.com"
              />
              <label v-if="errors.email" class="label py-1">
                <span class="label-text-alt text-red-600">{{ errors.email }}</span>
              </label>
            </div>

            <div class="form-control">
              <label class="label pb-2">
                <span class="label-text font-semibold text-gray-700">Username *</span>
              </label>
              <input
                type="text"
                v-model="form.username"
                required
                class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                :class="{ 'input-error border-red-500': errors.username }"
                placeholder="johndoe"
              />
              <label v-if="errors.username" class="label py-1">
                <span class="label-text-alt text-red-600">{{ errors.username }}</span>
              </label>
            </div>

            <div class="form-control">
              <label class="label pb-2">
                <span class="label-text font-semibold text-gray-700">Password *</span>
              </label>
              <input
                type="password"
                v-model="form.password"
                required
                class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                :class="{ 'input-error border-red-500': errors.password }"
                placeholder="••••••••"
              />
              <label v-if="errors.password" class="label py-1">
                <span class="label-text-alt text-red-600">{{ errors.password }}</span>
              </label>
              <label class="label py-1">
                <span class="label-text-alt text-gray-500">Min 8 characters, must include uppercase, lowercase, number, and special character</span>
              </label>
            </div>

            <div class="form-control">
              <label class="label pb-2">
                <span class="label-text font-semibold text-gray-700">National ID *</span>
              </label>
              <input
                type="text"
                v-model="form.nationalId"
                required
                class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                :class="{ 'input-error border-red-500': errors.nationalId }"
                placeholder="1234567890"
              />
              <label v-if="errors.nationalId" class="label py-1">
                <span class="label-text-alt text-red-600">{{ errors.nationalId }}</span>
              </label>
            </div>

            <div class="form-control">
              <label class="label pb-2">
                <span class="label-text font-semibold text-gray-700">Phone Number *</span>
              </label>
              <input
                type="tel"
                v-model="form.phoneNumber"
                required
                class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                :class="{ 'input-error border-red-500': errors.phoneNumber }"
                placeholder="01234567890"
              />
              <label v-if="errors.phoneNumber" class="label py-1">
                <span class="label-text-alt text-red-600">{{ errors.phoneNumber }}</span>
              </label>
            </div>
          </div>

          <!-- Address Section (Collapsible) -->
          <div class="divider"></div>
          <div>
            <div class="flex items-center justify-between cursor-pointer" @click="showAddress = !showAddress">
              <h3 class="text-xl font-semibold text-gray-900">Address (Optional)</h3>
              <svg class="w-5 h-5 transition-transform" :class="{ 'rotate-180': showAddress }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div v-show="showAddress" class="mt-6 space-y-5">
              <div class="form-control">
                <label class="label pb-2">
                  <span class="label-text font-semibold text-gray-700">Address Label</span>
                </label>
                <input
                  type="text"
                  v-model="form.addressDTO.label"
                  class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  placeholder="Home, Office, etc."
                />
              </div>

              <div class="form-control">
                <label class="label pb-2">
                  <span class="label-text font-semibold text-gray-700">Address Line 1 *</span>
                </label>
                <input
                  type="text"
                  v-model="form.addressDTO.addressLine1"
                  class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  placeholder="Street address"
                />
              </div>

              <div class="form-control">
                <label class="label pb-2">
                  <span class="label-text font-semibold text-gray-700">Address Line 2</span>
                </label>
                <input
                  type="text"
                  v-model="form.addressDTO.addressLine2"
                  class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-control">
                  <label class="label pb-2">
                    <span class="label-text font-semibold text-gray-700">City *</span>
                  </label>
                  <input
                    type="text"
                    v-model="form.addressDTO.city"
                    class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                    placeholder="City"
                  />
                </div>

                <div class="form-control">
                  <label class="label pb-2">
                    <span class="label-text font-semibold text-gray-700">Postal Code *</span>
                  </label>
                  <input
                    type="text"
                    v-model="form.addressDTO.postalCode"
                    class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                    placeholder="12345"
                  />
                </div>
              </div>

              <div class="form-control">
                <label class="label pb-2">
                  <span class="label-text font-semibold text-gray-700">Country *</span>
                </label>
                <input
                  type="text"
                  v-model="form.addressDTO.country"
                  class="input input-bordered w-full bg-white border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  placeholder="Country"
                />
              </div>

              <div class="form-control">
                <label class="label cursor-pointer justify-start">
                  <input type="checkbox" v-model="form.addressDTO.isDefault" class="checkbox checkbox-primary mr-2" />
                  <span class="label-text">Set as default address</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button
              type="submit"
              class="btn bg-green-600 hover:bg-green-700 text-white w-full"
              :class="{ 'loading': loading }"
              :disabled="loading"
            >
              {{ loading ? 'Creating Account...' : 'Create Account' }}
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
import { ref, reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import ToastNotification from '@/components/ToastNotification.vue'
import api from '@/services/api'

const router = useRouter()

const loading = ref(false)
const showAddress = ref(false)
const toast = reactive({ show: false, message: '', type: 'success' })

const form = reactive({
  email: '',
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  nationalId: '',
  phoneNumber: '',
  addressDTO: {
    label: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    country: '',
    isDefault: true
  }
})

const errors = reactive({})

// Persistence Key
const STORAGE_KEY = 'courigistics_signup_form'

// Load saved form data on mount
onMounted(() => {
  const savedForm = localStorage.getItem(STORAGE_KEY)
  if (savedForm) {
    try {
      const parsed = JSON.parse(savedForm)
      // Restore form data, excluding password for security
      Object.assign(form, { ...parsed, password: '' })
      // If address data exists, expand the section
      if (form.addressDTO.addressLine1) showAddress.value = true
    } catch (e) {
      console.error('Failed to load saved form data', e)
    }
  }
})

// Watch form changes and save to localStorage (excluding password)
watch(form, (newForm) => {
  const formToSave = { ...newForm, password: '' }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formToSave))
}, { deep: true })

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validatePassword = (password) => {
  const minLength = password.length >= 8
  const hasUpper = /[A-Z]/.test(password)
  const hasLower = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  
  if (!minLength) return 'Password must be at least 8 characters'
  if (!hasUpper) return 'Password must contain an uppercase letter'
  if (!hasLower) return 'Password must contain a lowercase letter'
  if (!hasNumber) return 'Password must contain a number'
  if (!hasSpecial) return 'Password must contain a special character'
  return null
}

const validatePhone = (phone) => {
  const re = /^[0-9]{10,15}$/
  return re.test(phone.replace(/\s+/g, ''))
}

const validateForm = () => {
  Object.keys(errors).forEach(key => delete errors[key])
  
  if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  const passwordError = validatePassword(form.password)
  if (passwordError) {
    errors.password = passwordError
  }
  
  if (!validatePhone(form.phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid phone number (10-15 digits)'
  }
  
  // Validate address if provided
  if (showAddress.value && form.addressDTO.addressLine1) {
    if (!form.addressDTO.city) errors.city = 'City is required'
    if (!form.addressDTO.postalCode) errors.postalCode = 'Postal code is required'
    if (!form.addressDTO.country) errors.country = 'Country is required'
  }
  
  return Object.keys(errors).length === 0
}

const showToast = (message, type = 'success') => {
  toast.show = true
  toast.message = message
  toast.type = type
  setTimeout(() => {
    toast.show = false
  }, 3000)
}

const handleSubmit = async () => {
  if (!validateForm()) {
    showToast('Please fix the errors in the form', 'error')
    return
  }

  loading.value = true

  try {
    const payload = {
      email: form.email,
      username: form.username,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
      nationalId: form.nationalId,
      phoneNumber: form.phoneNumber
    }

    // Only include address if provided
    if (showAddress.value && form.addressDTO.addressLine1) {
      payload.addressDTO = form.addressDTO
    }

    const response = await api.post('/auth/register/customer', payload)

    if (response.data.success) {
      // Clear saved form data on success
      localStorage.removeItem(STORAGE_KEY)
      showToast('Registration successful! Redirecting to login...', 'success')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    }
  } catch (error) {
    console.error('Registration Error:', error)
    
    let message = 'Registration failed. Please try again.'
    
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      message = error.response.data?.message || message
    } else if (error.request) {
      // The request was made but no response was received (Network Error / CORS)
      message = 'Network Error: Unable to reach server. Please check your connection or CORS settings.'
    }
    
    showToast(message, 'error')
  } finally {
    loading.value = false
  }
}
</script>
