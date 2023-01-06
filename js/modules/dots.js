import { navigationDots } from './selectors.js'

// State
let activeDotIndex   = 0
let previousDotIndex = 0

/**
 * Handle styling for 'active' navigation dot
 * @param {object | HTMLElement} element
 */
function handleActiveNavigationDotStyling(element = this) {
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
  const work     = document.getElementById('work')
  const contact  = document.getElementById('contact')

  // Section locations
  const workTop     = work.getBoundingClientRect().top
  const contactTop  = contact.getBoundingClientRect().top

  // Set active dot index
  if (workTop > 0)                      activeDotIndex = 0 // Home
  if (workTop < 100 && contactTop > 0)  activeDotIndex = 1 // Work
  if (contactTop < 100)                 activeDotIndex = 2 // Contact

  // Handle styling
  handleActiveNavigationDotStyling(document.querySelector(`.dot[data-index="${activeDotIndex}"]`))
}

export { handleActiveNavigationDotStyling, handleActiveNavigationDotsOnScroll }
