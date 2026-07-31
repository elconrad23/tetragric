<script setup lang="ts">
import type { HeroSlide } from '../../server/api/slides.get'
import ContactForm from '~/components/ContactForm.vue'
import {scrollToSlide, handleScrollTrack, startAutoPlay} from './index-logic'

// 1. Dynamic Data Loading via Nuxt useFetch
const { data: slides } = await useFetch<HeroSlide[]>('/api/slides')

// 2. Desktop Auto-transition logic
const carouselRef = ref<HTMLElement | null>(null)
const activeIndex = ref<number>(0)
let timer: ReturnType<typeof setInterval> | null = null
</script>

<template>
  <div>
    <!-- Hero Block -->
    <section 
      class="animate-fade-up py-12 md:py-20 overflow-hidden relative bg-cover bg-center bg-no-repeat"
      style="background-image: url('/_nuxt/assets/images/hero.jpg');"
    >
      <!-- Dark overlay for text readability -->
      <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      
      <!-- Content container elevated above overlay with relative z-10 -->
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- Main flex row to keep heading left-aligned and contact right-aligned -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <!-- H1 aligned to the left with crisp white text -->
          <div class="max-w-2xl text-left">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
              Digital Solutions for Sustainable Governance of
              <span class="text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-sky-400 to-emerald-300">
                Global Natural Resources
              </span>
            </h1>
          </div>

          <!-- Phone & Email -->
          <div class="text-left md:text-right text-slate-200">
            <p class="sm:text-lg font-semibold drop-shadow">
              +256 (0) 700 675 453 <br />
              <a href="mailto:info@tetragric.com" class="text-sky-300 hover:text-sky-200 underline decoration-sky-400/50 underline-offset-4 font-semibold transition-colors">
                info@tetragric.com
              </a>
            </p>
          </div>
        </div>

        <!-- Carousel Track with Template Ref binding -->
        <div class="relative">
          <div 
            ref="carouselRef"
            class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 px-1 mask-linear-edge"
            style="-webkit-overflow-scrolling: touch; scrollbar-width: none;"
          >
            <div 
              v-for="slide in slides" 
              :key="slide.id" 
              class="w-[88vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] shrink-0 snap-start snap-always scroll-smooth transition-transform duration-500"
            >
              <div :class="['h-full bg-white/95 p-6 sm:p-8 rounded-2xl border-t-4 shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1', slide.accentColor]">
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <span class="text-3xl">{{ slide.icon }}</span>
                    <span class="inline-block text-lg font-bold tracking-wider uppercase bg-slate-100 text-slate-800 px-2.5 py-1 rounded-full">
                      {{ slide.badge }}
                    </span>
                  </div>
                  <h3 class="text-lg sm:text-2xl font-bold text-slate-800 mb-3">{{ slide.title }}</h3>
                  <p class="text-sm text-slate-800 mb-6">{{ slide.subtitle }}</p>
                </div>
                <a href="#" class="inline-flex items-center gap-2 text-sm font-bold text-[#556B2F] hover:text-[#4A5320]">Learn More 
                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="relative isolate overflow-hidden pagebackg-shell py-12 md:py-16">
      <section 
        class="animate-fade-up py-12 max-w-7xl mx-auto px-4 relative z-10"
        style="animation-delay: 150ms;"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white/90 p-6 rounded-xl border border-slate-100 shadow-sm backdrop-blur-sm">
            <div class="w-10 h-10 rounded-lg bg-[#e9efcf] text-[#556B2F] flex items-center justify-center font-bold mb-4">01</div>
            <h4 class="text-lg font-bold text-slate-900 mb-2">Rapid insurance service optimization</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Fully typed environment models to support vulnerable communities facing natural calamities.</p>
          </div>
          <div class="bg-white/90 p-6 rounded-xl border border-slate-100 shadow-sm backdrop-blur-sm">
            <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">02</div>
            <h4 class="text-lg font-bold text-slate-900 mb-2">Natural green energy utilization</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Sustainable utilization practices that minimize environmental impact while maximizing performance.</p>
          </div>
          <div class="bg-white/90 p-6 rounded-xl border border-slate-100 shadow-sm backdrop-blur-sm">
            <div class="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold mb-4">03</div>
            <h4 class="text-lg font-bold text-slate-900 mb-2">Natural tourism cyber security</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Scaffolded on a mobile-first philosophy to defend natural tourism systems against dependency vulnerabilities.</p>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  </div>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar { display: none; }

.pagebackg-shell::before {
  content: '';
  position: absolute;
  inset: -6%;
  background-image: url('/_nuxt/assets/images/pagebackg.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.04);
  opacity: 0.92;
  z-index: -2;
  animation: driftBackground 18s ease-in-out infinite alternate;
  animation-timeline: scroll(root block);
}

.pagebackg-shell::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(2, 6, 23, 0.78), rgba(15, 23, 42, 0.58));
  backdrop-filter: blur(1px);
  z-index: -1;
}

@keyframes driftBackground {
  0% {
    transform: scale(1.04) translate3d(-1%, -1%, 0);
  }
  100% {
    transform: scale(1.1) translate3d(2%, 2%, 0);
  }
}
</style>
