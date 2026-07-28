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
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Contact', href: '#contact-section' },
  ]

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    navLinks
  }
}
