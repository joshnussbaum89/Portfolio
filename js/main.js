'use strict'

// DOM helpers
const $  = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Global DOM selectors
const navigationDots = $$('#scrolling-navigation .dot')

// Track dots
let activeDotIndex = 0
let previousDotIndex = 0

/**
 * Handle styling for 'active' navigation dot
 */
function handleNavigationStyling(element = this) {
  // Prevent calling onScroll event unnecessarily 
  if (activeDotIndex !== previousDotIndex) {
    navigationDots.forEach((dot) => dot.classList.remove('active'))
    element.classList.add('active')
    previousDotIndex = activeDotIndex
  }
}

/**
 * Toggle active states for navigation dots
 */
function handleActiveDots() {
  // DOM selectors
  const services = $('#services')
  const work     = $('#work')
  const contact  = $('#contact')

  // Section locations
  const servicesTop = services.getBoundingClientRect().top
  const workTop     = work.getBoundingClientRect().top
  const contactTop  = contact.getBoundingClientRect().top
  
  // Set active dot index
  if (servicesTop > 0) activeDotIndex = 0
  if (servicesTop < 100 && workTop > 0) activeDotIndex = 1
  if (workTop < 100 && contactTop > 0) activeDotIndex = 2
  if (contactTop < 100) activeDotIndex = 3

  // Handle styling
  handleNavigationStyling($(`.dot[data-index="${activeDotIndex}"]`))
}

// Attach click handler to navigation dots
navigationDots.forEach((dot) => dot.addEventListener('click', handleNavigationStyling))

// On scroll > handle active dots
document.addEventListener('scroll', handleActiveDots)