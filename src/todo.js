import {displayAllProjects} from './projects.js'

const createDetailsEl = ({title, description}) => {
    const el = document.createElement('div')
    el.classList.add('todo__details')

    const titleEl = document.createElement('p')
    titleEl.classList.add('todo__title')
    titleEl.innerText = title
    el.append(titleEl)

    const descriptionEl = document.createElement('p')
    descriptionEl.classList.add('todo__description')
    descriptionEl.innerText = description
    el.append(descriptionEl)

    return el
}

const createActionsEl = (projects, projectId, todos, todoId) => {
    const el = document.createElement('div')
    el.classList.add('todo__actions')

    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    el.append(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click', () => {
        todos.splice(todoId, 1)

        projects[projectId] = {
            ...projects[projectId],
            todos,
        }

        displayAllProjects(projects)
    })
    el.append(deleteBtn)

    return el
}

const createTodoEl = (projects, projectId, todos, details, todoId) => {
    const el = document.createElement('div')
    el.classList.add('todo')

    el.append(createDetailsEl(details))
    el.append(createActionsEl(projects, projectId, todos, todoId))

    return el
}

export const createAllTodos = (projects, projectId, {todos}) => {
    const el = document.createElement('div')
    el.classList.add('project__todos')

    const todosEl = document.createElement('div')
    todosEl.classList.add('todos__list')

    const newTaskBtn = document.createElement('button')
    newTaskBtn.classList.add('btn__new-task')
    newTaskBtn.innerText = 'Create New Task'
    newTaskBtn.addEventListener('click', () => {
        todos.push({
            title: 'New Task',
            description: 'About new task...',
        })

        todosEl.innerText = ''

        todos.forEach((details, todoId) => {
            todosEl.append(createTodoEl(projects, projectId, todos, details, todoId))
        })
    })
    el.append(newTaskBtn)

    todosEl.innerText = ''

    todos.forEach((details, todoId) => {
        todosEl.append(createTodoEl(projects, projectId, todos, details, todoId))
    })

    el.append(todosEl)

    return el
}
