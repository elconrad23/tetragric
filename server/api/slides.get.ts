// server/api/slides.get.ts
export interface HeroSlide {
  id: number
  badge: string
  title: string
  subtitle: string
  accentColor: string
}

export default defineEventHandler((): HeroSlide[] => {
  return [
    {
      id: 1,
      badge: 'MODERN WATER Networks',
      title: 'Transforming Local Water Ecosystem Delivery Solutions',
      subtitle: 'We Consult on and Deploy water flows on modern high-speed clusters, with clean A.I. software models.',
      accentColor: 'border-sky-500 shadow-sky-100'
    },
    {
      id: 2,
      badge: 'BLOCKCHAIN BACKED Insurance',
      title: 'Architecting Sustainable Systems Globally',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100'
    },
    {
      id: 3,
      badge: 'TOURISM & HOSPITALITY Security',
      title: 'Precision Cyber Tools Delivery',
      subtitle: 'Cyber security protection solutions for hard type environmental networks tested routinely in tourism cities.',
      accentColor: 'border-sky-500 shadow-emerald-100'
    },
    {
      id: 4,
      badge: 'ENERGY & UTILITIES Grid Solutions',
      title: 'Real-time Data Streams',
      subtitle: 'Delivering high-speed blockchain, R & Ruby solutions for smart home energy utilities.',
      accentColor: 'border-emerald-500 shadow-sky-100'
    }
  ]
})
