export class Task {
  constructor(title, description, dueDate, priority = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completion = false;
  }

  markAsComplete() {
    this.completion = true;
  }

  togglePriority() {
    this.priority = !this.priority;
  }

  updateTask(newTitle, newDescription, newDueDate, newPriority) {
    this.title = newTitle ?? this.title;
    this.description = newDescription ?? this.description;
    this.dueDate = newDueDate ?? this.dueDate;
    this.priority = newPriority ?? this.priority;
  }
}
