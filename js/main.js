import { hamburger, mobileNavItems } from './modules/selectors.js'
import { setFooterDateAndText } from './modules/setDate.js'
import { handleActiveNavigationDotsOnScroll } from './modules/dots.js'
import { handleMobileNavigationOnClick, handleMobileNavigationOnResize } from './modules/menu.js'

// Initialize app
function init() {
  if (!window.location.href.includes('success')) {
    setFooterDateAndText()

    // On Scroll > handle 'active' dots
    document.addEventListener('scroll', handleActiveNavigationDotsOnScroll)
  }

  // On Click > toggle 'active' mobile navigation
  hamburger.addEventListener('click', handleMobileNavigationOnClick)

  // On Resize > reset 'active' mobile navigation
  window.addEventListener('resize', handleMobileNavigationOnResize)

  // 1. Attach click handler to mobile navigation items
  // 2. On Click > toggle 'active' mobile navigation
  mobileNavItems.forEach((item) => item.addEventListener('click', handleMobileNavigationOnClick))
}
init()
