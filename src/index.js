import './style.css'
import {displayAllProjects} from './projects.js'
import projects from './db.json'

displayAllProjects(projects.reverse())

document.querySelector('#createNewProject').addEventListener('click', () => {
    projects.unshift({
        'name': 'New Project',
        'description': 'About new project...',
        'todos': [],
    })
    displayAllProjects(projects)
})
