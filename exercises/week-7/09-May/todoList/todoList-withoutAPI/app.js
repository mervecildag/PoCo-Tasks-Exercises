const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

let todos = [];

function renderTodoList() {
  // Clear the current list
  todoList.innerHTML = '';

  // Render each todo item
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const todoItem = document.createElement('li');

    // Add the todo text
    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    if (todo.completed) {
      todoText.style.textDecoration = 'line-through';
    }
    todoItem.appendChild(todoText);

    // Add the edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newTodoText = prompt('Enter new todo text', todo.text);
      if (newTodoText) {
        todos[i].text = newTodoText;
        renderTodoList();
      }
    });
    todoItem.appendChild(editButton);

    // Add the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      todos.splice(i, 1);
      renderTodoList();
    });
    todoItem.appendChild(deleteButton);

    // Add the completed checkbox
    const completedCheckbox = document.createElement('input');
    completedCheckbox.type = 'checkbox';
    completedCheckbox.checked = todo.completed;
    completedCheckbox.addEventListener('change', () => {
      todos[i].completed = completedCheckbox.checked;
      renderTodoList();
    });
    todoItem.appendChild(completedCheckbox);

    // Add the todo item to the list
    todoList.appendChild(todoItem);
  }
}

addTodoButton.addEventListener('click', () => {
  const todoText = todoInput.value;
  if (todoText) {
    todos.push({ text: todoText, completed: false });
    todoInput.value = '';
    renderTodoList();
  }
});

renderTodoList();
