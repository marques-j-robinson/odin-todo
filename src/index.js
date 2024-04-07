class Todo {
    constructor(title, description) {
        this.title = title
        this.description = description
    }
}

const todos = {}
let todoId = 0

function createTodo(title, description) {
    todos[todoId] = new Todo(title, description)
    ++todoId
}

createTodo('test', 'testing')

console.log(todos)
