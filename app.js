//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleCheck);
filterOption.addEventListener("click", filterTodo);
//Function
function addTodo(event) {
  event.preventDefault();
  console.log("hit");
  //DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  // saveLocalTodos(todoInput.value);

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //add todo to local

  //Check button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("deleteBtn-btn");
  todoDiv.appendChild(deleteBtn);

  //appending to list
  todoList.appendChild(todoDiv);

  //clear input value
  todoInput.value = "";
}

function deleCheck(e) {
  //DELETE
  const item = e.target;
  if (item.classList[0] === "deleteBtn-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }

  //COMPLETE
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        console.log(e.target.value);
        todo.style.display = "flex";
        break;
      case "completed":
        console.log("completed");
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });

  function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todo") === null) {
      todos = [];
    } else {
      todo = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  //   console.log(todos);
}
