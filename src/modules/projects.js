import { Task } from "./task";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addNewTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority, this);
    this.tasks.push(task);
  }

  deleteTask(task) {
    let index = -1;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) index = i;
    }
    this.tasks = this.tasks.splice(index, 1);
  }
}
