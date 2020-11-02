var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var btnElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodo() {
    listElement.innerHTML = ''

    for(todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')')

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)

        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}
renderTodo()

function addTodo() {
    var todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ''
    renderTodo()
    saveToStorage()
}

btnElement.onclick = addTodo

function removeTodo(pos) {
    todos.splice(pos, 1)
    renderTodo()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}