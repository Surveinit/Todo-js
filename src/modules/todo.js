const projects = {};

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority || false;
    this.completion = false;
  }

  markAsComplete() {
    this.completion = true;
  }

  togglePriority() {
    this.priority = !this.priority;
  }

  updateTask(newTitle, newDescription, newDuedate, newPriority) {
    this.title = newTitle || this.title;
    this.description = newDescription || this.description;
    this.dueDate = newDuedate || this.dueDate;
    this.priority = newPriority || this.priority;
  }
}

function makeNewProject(projectName) {
  if (!projects[projectName]) {
    projects[projectName] = [];
  } else {
    console.log(`${projectName} already exists!`);
  }
}

function makeNewTask(projectName, title, description, dueDate, priority) {
  const task = new Task(title, description, dueDate, priority);
  addTaskToProject(projectName, task);
}

function addTaskToProject(projectName, task) {
  if (!projects[projectName]) {
    projects[projectName] = [];
  }
  projects[projectName].push(task);
}

function findTask(projectName, taskTitle) {
  if (!projects[projectName]) {
    console.log(`Project ${projectName} not found.`);
    return null;
  }
  const taskObj = projects[projectName].find((task) => task.title === taskTitle);
  return taskObj;
}

function markTaskAsComplete(projectName, taskTitle) {
  taskObj = findTask(projectName, taskTitle);
  if (taskObj) {
    taskObj.markAsComplete();
    console.log(`✅ Task "${taskTitle}" marked as complete!`);
  } else {
    console.log(`⛔ Task "${taskTitle}" not found!`);
  }
}

function toggleTaskPriority(projectName, taskTitle) {
  taskObj = findTask(projectName, taskTitle); 
  if (taskObj) {
    taskObj.togglePriority();
    console.log(`✅ Task "${taskTitle}" priority changed!`);
  } else {
    console.log(`⛔ Task "${taskTitle}" couldn't change priority!`);
  }
}

function deleteTodo(projectName, taskTitle) {
   if (!projects[projectName]) {
    console.log(`⛔ Project "${projectName}" not found.`);
    return;
  }

  const taskIndex = projects[projectName].findIndex((task) => task.title === taskTitle);
  
  if (taskIndex !== -1) {
    projects[projectName].splice(taskIndex, 1); // Remove the task from the array
    console.log(`✅ Task "${taskTitle}" deleted!`);
  } else {
    console.log(`⛔ Task "${taskTitle}" not found in project "${projectName}".`);
  } 
}

function editTask(projectName, taskTitle, newTitle, newDescription, newDuedate, newPriority) {
  taskObj = findTask(projectName, taskTitle);  
  if (taskObj) {
    taskObj.updateTask(newTitle, newDescription, newDuedate, newPriority);
    console.log(`✅ Task "${taskTitle}" edit succesful!`);
  } else {
    console.log(`⛔ Task "${taskTitle}" couldn't edit!`);
  }
}

module.exports = {
  makeNewTask,
  makeNewProject,
  addTaskToProject,
  markTaskAsComplete,
  toggleTaskPriority,
  deleteTodo,
  editTask,
  projects,
};
