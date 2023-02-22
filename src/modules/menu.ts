import { body, hamburger } from './selectors.js'

// State
let overlayDisplayed = false

/**
 * Toggle mobile navigation menu 'active' state onClick
 */
function handleMobileNavigationOnClick() {
  // Update state
  overlayDisplayed = !overlayDisplayed
  body!.setAttribute('data-overlay-displayed', `${overlayDisplayed}`)

  // Update styling
  hamburger!.classList.toggle('active')
}

/**
 * Reset mobile navigation menu 'active' state on desktop
 */
function handleMobileNavigationOnResize() {
  if (window.innerWidth >= 768) {
    // Update state
    overlayDisplayed = false
    body!.setAttribute('data-overlay-displayed', `${overlayDisplayed}`)

    // Update styling
    hamburger!.classList.remove('active')
  }
}

export { handleMobileNavigationOnClick, handleMobileNavigationOnResize }
