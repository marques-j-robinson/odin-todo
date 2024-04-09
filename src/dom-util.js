const createTodo = ({title, description}) => {
    const el = document.createElement('div')
    el.classList.add('todo')

    const titleEl = document.createElement('p')
    titleEl.classList.add('todo__title')
    titleEl.innerText = title

    const descriptionEl = document.createElement('p')
    descriptionEl.classList.add('todo__description')
    descriptionEl.innerText = description

    const details = document.createElement('div')
    details.classList.add('todo__details')
    details.append(titleEl)
    details.append(descriptionEl)

    const actions = document.createElement('div')
    actions.classList.add('todo__actions')
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    actions.append(editBtn)
    actions.append(deleteBtn)

    el.append(details)
    el.append(actions)

    return el
}

const createProject = ({name, description, todos}) => {
    const el = document.createElement('div')
    el.classList.add('project')

    const nameEl = document.createElement('p')
    nameEl.classList.add('project__name')
    nameEl.innerText = name

    const descriptionEl = document.createElement('p')
    descriptionEl.classList.add('project__description')
    descriptionEl.innerText = description

    const details = document.createElement('div')
    details.classList.add('project__details')
    details.append(nameEl)
    details.append(descriptionEl)

    const actions = document.createElement('div')
    actions.classList.add('project__actions')
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    actions.append(editBtn)
    actions.append(deleteBtn)

    const header = document.createElement('div')
    header.classList.add('project__header')
    header.append(details)
    header.append(actions)

    const todosEl = document.createElement('div')
    todosEl.classList.add('project__todos')

    const newTaskBtn = document.createElement('button')
    newTaskBtn.classList.add('btn__new-task')
    newTaskBtn.innerText = 'Create New Task'

    todosEl.append(newTaskBtn)

    const todosListEl = document.createElement('div')
    todosListEl.classList.add('todos__list')

    Object.values(todos).forEach(todo => {
        todosListEl.append(createTodo(todo))
    })

    todosEl.append(todosListEl)

    el.append(header)
    el.append(todosEl)

    return el
}

export const displayProjects = projects => {
    const root = document.querySelector('#projects')

    Object.values(projects).forEach(p => {
        root.append(createProject(p))
    })
}
