const todoList = document.getElementById('todo-list');
const form = document.querySelector('form');
const input = document.getElementById('new-todo');

// Function to render a todo item in the list
function renderTodoItem(todo) {
  const item = document.createElement('li');
  item.innerHTML = `
    <span>${todo.title}</span>
    <button class="delete-btn">Delete</button>
    <br/>
    <br/> 
  `;
  if (todo.completed) {
    item.classList.add('completed');
  }
  todoList.appendChild(item);
}

// Function to render all todos in the list
function renderTodoList(todos) {
  todoList.innerHTML = '';
  todos.forEach(renderTodoItem);
}

// Fetch todos from external API
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    const todos = data.slice(0, 10); // Only get first 10 todos
    renderTodoList(todos);
  });

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();
  const title = input.value.trim();
  if (title !== '') {
    const newTodo = {
      title,
      completed: false
    };
    renderTodoItem(newTodo);
    input.value = '';
  }
});

// Handle delete button clicks
todoList.addEventListener('click', event => {
  if (event.target.classList.contains('delete-btn')) {
    const item = event.target.parentNode;
    item.parentNode.removeChild(item);
  }
});

 // Add the completed checkbox
 const completedCheckbox = document.createElement('input');
 completedCheckbox.type = 'checkbox';
 completedCheckbox.checked = todo.completed;
 completedCheckbox.addEventListener('change', () => {
   todos[i].completed = completedCheckbox.checked;
   renderTodoList();
 });
 item.appendChild(completedCheckbox);