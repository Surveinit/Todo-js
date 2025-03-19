const projects = {};

class Task {
  constructor(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function makeNewProject(projectName){
  if (!projects[projectName]) {
    projects[projectName] = [];
  } else {
    console.log(`${projectName} already exists!`)
  }
}

function makeNewTask(projectName, title, description, dueDate, priority) {
  const task = new Task(title, description, dueDate, priority);
  addTaskToProject(projectName, task)
}

function addTaskToProject(projectName, task) {
  if (!projects[projectName]) {
    projects[projectName] = [];
  }
  projects[projectName].push(task);
}

module.exports = {
  makeNewTask,
  makeNewProject,
  addTaskToProject,
  projects
};
