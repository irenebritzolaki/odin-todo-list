import { appController } from "./appController";
import { Task } from "./task";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  rename(name) {
    this.name = name;
    appController.updateLocalStorage();
  }

  addNewTask(title, description, dueDate, priority, completed) {
    const task = new Task(
      title,
      description,
      dueDate,
      priority,
      this,
      completed
    );
    this.tasks.push(task);
    appController.updateLocalStorage();
  }

  deleteTask(task) {
    let index = -1;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) index = i;
    }
    this.tasks.splice(index, 1);
    appController.updateLocalStorage();
  }
}
