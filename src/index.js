import './style.css'
import {displayProjects} from './dom-util.js'
import {projects} from './project.js'

displayProjects(projects)

document.querySelector('#createNewProject').addEventListener('click', () => {
    const projectId = Object.values(projects).length
    const project = {
        'name': 'New Project',
        'description': 'About new project...',
        'todos': {},
    }
    projects[projectId] = project
    displayProjects(projects)
})
