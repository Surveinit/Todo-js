import { Task } from "./tasks.js";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    if (this.tasks.some(t => t.title === task.title)) {
      console.log(`⛔ Task "${task.title}" already exists in "${this.name}"!`);
      return;
    }
    this.tasks.push(task);
  }

  removeTask(taskTitle) {
    this.tasks = this.tasks.filter(task => task.title !== taskTitle);
  }

  getTask(taskTitle) {
    return this.tasks.find(task => task.title === taskTitle);
  }
}
