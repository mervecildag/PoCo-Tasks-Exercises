/* split the big problem in small and solvable problem 
2. add password protection 
3. delete item
4. mark item as done
5. sort the list alphabetically
*/
// let ul = document.querySelector("ul");
// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let array = [];
// let errormessage = "";

// button.addEventListener("click",addListItem);
// input.addEventListener("keypress",checkIfReturnKey);

// function checkIfReturnKey(event) {
//     if(event.keyCode === 13){ //return key
//         addListItem();
//     }
// }

// function isInputValid(){
//     input.value = input.value.trim();
//     if(input.value !== ""){
//         for(let i = 0; i < array.length; i++){
//             if(array[i] === input.value){
//                 // it is a duplicate
//                 errormessage = "This to-do is already in your list.";
//                 return false;
//             }
//         }
//         return true;
//     }
//     errormessage = "Please enter something to do."
//     return false;
// }

// function addListItem(){
//     if(isInputValid()){
//         array.push(input.value);
//         let li = document.createElement("li");
//         li.innerText = input.value;
//         ul.appendChild(li);
//         clearInput();
//     } else {
//         clearInput();
//         alert(errormessage);
//     }
// }

// function clearInput(){
//     input.value = "";
//     input.placeholder ="enter new item";
//     input.focus();
// }


const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todoList');

// Tüm görevleri içeren bir dizi
let todos = [];

// Yeni görev ekleme işlemi
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };
    todos.push(todo);
    renderTodos();
    todoInput.value = '';
  }
}

// Görev tamamlama işlemi
function completeTodoById(id) {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex > -1) {
    todos[todoIndex].completed = true;
    renderTodos();
  }
}

// Görevi silme işlemi
function deleteTodoById(id) {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    renderTodos();
  }
}

// Görevleri listeleme işlemi
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const todoEl = document.createElement('li');
    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    if (todo.completed) {
      todoText.style.textDecoration = 'line-through';
    }
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTodoById(todo.id);
    });
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
      completeTodoById(todo.id);
    });
    todoEl.appendChild(todoText);
    todoEl.appendChild(deleteBtn);
    todoEl.appendChild(completeBtn);
    todoList.appendChild(todoEl);
  });
}

// Yeni görev ekleme butonuna tıklanınca addTodo() fonksiyonunu çağırmak için event listener ekleme
addBtn.addEventListener('click', addTodo);
