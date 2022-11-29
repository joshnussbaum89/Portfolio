(() => {
  'use strict'

  // Global DOM selectors
  const hamburger      = document.getElementById('hamburger')
  const navigationDots = document.querySelectorAll('#scrolling-navigation .dot')
  const mobileNavItems = document.querySelectorAll('#mobile-nav a')

  // State
  let activeDotIndex   = 0
  let previousDotIndex = 0
  let overlayDisplayed = false

  /**
   * Toggle mobile navigation menu 'active' state onClick
   */
  function handleMobileNavigationOnClick() {
    const body = document.querySelector('body')

    // Update state
    overlayDisplayed = !overlayDisplayed
    body.setAttribute('data-overlay-displayed', overlayDisplayed)

    // Update styling
    hamburger.classList.toggle('active')
  }

  /**
   * Reset mobile navigation menu 'active' state on desktop
   */
  function handleMobileNavigationOnResize() {
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

  // On Click > toggle 'active' mobile navigation
  hamburger.addEventListener('click', handleMobileNavigationOnClick)

  // On Resize > reset 'active' mobile navigation
  window.addEventListener('resize', handleMobileNavigationOnResize)

  // 1. Attach click handler to mobile navigation items
  // 2. On Click > toggle 'active' mobile navigation
  mobileNavItems.forEach((item) => item.addEventListener('click', handleMobileNavigationOnClick))

  // 1. Attach click handler to navigation dots  
  // 2. On Click > handle 'active' dots 
  navigationDots.forEach((dot) => dot.addEventListener('click', handleActiveNavigationDotStyling))

  // On Scroll > handle 'active' dots 
  document.addEventListener('scroll', handleActiveNavigationDotsOnScroll)
})()