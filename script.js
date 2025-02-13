//== To Do CRUD Managment ==//

// Array to store todos
let todos = [];

//DOM Elements
const todoFrom = document.getElementById('todo-from');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('toso-list');

//Function to Render todos
function renderTodos() {
    todoList.innerHTML = ''; //Clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li. innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

//Function to add a new todo
function addTodo(event){
    event.preventDefault(); //Prevent from submession 
    const newTodo =todoInput.ariaValueMax.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ''; // clear the input
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index){
    if (confirm ('Are you sure you want to delete this todo?')){
        todos.splice(index, 1);
        renderTodos();
    }
}

// Event Listeners 
todoFrom.addEventListener('submit', addTodo);

//Initial render
renderTodos();