import {displayAllProjects} from './projects.js'

const createDetailsEl = ({title, description, dueDate}) => {
    const el = document.createElement('div')
    el.classList.add('todo__details')

    const titleEl = document.createElement('p')
    titleEl.classList.add('todo__title')
    titleEl.innerText = title
    el.append(titleEl)

    const titleInputEl = document.createElement('input')
    titleInputEl.classList.add('todo__title-input')
    titleInputEl.classList.add('hide')
    titleInputEl.placeholder = title
    el.append(titleInputEl)

    const descriptionEl = document.createElement('p')
    descriptionEl.classList.add('todo__description')
    descriptionEl.innerText = description
    el.append(descriptionEl)

    const descriptionInputEl = document.createElement('input')
    descriptionInputEl.classList.add('todo__description-input')
    descriptionInputEl.classList.add('hide')
    descriptionInputEl.placeholder = description
    el.append(descriptionInputEl)

    const dueDateEl = document.createElement('p')
    dueDateEl.classList.add('todo__duedate')
    dueDateEl.innerText = dueDate
    el.append(dueDateEl)

    const dueDateInputEl = document.createElement('input')
    dueDateInputEl.classList.add('todo__duedate-input')
    dueDateInputEl.classList.add('hide')
    dueDateInputEl.type = 'date'
    dueDateInputEl.value = dueDate
    el.append(dueDateInputEl)

    return el
}

const createActionsEl = (projects, projectId, todos, todoId, detailsEl) => {
    const el = document.createElement('div')
    el.classList.add('todo__actions')

    const titleEl = detailsEl.querySelector('.todo__title')
    const titleInputEl = detailsEl.querySelector('.todo__title-input')
    const descriptionEl = detailsEl.querySelector('.todo__description')
    const descriptionInputEl = detailsEl.querySelector('.todo__description-input')
    const dueDateEl = detailsEl.querySelector('.todo__duedate')
    const dueDateInputEl = detailsEl.querySelector('.todo__duedate-input')

    const saveBtn = document.createElement('button')
    saveBtn.innerText = 'Save'
    saveBtn.classList.add('hide')
    el.append(saveBtn)

    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    el.append(editBtn)

    saveBtn.addEventListener('click', () => {
        console.log(dueDateInputEl.value)
        todos[todoId] = {
            ...todos[todoId],
            title: titleInputEl.value || titleInputEl.placeholder,
            description: descriptionInputEl.value || descriptionInputEl.placeholder,
            dueDate: dueDateInputEl.value || null,
        }

        projects[projectId] = {
            ...projects[projectId],
            todos,
        }

        displayAllProjects(projects)
    })

    editBtn.addEventListener('click', () => {
        editBtn.classList.add('hide')
        titleEl.classList.add('hide')
        descriptionEl.classList.add('hide')
        dueDateEl.classList.add('hide')

        saveBtn.classList.remove('hide')
        titleInputEl.classList.remove('hide')
        descriptionInputEl.classList.remove('hide')
        dueDateInputEl.classList.remove('hide')
    })

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

    const detailsEl = createDetailsEl(details)
    el.append(detailsEl)
    el.append(createActionsEl(projects, projectId, todos, todoId, detailsEl))

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
