// pages/index-logic.ts
import { ref, onMounted, onUnmounted } from 'vue'

export interface HeroSlide {
  id: number
  badge: string
  title: string
  subtitle: string
  accentColor: string
}

export const slides = ref<HeroSlide[]>([
  {
    id: 1,
    badge: 'Sky Blue Innovation',
    title: 'Transforming Local Cloud Enterprise Scalability',
    subtitle: 'Deploy workflows on modern high-speed clusters with clean architectural models.',
    accentColor: 'border-sky-500 shadow-sky-100'
  },
  {
    id: 2,
    badge: 'Natural Green Infrastructure',
    title: 'Architecting Sustainable Systems Globally',
    subtitle: 'Zero carbon-overhead deployment pipelines optimized directly for low energy footprints.',
    accentColor: 'border-emerald-500 shadow-emerald-100'
  },
  {
    id: 3,
    badge: 'Unified Performance',
    title: 'Precision Controls. Clean Visual Delivery.',
    subtitle: 'Fully typed environments tailored out of the box to render smoothly across all device breakpoints.',
    accentColor: 'border-sky-500 shadow-emerald-100'
  }
])

export const carouselRef = ref<HTMLElement | null>(null)
export const activeIndex = ref<number>(0)
let timer: ReturnType<typeof setInterval> | null = null

// 1. Direct slide jumping via click indicators
export const scrollToSlide = (index: number): void => {
  if (!carouselRef.value || !slides.value) return
  activeIndex.value = index
  
  const slideElements = carouselRef.value.querySelectorAll('.snap-start')
  const targetElement = slideElements[index] as HTMLElement
  
  if (targetElement) {
    carouselRef.value.scrollTo({
      left: targetElement.offsetLeft - carouselRef.value.offsetLeft,
      behavior: 'smooth'
    })
  }
}

// 2. Continuous manual touch track syncing
export const handleScrollTrack = (event: Event): void => {
  const target = event.target as HTMLElement
  if (!target) return
  const scrollPosition = target.scrollLeft
  const slideWidth = target.querySelector('.snap-start')?.getBoundingClientRect().width || 1
  activeIndex.value = Math.round(scrollPosition / (slideWidth + 24))
}

// 3. Automated Desktop Transition Loop Engine
export const startAutoPlay = () => {
  // FIXED: Using standard Vite/Nuxt meta parameters instead of Node process properties
  if (import.meta.env.SSR) return
  
  timer = setInterval(() => {
    if (window.innerWidth >= 1024 && slides.value && carouselRef.value) {
      activeIndex.value = (activeIndex.value + 1) % slides.value.length
      
      const slideWidth = carouselRef.value.querySelector('.snap-start')?.getBoundingClientRect().width || 0
      carouselRef.value.scrollTo({
        left: activeIndex.value * (slideWidth + 24),
        behavior: 'smooth'
      })
    }
  }, 4000)
}

// Lifecycle registration boundaries 
onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
