import { navigationDots } from './selectors.js'

// State
let activeDotIndex = 0
let previousDotIndex = 0

/**
 * Handle styling for 'active' navigation dot
 */
function handleActiveNavigationDotStyling(element: HTMLElement) {
  // Prevent removing/adding class unnecessarily
  if (activeDotIndex !== previousDotIndex) {
    navigationDots.forEach((dot) => dot.classList.remove('active'))
    element.classList.add('active')
    previousDotIndex = activeDotIndex
  }
}

/**
 * Toggle active states for navigation dots
 */
function handleActiveNavigationDotsOnScroll() {
  // DOM selectors
  const services = document.getElementById('services')
  const work = document.getElementById('work')
  const contact = document.getElementById('contact')

  // Section locations
  const servicesTop = services!.getBoundingClientRect().top
  const workTop = work!.getBoundingClientRect().top
  const contactTop = contact!.getBoundingClientRect().top

  // Set active dot index
  if (servicesTop > 0) activeDotIndex = 0 // Home
  if (servicesTop < 100 && workTop > 0) activeDotIndex = 1 // Services
  if (workTop < 100 && contactTop > 0) activeDotIndex = 2 // Work
  if (contactTop < 100) activeDotIndex = 3 // Contact

  // Handle styling
  handleActiveNavigationDotStyling(
    document.querySelector(
      `.dot[data-index="${activeDotIndex}"]`
    ) as HTMLElement
  )
}

export { handleActiveNavigationDotStyling, handleActiveNavigationDotsOnScroll }