import { appController } from "./appController";

export class Task {
  constructor(
    title,
    description,
    dueDate,
    priority,
    project,
    completed = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? dueDate : "-";
    this.priority = priority;
    this.project = project;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
    appController.updateLocalStorage();
  }

  update(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? dueDate : "-";
    this.priority = priority;

    if (project) this.project = project;
    appController.updateLocalStorage();
  }
}
