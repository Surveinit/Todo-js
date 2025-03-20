import { Project } from "./projects.js";

const projects = {};

export function makeNewProject(projectName) {
  if (!projects[projectName]) {
    projects[projectName] = new Project(projectName);
    console.log(`✅ Project "${projectName}" created!`);
  } else {
    console.log(`⛔ Project "${projectName}" already exists!`);
  }
}

export function getProjects() {
  return projects;
}

export function findTask(projectName, taskTitle) {
  return projects[projectName]?.getTask(taskTitle) ?? null;
}

export function markTaskAsComplete(projectName, taskTitle) {
  const task = findTask(projectName, taskTitle);
  if (task) {
    task.markAsComplete();
    console.log(`✅ Task "${taskTitle}" marked as complete!`);
  } else {
    console.error(`⛔ Task "${taskTitle}" not found!`);
  }
}

export function toggleTaskPriority(projectName, taskTitle) {
  const task = findTask(projectName, taskTitle);
  if (task) {
    task.togglePriority();
    console.log(`✅ Task "${taskTitle}" priority changed!`);
  } else {
    console.error(`⛔ Task "${taskTitle}" couldn't change priority!`);
  }
}
