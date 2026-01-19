<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="min-h-[90vh] flex items-center justify-center px-4 bg-white">
      <div class="container mx-auto max-w-4xl text-center">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Welcome to Courigistics
        </h1>
        <p class="text-xl md:text-2xl text-green-600 font-medium mb-10 max-w-2xl mx-auto animate-fade-in-up-delay">
          Your trusted partner for efficient courier and logistics management. 
          Track, manage, and deliver with ease.
        </p>
        <div class="animate-fade-in-up-delay-2">
          <router-link 
            to="/signup" 
            class="btn bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white text-lg px-10 py-4 border-none transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-4 bg-gray-50 scroll-section">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-900">Powerful Features</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your courier and logistics operations efficiently
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Feature 1 -->
          <div class="card bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 scroll-item">
            <div class="card-body">
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">📦</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2 text-gray-900">Real-Time Package Tracking</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Track your packages in real-time from pickup to delivery. Get instant notifications and updates on delivery status, location, and estimated arrival times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="card bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 scroll-item">
            <div class="card-body">
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">🚚</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2 text-gray-900">Fleet Management</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Efficiently manage your entire delivery fleet. Monitor vehicle status, maintenance schedules, driver assignments, and optimize resource allocation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="card bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 scroll-item">
            <div class="card-body">
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">📊</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2 text-gray-900">Advanced Analytics</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Comprehensive analytics dashboard with detailed insights into delivery performance, customer satisfaction, revenue trends, and operational efficiency metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="card bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 scroll-item">
            <div class="card-body">
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">🗺️</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2 text-gray-900">Route Optimization</h3>
                  <p class="text-gray-600 leading-relaxed">
                    AI-powered route optimization to reduce delivery times and fuel costs. Automatically calculate the most efficient routes for your couriers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 5 -->
          <div class="card bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 scroll-item">
            <div class="card-body">
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">📱</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2 text-gray-900">Mobile App Integration</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Seamless mobile experience for couriers and customers. Update delivery status on-the-go, capture signatures, and access all features from your smartphone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 6 -->
          <div class="card bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 scroll-item">
            <div class="card-body">
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">🔔</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2 text-gray-900">Smart Notifications</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Automated notifications via SMS, email, and push alerts. Keep customers informed about delivery status, delays, and special instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 px-4 bg-white scroll-section">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">How It Works</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple steps to streamline your courier and logistics operations
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center scroll-item hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
              <span class="text-3xl font-bold text-green-600">1</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">Create Your Account</h3>
            <p class="text-gray-600">
              Sign up in minutes and set up your profile. Add your business details and delivery preferences.
            </p>
          </div>
          <div class="text-center scroll-item hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
              <span class="text-3xl font-bold text-green-600">2</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">Manage Deliveries</h3>
            <p class="text-gray-600">
              Create delivery orders, assign couriers, and track packages in real-time from a single dashboard.
            </p>
          </div>
          <div class="text-center scroll-item hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
              <span class="text-3xl font-bold text-green-600">3</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">Track & Optimize</h3>
            <p class="text-gray-600">
              Monitor delivery status, analyze performance metrics, and optimize routes for better efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-20 px-4 bg-gray-50 scroll-section">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">Why Choose Courigistics?</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the advantages of a comprehensive logistics management platform
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <div class="text-4xl mb-4">⏱️</div>
              <h3 class="card-title text-lg mb-2">Time Efficient</h3>
              <p class="text-gray-600 text-sm">
                Save hours with automated processes and streamlined workflows
              </p>
            </div>
          </div>
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <div class="text-4xl mb-4">💰</div>
              <h3 class="card-title text-lg mb-2">Cost Effective</h3>
              <p class="text-gray-600 text-sm">
                Reduce operational costs with optimized routes and better resource management
              </p>
            </div>
          </div>
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <div class="text-4xl mb-4">🔒</div>
              <h3 class="card-title text-lg mb-2">Secure & Reliable</h3>
              <p class="text-gray-600 text-sm">
                Enterprise-grade security with 99.9% uptime guarantee
              </p>
            </div>
          </div>
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <div class="text-4xl mb-4">📱</div>
              <h3 class="card-title text-lg mb-2">Mobile Friendly</h3>
              <p class="text-gray-600 text-sm">
                Access your dashboard from any device, anywhere, anytime
              </p>
            </div>
          </div>
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <div class="text-4xl mb-4">📈</div>
              <h3 class="card-title text-lg mb-2">Real-time Analytics</h3>
              <p class="text-gray-600 text-sm">
                Make data-driven decisions with comprehensive reporting and insights
              </p>
            </div>
          </div>
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <div class="text-4xl mb-4">🤝</div>
              <h3 class="card-title text-lg mb-2">24/7 Support</h3>
              <p class="text-gray-600 text-sm">
                Get help whenever you need it with our dedicated support team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 px-4 bg-green-600 text-white scroll-section">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="text-center scroll-item hover:scale-110 transition-transform duration-300">
            <div class="text-4xl md:text-5xl font-bold mb-2">10K+</div>
            <div class="text-green-100">Active Users</div>
          </div>
          <div class="text-center scroll-item hover:scale-110 transition-transform duration-300">
            <div class="text-4xl md:text-5xl font-bold mb-2">500K+</div>
            <div class="text-green-100">Deliveries Completed</div>
          </div>
          <div class="text-center scroll-item hover:scale-110 transition-transform duration-300">
            <div class="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
            <div class="text-green-100">Uptime</div>
          </div>
          <div class="text-center scroll-item hover:scale-110 transition-transform duration-300">
            <div class="text-4xl md:text-5xl font-bold mb-2">24/7</div>
            <div class="text-green-100">Support Available</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 px-4 bg-gray-50 scroll-section">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <p class="text-gray-600 mb-4 italic">
                "Courigistics has transformed our delivery operations. The tracking system is excellent!"
              </p>
              <div class="flex items-center">
                <div class="avatar placeholder">
                  <div class="bg-green-500 text-white rounded-full w-12">
                    <span>JD</span>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Jane Doe</p>
                  <p class="text-sm text-gray-500">CEO, Logistics Co.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <p class="text-gray-600 mb-4 italic">
                "Easy to use interface and reliable service. Highly recommended!"
              </p>
              <div class="flex items-center">
                <div class="avatar placeholder">
                  <div class="bg-green-500 text-white rounded-full w-12">
                    <span>JS</span>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">John Smith</p>
                  <p class="text-sm text-gray-500">Operations Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-item">
            <div class="card-body">
              <p class="text-gray-600 mb-4 italic">
                "The best courier management system we've used. Excellent customer support!"
              </p>
              <div class="flex items-center">
                <div class="avatar placeholder">
                  <div class="bg-green-500 text-white rounded-full w-12">
                    <span>MJ</span>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="font-semibold text-gray-900">Mary Johnson</p>
                  <p class="text-sm text-gray-500">Delivery Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 px-4 bg-white scroll-section">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using Courigistics to streamline their logistics operations
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/signup" 
            class="btn bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white text-lg px-10 py-4 border-none transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Free Trial
          </router-link>
          <a 
            href="#contact" 
            class="btn btn-outline border-green-600 text-green-600 hover:bg-green-50 hover:scale-105 active:scale-95 text-lg px-10 py-4 transition-all duration-300"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="footer footer-center p-10 bg-gray-900 text-white">
      <div>
        <h3 class="text-2xl font-bold mb-2">Courigistics</h3>
        <p class="text-gray-400">Efficient courier and logistics management</p>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <a class="text-white hover:text-green-400 transition-colors" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a class="text-white hover:text-green-400 transition-colors" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a class="text-white hover:text-green-400 transition-colors" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <p class="text-gray-400">Copyright © {{ new Date().getFullYear() }} - All rights reserved by Courigistics</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'

onMounted(() => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all scroll items
  const scrollItems = document.querySelectorAll('.scroll-item')
  scrollItems.forEach(item => observer.observe(item))

  // Observe all scroll sections
  const scrollSections = document.querySelectorAll('.scroll-section')
  scrollSections.forEach(section => observer.observe(section))
})
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Fade-in-up animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-up-delay {
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-fade-in-up-delay-2 {
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

/* Scroll item animations */
.scroll-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.scroll-section {
  opacity: 0;
  transition: opacity 0.8s ease-out;
}

.scroll-section.animate-in {
  opacity: 1;
}
</style>
