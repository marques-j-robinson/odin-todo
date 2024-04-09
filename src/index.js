import './style.css'
import {displayAllProjects} from './projects.js'
import projects from './db.json'

displayAllProjects(projects)

document.querySelector('#createNewProject').addEventListener('click', () => {
    projects.push({
        'name': 'New Project',
        'description': 'About new project...',
        'todos': [],
    })
    displayAllProjects(projects)
})
