import { appController } from "./modules/appController";
import { displayController } from "./modules/displayController";
import demoProjects from "./demo.json";
import "./style.css";

if (localStorage.getItem("projects")) {
  console.log("Loading projects and tasks from localStorage...");
  appController.loadProjects(JSON.parse(localStorage.getItem("projects")));
} else {
  console.log("Loading demo projects and tasks...");
  appController.loadProjects(demoProjects);
}

displayController.initializeDisplay();
