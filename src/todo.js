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

const createActionsEl = () => {
    const el = document.createElement('div')
    el.classList.add('todo__actions')

    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    el.append(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    el.append(deleteBtn)

    return el
}

export const createTodoEl = todoDetails => {
    const el = document.createElement('div')
    el.classList.add('todo')

    el.append(createDetailsEl(todoDetails))
    el.append(createActionsEl())

    return el
}
