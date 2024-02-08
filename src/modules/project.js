export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addNewTask(task) {
    this.tasks.push(task);
  }
}
