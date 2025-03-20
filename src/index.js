import { makeNewProject, getProjects } from "./modules/projectManager.js";
import { Task } from "./modules/tasks.js";

console.log("Creating a project...");
makeNewProject("TestProject");

const projects = getProjects();
console.log("Project created!", projects);

const task = new Task("Buy Milk", "Get fresh milk", "2025-03-20", true);
projects["TestProject"].addTask(task);

console.log("Updated Project:", projects);
