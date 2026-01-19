import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: { 'Content-Type': 'application/json' }
})

// Request interceptor: Add auth token
api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.accessToken && !config.url.includes('/auth/login') && !config.url.includes('/auth/register')) {
    config.headers.Authorization = `Bearer ${authStore.accessToken}`
  }
  return config
})

// Response interceptor: Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 (token expired) - redirect to login
    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      authStore.logout()
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default api
