<script setup lang="ts">
  import { useAppLayout } from '../app-logic'
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, navLinks } = useAppLayout()
  const isHydrated = ref<boolean>(false)

  onMounted(() => {
    isHydrated.value = true
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased overflow-y-auto">
    
    <Transition
      leave-active-class="transition duration-500 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 pointer-events-none"
    >
      <div 
        v-if="!isHydrated" 
        class="fixed inset-0 z-[999] bg-slate-900 flex flex-col items-center justify-center gap-4"
      >
        <!-- The Spinning Outer Ring Track -->
        <div class="relative w-24 h-24 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border-4 border-slate-800 border-t-sky-500 border-r-emerald-500 animate-spin"></div>

          <img 
            src="/brand/logo.png" 
            alt="TetraGRIC Ventures Logo Loading"
            width="48"
            height="48"
            loading="eager"
            class="w-12 h-12 rounded-xl object-cover shadow-lg shadow-sky-500/10"
          />
        </div>
        
        <!-- Minimal Loading Corporate Label -->
        <p class="text-xs font-bold tracking-widest text-slate-400 uppercase animate-pulse mt-2">
          Welcome to TetraGRIC Ltd - Loading...
        </p>
      </div>
    </Transition>

    <!-- 2. Core Application Layout Shell (Renders underneath seamlessly) -->
    <div :class="{ 'h-screen overflow-hidden': !isHydrated }">
      <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <!-- Brand Logo Area -->
        <div class="flex items-center gap-2">
          <img 
              src="/brand/logo.png" 
              alt="TetraGRIC Consulting Logo" 
              width="32" 
              height="32"
              class="w-8 h-8 rounded-lg object-cover" 
            />
          <span class="text-xl font-bold tracking-tight text-slate-900">
            Tetra<span class="text-sky-600"> GRIC </span> Services
          </span>
        </div>

        <!-- Desktop Navigation (Hidden on Mobile) -->
        <nav class="hidden md:flex items-center gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-sm font-bold text-slate-700 hover:text-sky-600 transition-colors duration-200"
          >
            {{ link.name }}
          </a>
          <button class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all duration-200">
            Get Started
          </button>
        </nav>

        <!-- Hamburger Icon Button (Hidden on Desktop) -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Toggle navigation menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Drawer Overlay Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-x-4"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-4"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden flex justify-end">
        <!-- Backdrop -->
        <div @click="closeMobileMenu" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
        
        <!-- Menu Content -->
        <nav class="relative w-72 max-w-sm h-full bg-white p-6 shadow-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-8">
              <span class="font-bold text-slate-900">Navigation</span>
              <button @click="closeMobileMenu" class="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-col gap-4">
              <a 
                v-for="link in navLinks" 
                :key="link.name" 
                :href="link.href"
                @click="closeMobileMenu"
                class="text-lg font-medium text-slate-800 hover:text-sky-700 block py-1"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
          <div class="pt-6 border-t border-slate-100">
            <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold shadow-md transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </Transition>

    <!-- Core Page Content Wrapper -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Professional Corporate Footer -->
    <footer class="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-sky-500 flex items-center justify-center text-white font-bold text-xs">T</div>
            <span class="text-white font-bold tracking-tight">TetraGRIC SOLUTIONS</span>
          </div>
          <p class="text-medium font-semibold leading-relaxed text-slate-300">
            VISION: To use digital intelligence to help people manage natural resources sustainably, meet today's needs and protect them for future generations.

          </p>
          <p class="text-sm leading-relaxed text-slate-300">
            Blending clean technology innovations with green, sustainable operational intelligence.
          </p>
        </div>
        <div>
          <h3 class="text-white font-semibold align-center text-sm mb-4 tracking-wider uppercase">Solutions</h3>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#" class="hover:text-sky-400 transition-colors">Blockchain Insurance</a></li>
            <li><a href="#" class="hover:text-emerald-400 transition-colors">Water Resource Data Management</a></li>
            <li><a href="#" class="hover:text-sky-400 transition-colors">Natural Tourism Cyber Security</a></li>
            <li><a href="#" class="hover:text-sky-400 transition-colors">Green Energy Data Analytics</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Company</h3>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#" class="hover:text-sky-400 transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-emerald-400 transition-colors">Climate Change Database</a></li>
            <li><a href="#" class="hover:text-sky-400 transition-colors">Careers</a></li>
            <li><a href="#" class="hover:text-sky-400 transition-colors">Contact</a></li>
            <li><a href="#" class="hover:text-sky-400 transition-colors">Download hyperlink to my homepage</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Legal & Compliance</h3>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#" class="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-sky-400 transition-colors">Trust Operations</a></li>
            <li><a href="#" class="hover:text-sky-400 transition-colors"> International</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 py-6 border-t border-slate-800 text-xs text-center md:flex md:justify-between text-slate-500">
        <p>&copy; 2026 TetraGRIC Ventures Ltd. All rights reserved.</p>
        <p class="mt-2 md:mt-0">Designed mobile-first in Kampala, Uganda.</p>
      </div>
    </footer>
    </div>
  </div>
</template>