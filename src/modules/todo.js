const projects = {};

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completion = false;
  }

  markAsComplete() {
    this.completion = true;
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
    return;
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
    console.log(`Task "${taskTitle}" not found!`);
  }
}

module.exports = {
  makeNewTask,
  makeNewProject,
  addTaskToProject,
  markTaskAsComplete,
  projects,
};
