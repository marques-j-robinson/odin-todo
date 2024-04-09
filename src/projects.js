import {createAllTodos} from './todo.js'
import projects from './db.json'

const createDetailsEl = ({name, description}) => {
    const el = document.createElement('div')
    el.classList.add('project__details')

    const nameEl = document.createElement('p')
    nameEl.classList.add('project__name')
    nameEl.innerText = name
    el.append(nameEl)

    const nameInputEl = document.createElement('input')
    nameInputEl.classList.add('project__name-input')
    nameInputEl.classList.add('hide')
    nameInputEl.placeholder = name
    el.append(nameInputEl)

    const descriptionEl = document.createElement('p')
    descriptionEl.classList.add('project__description')
    descriptionEl.innerText = description
    el.append(descriptionEl)

    const descriptionInputEl = document.createElement('textarea')
    descriptionInputEl.classList.add('project__description-input')
    descriptionInputEl.classList.add('hide')
    descriptionInputEl.placeholder = description
    el.append(descriptionInputEl)

    return el
}

const createActionsEl = (id, detailsEl) => {
    const el = document.createElement('div')
    el.classList.add('project__actions')

    const nameEl = detailsEl.querySelector('.project__name')
    const nameInputEl = detailsEl.querySelector('.project__name-input')
    const descriptionEl = detailsEl.querySelector('.project__description')
    const descriptionInputEl = detailsEl.querySelector('.project__description-input')

    const saveBtn = document.createElement('button')
    saveBtn.innerText = 'Save'
    saveBtn.classList.add('hide')
    el.append(saveBtn)

    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    el.append(editBtn)

    saveBtn.addEventListener('click', () => {
        projects[id] = {
            ...projects[id],
            name: nameInputEl.value || nameInputEl.placeholder,
            description: descriptionInputEl.value || descriptionInputEl.placeholder,
        }

        displayAllProjects(projects)
    })

    editBtn.addEventListener('click', () => {
        editBtn.classList.add('hide')
        nameEl.classList.add('hide')
        descriptionEl.classList.add('hide')

        saveBtn.classList.remove('hide')
        nameInputEl.classList.remove('hide')
        descriptionInputEl.classList.remove('hide')
    })

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click', () => {
        projects.splice(id, 1)
        displayAllProjects(projects)
    })
    el.append(deleteBtn)

    return el
}

const createHeaderEl = (detailsEl, actionsEl) => {
    const el = document.createElement('div')
    el.classList.add('project__header')
    el.append(detailsEl)
    el.append(actionsEl)

    return el
}


const createProjectEl = (projectDetails, projectId) => {
    const el = document.createElement('div')
    el.classList.add('project')

    const detailsEl = createDetailsEl(projectDetails)
    const actionsEl = createActionsEl(projectId, detailsEl)
    const headerEl = createHeaderEl(detailsEl, actionsEl)
    el.append(headerEl)

    const todosEl = createAllTodos(projects, projectId, projectDetails)
    el.append(todosEl)

    return el
}

export const displayAllProjects = projects => {
    const root = document.querySelector('#projects')
    root.innerText = ''

    projects.forEach((p, id) => {
        root.append(createProjectEl(p, id))
    })
}
