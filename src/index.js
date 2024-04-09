import './style.css'
import {displayProjects} from './dom-util.js'
import projects from './db.json'

displayProjects(projects)

document.querySelector('#createNewProject').addEventListener('click', () => {
    projects.push({
        'name': 'New Project',
        'description': 'About new project...',
        'todos': [],
    })
    displayProjects(projects)
})
