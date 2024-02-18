import { appController } from "./modules/appController";
import { displayController } from "./modules/displayController";
import demoProjects from "./demo.json";
import "./style.css";

console.log("Add demo projects and tasks");
appController.loadProjectsJSON(demoProjects);
displayController.initializeDisplay();
