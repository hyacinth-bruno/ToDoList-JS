const submitBtn = document.getElementById("btn");

//get title array
const todoArray = [];


//delete the task
function deleteTodoItem(todoTitle) {
    // choose the element
    const toDoItem = document.getElementById(todoTitle);
    // const toDoItem

    //apply remove()
    toDoItem.remove();
}

// append function
function appendTodoItem(title, date, status){
// display todo item
const todoList = document.getElementById("todoList");

//create an element
const todoWrapper = document.createElement("div");

//add the id for the todo item
todoWrapper.id = title.value;

//create todo item
 const todoItem = 
 `<div> 
    <p>Name:${title.value} Date:${date.value} Status: ${status.value} </p>
    <button class = "deleteBtn" onclick = "deleteTodoItem('${title.value}')" >Delete</button>
 </div>`;
 
 //append
 todoWrapper.innerHTML = todoItem;
 todoList.appendChild(todoWrapper);
// todoList.innerHTML = todoItem;
console.log(todoItem);



//push title into title array
todoArray.push(title.value);
console.log(todoArray, "todoarray");
}

//reset form
function resetForm(title, date, status){
    title.value = "";
    date.value = "";
    status.value = "";
}

//validation - alert()
function validateForm(title){
    if (!title.value) {
        alert("Please insert title")
        return false;
    }
    if (!date.value) {
        alert("Please insert date");
        return false;
    }
    console.log(todoArray, "todo");
// check if title is unique 
//have user input: title.value
//todoArray?
if (todoArray.some((item) => item === title.value))  {
    alert("Title should be unique")
    return false;
}


//else
    return true;
}

submitBtn.addEventListener("click", (event) => {
    
    // get user input
    let title = document.getElementById("title");
    let date = document.getElementById("date");
    let status = document.getElementById("status");
    
    //prevent form reset
    event.preventDefault();

    //console log form input
    //console.log("Name: ", title);
    //console.log("Date: ", date);
    // console.log("status: ", status);

//Validation
const isValid = validateForm(title);
if (!isValid) return;

//append list
appendTodoItem(title, date, status);
//reset form
resetForm(title, date, status);

});



