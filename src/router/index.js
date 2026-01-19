import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/views/Landing.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/Signup.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'dashboard-home',
          component: () => import('@/views/DashboardHome.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'deliveries',
          name: 'dashboard-deliveries',
          component: () => import('@/views/DashboardDeliveries.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'vehicles',
          name: 'dashboard-vehicles',
          component: () => import('@/views/DashboardVehicles.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'settings',
          name: 'dashboard-settings',
          component: () => import('@/views/DashboardSettings.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})

// Route guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.accessToken) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/signup') && authStore.accessToken) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router

