'use strict'

// Global DOM selectors
const hamburger      = document.getElementById('hamburger')
const navigationDots = document.querySelectorAll('#scrolling-navigation .dot')

// Track dots
let activeDotIndex   = 0
let previousDotIndex = 0

/**
 * Toggle hamburger menu 'active' state onClick
 */
function handleHamburgerToggleOnClick() {
  this.classList.toggle('active')
}

/**
 * Reset hamburger menu 'active' state on desktop
 */
function handleHamburgerMenuOnResize() {
  if (window.innerWidth >= 768) {
    hamburger.classList.remove('active')
  }
}

/**
 * Handle styling for 'active' navigation dot
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
  const services = document.getElementById('services')
  const work     = document.getElementById('work')
  const contact  = document.getElementById('contact')

  // Section locations
  const servicesTop = services.getBoundingClientRect().top
  const workTop     = work.getBoundingClientRect().top
  const contactTop  = contact.getBoundingClientRect().top
  
  // Set active dot index
  if (servicesTop > 0)                  activeDotIndex = 0 // Home
  if (servicesTop < 100 && workTop > 0) activeDotIndex = 1 // Services
  if (workTop < 100 && contactTop > 0)  activeDotIndex = 2 // Work
  if (contactTop < 100)                 activeDotIndex = 3 // Contact

  // Handle styling
  handleActiveNavigationDotStyling(document.querySelector(`.dot[data-index="${activeDotIndex}"]`))
}

// On Click > toggle 'active' hamburger menu
hamburger.addEventListener('click', handleHamburgerToggleOnClick)

// On Resize > reset 'active' hamburger menu
window.addEventListener('resize', handleHamburgerMenuOnResize)

// 1. Attach click handler to navigation dots  
// 2. On Click > handle 'active' dots 
navigationDots.forEach((dot) => dot.addEventListener('click', handleActiveNavigationDotStyling))

// On Scroll > handle 'active' dots 
document.addEventListener('scroll', handleActiveNavigationDotsOnScroll)
