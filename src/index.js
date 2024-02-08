import { Project } from "./modules/project";
import { Task } from "./modules/task";
import { displayController } from "./modules/displayController";

console.log("Okayyyyyyyyyyyyyy");

const projectWork = new Project("Work");
projectWork.addNewTask(
  new Task("Work on odin-todo-list", "euvhsuhv", "13/02", "high", projectWork)
);
projectWork.addNewTask(
  new Task("Read JS in real world section", "---", "", "low", projectWork)
);
console.log(projectWork);

// displayController
