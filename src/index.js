import { projectsController } from "./modules/projects";
import { Task } from "./modules/task";
import { displayController } from "./modules/displayController";
import "./style.css";

console.log("Add demo projects and tasks");

projectsController.addNewProject("Personal");
projectsController.addNewProject("Work");
projectsController.addNewProject("Gym");

projectsController.projectsList[0].addNewTask("Cook dinner", "", "", "medium");
projectsController.projectsList[0].addNewTask(
  "Go shopping",
  "Need: sneakers, totebag",
  "",
  "low"
);
projectsController.projectsList[0].addNewTask(
  "Take a shower",
  "Lalalalalalalala",
  "",
  ""
);
projectsController.projectsList[0].addNewTask(
  "Go to the dentist",
  "Location: nai nai nai\n Tel: 123456789",
  "02-20-2024",
  "high"
);

projectsController.projectsList[1].addNewTask(
  "Fix bug #7677",
  "",
  "02-15-2024",
  "high"
);
projectsController.projectsList[1].addNewTask(
  "Fix bug #5588",
  "",
  "02-14-2024",
  "high"
);
projectsController.projectsList[1].addNewTask(
  "Read lesson X",
  "www.example.com/lesson-X",
  "",
  "medium"
);

projectsController.projectsList[2].addNewTask(
  "Workout",
  "",
  "02-13-2024",
  "high"
);

projectsController.addNewProject("Zavarakatranemia");
projectsController.projectsList[3].addNewTask(
  "Okkkkkkkkkkkkkkkkkkkkk",
  "",
  "",
  ""
);

displayController.initDisplay();
