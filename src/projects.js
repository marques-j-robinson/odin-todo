import {createTodoEl} from './todo.js'

const createDetailsEl = ({name, description}) => {
    const el = document.createElement('div')
    el.classList.add('project__details')

    const nameEl = document.createElement('p')
    nameEl.classList.add('project__name')
    nameEl.innerText = name
    el.append(nameEl)

    const descriptionEl = document.createElement('p')
    descriptionEl.classList.add('project__description')
    descriptionEl.innerText = description
    el.append(descriptionEl)

    return el
}

const createActionsEl = () => {
    const el = document.createElement('div')
    el.classList.add('project__actions')

    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    el.append(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
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

const createTodosEl = ({todos}) => {
    const el = document.createElement('div')
    el.classList.add('project__todos')

    const newTaskBtn = document.createElement('button')
    newTaskBtn.classList.add('btn__new-task')
    newTaskBtn.innerText = 'Create New Task'
    el.append(newTaskBtn)


    const todosEl = document.createElement('div')
    todosEl.classList.add('todos__list')

    Object.values(todos).forEach(todo => {
        todosEl.append(createTodoEl(todo))
    })

    el.append(todosEl)

    return el
}


const createProjectEl = projectDetails => {
    const el = document.createElement('div')
    el.classList.add('project')

    const detailsEl = createDetailsEl(projectDetails)
    const actionsEl = createActionsEl()
    const headerEl = createHeaderEl(detailsEl, actionsEl)
    el.append(headerEl)

    const todosEl = createTodosEl(projectDetails)
    el.append(todosEl)

    return el
}

export const displayAllProjects = projects => {
    const root = document.querySelector('#projects')
    root.innerText = ''

    Object.values(projects).reverse().forEach(p => {
        root.append(createProjectEl(p))
    })
}
