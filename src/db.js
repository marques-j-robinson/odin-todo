export const getProjects = () => {
    if (!localStorage.projects) localStorage.setItem('projects', JSON.stringify([]))
    return JSON.parse(localStorage.projects)
}

export const createProject = () => {
    const newProject = {
        name: 'New Project',
        description: 'About new project...',
        todos: [],
    }

    const projects = getProjects()
    projects.push(newProject)

    localStorage.setItem('projects', JSON.stringify(projects))
}

export const editProject = (id, {name, description, todos}) => {
    const projects = getProjects()

    projects[id] = {
        ...projects[id],
        name: name || projects[id].name,
        description: description || projects[id].description,
        todos: todos || projects[id].todos
    }

    localStorage.setItem('projects', JSON.stringify(projects))
}

export const deleteProject = id => {
    const projects = getProjects()
    projects.splice(id, 1)
    localStorage.setItem('projects', JSON.stringify(projects))
}
