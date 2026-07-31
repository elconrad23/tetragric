import { ref } from 'vue'

export function useAppLayout() {
  const isMobileMenuOpen = ref<boolean>(false)

  const toggleMobileMenu = (): void => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = (): void => {
    isMobileMenuOpen.value = false
  }

  interface NavLink {
    name: string
    href: string
  }

  const navLinks: NavLink[] = [
    { name: 'Our Services', href: '#' },
    { name: 'Site Assessment', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Us', href: '#' },
    { name: 'Contact', href: '#contact-section' },
  ]

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    navLinks
  }
}
