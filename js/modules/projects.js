import { projectTags, webAndMusicProjects } from './selectors.js'

/**
 * Toggle visible projects (music vs. web)
 */
 function toggleVisibleProjects() {
    const clickedTagId   = this.getAttribute('data-cta-id')
    const projectsToShow = [...webAndMusicProjects].find((project) => project.getAttribute('data-project-id') === clickedTagId)

    // Reset all project and tag UI state
    webAndMusicProjects.forEach((project) => project.classList.remove('active'))
    projectTags.forEach((tag) => tag.classList.remove('active'))
    
    // Toggle 'active' state for tag clicked
    this.classList.add('active')

    // Toggle 'active' state for projects to show
    projectsToShow.classList.add('active')
  }

export { toggleVisibleProjects }
