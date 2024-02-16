import { appController } from "./modules/appController";
import { displayController } from "./modules/displayController";
import "./style.css";

console.log("Add demo projects and tasks");

appController.addNewProject("Personal");
appController.addNewProject("Work");
appController.addNewProject("Gym");

appController.projectsList[0].addNewTask("Cook dinner", "", "", "medium");
appController.projectsList[0].addNewTask(
  "Go shopping",
  "Need: sneakers, totebag",
  "",
  "low"
);
appController.projectsList[0].addNewTask(
  "Take a shower",
  "Lalalalalalalala",
  "",
  ""
);
appController.projectsList[0].addNewTask(
  "Go to the dentist",
  "Location: nai nai nai\n Tel: 123456789",
  "02-20-2024",
  "high"
);

appController.projectsList[1].addNewTask(
  "Fix bug #7677",
  "",
  "02-15-2024",
  "high"
);
appController.projectsList[1].addNewTask(
  "Fix bug #5588",
  "",
  "02-14-2024",
  "high"
);
appController.projectsList[1].addNewTask(
  "Read lesson X",
  "www.example.com/lesson-X",
  "",
  "medium"
);

appController.projectsList[2].addNewTask("Workout", "", "02-13-2024", "high");

appController.addNewProject("Zavarakatranemia");
appController.projectsList[3].addNewTask("Okkkkkkkkkkkkkkkkkkkkk", "", "", "");

displayController.initDisplay();
