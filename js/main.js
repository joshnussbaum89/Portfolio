// DOM helpers
const $  = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Global DOM selectors
const navigationDots = $$('#scrolling-navigation .dot')

/**
 * Handle 'active' styling for selected navigation dot
 */
function handleNavigationStyling() {
  navigationDots.forEach((dot) => dot.classList.remove('active'))
  this.classList.add('active')
}

// Attach click handler to navigation dots
navigationDots.forEach((dot) => dot.addEventListener('click', handleNavigationStyling))
