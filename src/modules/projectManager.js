import { Project } from "./projects.js";
import { Task } from "./tasks.js";

const projects = loadProjectsFromLocalStorage();

export function getProjects() {
  return projects;
}

export function loadProjectsFromLocalStorage() {
  const storedProjects = localStorage.getItem("projects");
  if (!storedProjects) return {};

  const parsedProjects = JSON.parse(storedProjects);
  const restoredProjects = {};

  Object.keys(parsedProjects).forEach((projectName) => {
    const projectData = parsedProjects[projectName];
    const project = new Project(projectData.name);

    // Restore tasks as Task instances
    project.tasks = projectData.tasks.map(
      (task) =>
        new Task(task.title, task.description, task.dueDate, task.priority),
    );

    restoredProjects[projectName] = project;
  });

  return restoredProjects;
}

export function saveProjectsToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function makeNewProject(projectName) {
  if (!projects[projectName]) {
    projects[projectName] = new Project(projectName);
    console.log(`✅ Project "${projectName}" created!`);
    saveProjectsToLocalStorage();
  } else {
    console.log(`⛔ Project "${projectName}" already exists!`);
  }
}

export function findTask(projectName, taskTitle) {
  return projects[projectName]?.getTask(taskTitle) ?? null;
}

export function markTaskAsComplete(projectName, taskTitle) {
  const task = findTask(projectName, taskTitle);
  if (task) {
    task.markAsComplete();
    saveProjectsToLocalStorage();
    console.log(`✅ Task "${taskTitle}" marked as complete!`);
  } else {
    console.error(`⛔ Task "${taskTitle}" not found!`);
  }
}

export function toggleTaskPriority(projectName, taskTitle) {
  const task = findTask(projectName, taskTitle);
  if (task) {
    task.togglePriority();
    saveProjectsToLocalStorage();
    console.log(`✅ Task "${taskTitle}" priority changed!`);
  } else {
    console.error(`⛔ Task "${taskTitle}" couldn't change priority!`);
  }
}
