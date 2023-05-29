const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');

// Fetch todos from API
function fetchTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        if (todo.completed) {
          li.classList.add('completed');
        }
        todoList.appendChild(li);
      });
    });
}

// Add a new todo to the list
function addTodo() {
  const todoText = todoInput.value.trim();
  if (!todoText) {
    return;
  }
  const li = document.createElement('li');
  li.textContent = todoText;
  todoList.appendChild(li);
  todoInput.value = '';
}

fetchTodos();
