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
      badge: 'Integrated Water Resources Management',
      title: 'Transforming Local Water Ecosystem Delivery Solutions',
      subtitle: 'We Consult on and Deploy water flows on modern high-speed clusters, with clean A.I. software models.',
      accentColor: 'border-sky-500 shadow-sky-100'
    },
    {
      id: 2,
      badge: 'Water Resources Assessment & Planning',
      title: 'Architecting Sustainable Systems Globally',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100'
    },
    {
      id: 3,
      badge: 'Water Intelligence & Data Analytics',
      title: 'Precision based analysis & Cybersecurity Tools Delivery',
      subtitle: 'Cyber security protection solutions for hard type environmental networks tested routinely in tourism cities.',
      accentColor: 'border-sky-500 shadow-emerald-100'
    },
    {
      id: 4,
      badge: 'Nature-Based & Green Solutions',
      title: 'Real-time agriculture related problem solving streams',
      subtitle: 'Delivering high-speed blockchain, R & Ruby solutions for smart home energy utilities.',
      accentColor: 'border-emerald-500 shadow-sky-100'
    },
    {
      id: 5,
      badge: 'Biodiversity Management & Sustainable Development',
      title: 'GIS',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100'
    },
    {
      id: 6,
      badge: 'Water, Sanitation & Hygiene Solutions',
      title: 'WASH',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100'
    },
    {
      id: 7,
      badge: 'Climate Risk & Disaster Resilience',
      title: 'QGIS',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100'
    },
    {
      id: 8,
      badge: 'Environmental and Social Impacts Assessments (ESIA)',
      title: 'Geospatial Data Analysis & Remote Sensor Reporting',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100'
    },
    {
      id: 9,
      badge: 'Institutional Support & Capacity Building Services',
      title: 'Carbon Print Visualization',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100'
    }
  ]
})
