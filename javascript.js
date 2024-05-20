// const submitBtn = document.getElementById("btn");

// //get title array
// const todoArray = [];


// //delete the task
// function deleteTodoItem(todoTitle) {
//     // choose the element
//     const toDoItem = document.getElementById(todoTitle);
//     // const toDoItem

//     //apply remove()
//     toDoItem.remove();
// }

// // append function
// function appendTodoItem(title, date, status){
// // display todo item
// const todoList = document.getElementById("todoList");

// //create an element
// const todoWrapper = document.createElement("div");

// //add the id for the todo item
// todoWrapper.id = title.value;

// //create todo item
//  const todoItem = 
//  `<div> 
//     <p>Name:${title.value} Date:${date.value} Status: ${status.value} </p>
//     <button class = "deleteBtn" onclick = "deleteTodoItem('${title.value}')" >Delete</button>
//  </div>`;
 
//  //append
//  todoWrapper.innerHTML = todoItem;
//  todoList.appendChild(todoWrapper);
// // todoList.innerHTML = todoItem;
// console.log(todoItem);



// //push title into title array
// todoArray.push(title.value);
// console.log(todoArray, "todoarray");
// }

// //reset form
// function resetForm(title, date, status){
//     title.value = "";
//     date.value = "";
//     status.value = "";
// }

// //validation - alert()
// function validateForm(title){
//     if (!title.value) {
//         alert("Please insert title")
//         return false;
//     }
//     if (!date.value) {
//         alert("Please insert date");
//         return false;
//     }
//     console.log(todoArray, "todo");
// // check if title is unique 
// //have user input: title.value
// //todoArray?
// if (todoArray.some((item) => item === title.value))  {
//     alert("Title should be unique")
//     return false;
// }


// //else
//     return true;
// }

// submitBtn.addEventListener("click", (event) => {
    
//     // get user input
//     let title = document.getElementById("title");
//     let date = document.getElementById("date");
//     let status = document.getElementById("status");
    
//     //prevent form reset
//     event.preventDefault();

//     //console log form input
//     //console.log("Name: ", title);
//     //console.log("Date: ", date);
//     // console.log("status: ", status);

// //Validation
// const isValid = validateForm(title);
// if (!isValid) return;

// //append list
// appendTodoItem(title, date, status);
// //reset form
// resetForm(title, date, status);

// });



const submitBtn = document.getElementById("btn");
const todoArray = [];

function deleteTodoItem(todoTitle) {
  const toDoItem = document.getElementById(todoTitle);
  toDoItem.remove();
  const index = todoArray.indexOf(todoTitle);
  if (index > -1) {
    todoArray.splice(index, 1);
  }
}

function appendTodoItem(title, date, status) {
  const todoList = document.getElementById("todoList");
  const todoWrapper = document.createElement("div");
  todoWrapper.id = title.value;
  todoWrapper.classList.add("task-item", status.value);
  const todoItem = `
    <div> 
      <p><strong>Name:</strong> ${title.value} <strong>Date:</strong> ${date.value} <strong>Status:</strong> ${status.value}</p>
      <button class="deleteBtn" onclick="deleteTodoItem('${title.value}')">Delete</button>
    </div>`;
  todoWrapper.innerHTML = todoItem;
  todoList.appendChild(todoWrapper);
  todoArray.push(title.value);
}

function resetForm(title, date, status) {
  title.value = "";
  date.value = "";
  status.value = "not-started";
}

function validateForm(title, date) {
  if (!title.value) {
    alert("Please insert title");
    return false;
  }
  if (!date.value) {
    alert("Please insert date");
    return false;
  }
  if (todoArray.some(item => item === title.value)) {
    alert("Title should be unique");
    return false;
  }
  return true;
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.getElementById("title");
  let date = document.getElementById("date");
  let status = document.getElementById("status");

  if (validateForm(title, date)) {
    appendTodoItem(title, date, status);
    resetForm(title, date, status);
  }
});
