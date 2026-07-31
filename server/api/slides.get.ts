export interface HeroSlide {
  id: number
  badge: string
  title: string
  subtitle: string
  accentColor: string
  icon: string
}

export default defineEventHandler((): HeroSlide[] => {
  return [
    {
      id: 1,
      badge: 'Community-based Environmental Resources Conservation',
      title: 'Transforming Local Natural Ecosystem Solutions',
      subtitle: 'We Consult on and Deploy water flows on modern high-speed clusters, with clean A.I. software models.',
      accentColor: 'border-sky-500 shadow-sky-100',
      icon: '🌍'
    },
    {
      id: 2,
      badge: 'Natural Resources Assessment & Planning',
      title: 'Architecting Sustainable Tech Systems Globally',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100',
      icon: '💧'
    },
    {
      id: 3,
      badge: 'Natural Resources Intelligence & Data Analytics',
      title: 'Precision based analysis tools for environmental data',
      subtitle: 'Cyber security protection solutions for hard type environmental networks tested routinely in tourism cities.',
      accentColor: 'border-sky-500 shadow-emerald-100',
      icon: '📊'
    },
    {
      id: 4,
      badge: 'Cheap affordable Climate Insurance',
      title: 'Real-time climate risk related problem solving streams',
      subtitle: 'Delivering high-speed blockchain, R & Ruby solutions for smart home energy utilities.',
      accentColor: 'border-emerald-500 shadow-sky-100',
      icon: '🌿'
    },
    {
      id: 5,
      badge: 'Biodiversity Management & Sustainable Development',
      title: 'GIS',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100',
      icon: '🌱'
    },
    {
      id: 6,
      badge: 'Water, Sanitation & Hygiene Solutions',
      title: 'WASH',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100',
      icon: '🚰'
    },
    {
      id: 7,
      badge: 'Climate Risk & Disaster Resilience',
      title: 'QGIS',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100',
      icon: '🌦️'
    },
    {
      id: 8,
      badge: 'Environmental and Social Impacts Assessments (ESIA)',
      title: 'Geospatial Data Analysis & Remote Sensor Reporting',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100',
      icon: '📑'
    },
    {
      id: 9,
      badge: 'Institutional Support & Capacity Building Services',
      title: 'Carbon Print Visualization',
      subtitle: 'Plan to reach zero carbon-overhead goal through Insurance plans for farmers in vulnerable regions.',
      accentColor: 'border-emerald-500 shadow-emerald-100',
      icon: '🤝'
    }
  ]
})
