# Please create a To do list

## Requirements:

1. A to-do item should have name, date and status
2. The to-do name is unique
3. Validation: when the user did NOT insert any name or date it should shown a warning
4. The color of to-do item should match the status color (for example: not started status had red color)
5. The user can delete the to-do item
6. Styling is up to you :)

## Update the deploy link here:

## Here is a sample:

Todo form
![This is an image](./screenshots/todoform.png)
Todo list
![This is an image](./screenshots/todolist.png)



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

Explanation:
HTML:

Provides the structure for the to-do list, including form inputs for task name, date, and status, along with a submit button.
Contains a section to display the list of tasks and a legend to indicate the meaning of different task statuses.
JavaScript:

Handles adding tasks to the list with validation for empty fields and unique task names.
Defines the appendTodoItem function to display the tasks on the page and the deleteTodoItem function to remove tasks.
Includes form reset functionality to clear inputs after adding a task.
Validates form inputs before adding tasks to ensure all required fields are filled and task names are unique.
CSS:

Styles the form, buttons, and task list for a clean and user-friendly interface.
Applies background colors to tasks based on their status to visually differentiate them.
Includes a legend to explain the status colors.
With this setup, you can create, validate, display, and delete tasks in your to-do list, with tasks color-coded according to their status.








