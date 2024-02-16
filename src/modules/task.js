import { format } from "date-fns";

export class Task {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? format(dueDate, "MM-dd-yyyy") : "-";
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  update(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? format(dueDate, "MM-dd-yyyy") : "-";
    this.priority = priority;

    if (project) this.project = project;
  }
}
