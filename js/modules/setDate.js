/**
 * Set footer Date and text
 */
function setFooterDateAndText() {
  document.querySelector('#footer p').innerHTML = `joshnussbaum.io © ${new Date().getFullYear()}`
}

export { setFooterDateAndText }
