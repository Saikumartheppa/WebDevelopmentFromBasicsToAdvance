const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const saveBtn = document.getElementById("saveBtn");
const discardBtn = document.getElementById("discardBtn");
const modal = document.getElementById("modal");
const todoInput = document.getElementById("todoInput");
const todosList = document.getElementById("todosList");
let todosLength = localStorage.length; 

const openModal = () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  todoInput.value = "";
  todoInput.focus();
};
const closeModal = () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "hidden";
};
function addTodo(task) {
  localStorage.setItem(todosLength, JSON.stringify(task));
  const todo = document.createElement("div");
  todo.className = "todo";
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = 'checkbox';
  checkBox.className = "checkbox";
  todo.appendChild(checkBox);
  todo.innerHTML +=  task;
  todosList.appendChild(todo)
}
if (addBtn && saveBtn && discardBtn && modal && todoInput && todosList) {
  addBtn.addEventListener("click", openModal);
  discardBtn.addEventListener("click", closeModal);
  saveBtn.addEventListener("click", () => { 
    const task = todoInput.value.trim();
    if (task) {
      addTodo(task);
      closeModal();
    } else {
      console.log("Please Enter a valid Todo");
      closeModal();
    }
  });
  deleteBtn?.addEventListener('click' , ()=>{
     const todos = document.querySelectorAll('.todos');
     todos.forEach((todo , index) =>{
        const checkBox = todo.querySelector("input[type='checkbox']");;
        if(checkBox && checkBox.checked){
          todo.remove();
          localStorage.removeItem(index);
        }
     });
  })
}
