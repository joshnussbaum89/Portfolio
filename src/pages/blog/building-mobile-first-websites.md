---
id: '3'
title: 'Building Mobile-First Websites'
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
date: '09-04-2021'
url: '/blog/building-mobile-first-websites'
image:
  url: '/tom-ford.png'
  alt: 'The Astro logo with the word One.'
layout: '../../layouts/BlogLayout.astro'
---

# Building Mobile-First Websites

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.
2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.
3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

- I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
- I will also add a navigation bar to my website.

```js
const navigationDots = document.querySelectorAll('#scrolling-navigation .dot')
let activeDotIndex = 0
let previousDotIndex = 0

function handleActiveNavigationDotStyling(element = this) {
  // Prevent removing/adding class unnecessarily
  if (activeDotIndex !== previousDotIndex) {
    navigationDots.forEach((dot) => dot.classList.remove('active'))
    element.classList.add('active')
    previousDotIndex = activeDotIndex
  }
}

function handleActiveNavigationDotsOnScroll() {
  const services = document.getElementById('services')
  const work = document.getElementById('work')
  const contact = document.getElementById('contact')

  // Get the top position of each section
  const servicesTop = services.getBoundingClientRect().top
  const workTop = work.getBoundingClientRect().top
  const contactTop = contact.getBoundingClientRect().top

  if (servicesTop > 0) activeDotIndex = 0 // Home
  if (servicesTop < 100 && workTop > 0) activeDotIndex = 1 // Services
  if (workTop < 100 && contactTop > 0) activeDotIndex = 2 // Work
  if (contactTop < 100) activeDotIndex = 3 // Contact

  handleActiveNavigationDotStyling(
    document.querySelector(`.dot[data-index="${activeDotIndex}"]`)
  )
}

document.addEventListener('scroll', handleActiveNavigationDotsOnScroll)
navigationDots.forEach((dot) =>
  dot.addEventListener('click', handleActiveNavigationDotStyling)
)
```
