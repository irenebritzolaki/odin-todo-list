import { projectsController } from "./projects";

export const displayController = (() => {
  let activeProject = null;

  const displayProjectsList = () => {
    const projectsListDiv = document.querySelector(".projects-list");
    projectsListDiv.innerHTML = "";

    for (let project of projectsController.projectsList) {
      const projectItem = document.createElement("div");
      projectItem.innerText = project.name;
      projectItem.className = "project";
      projectItem.addEventListener("click", () => viewProject(project));
      projectsListDiv.appendChild(projectItem);
    }
  };

  const displayTasksList = (project) => {
    const tasksListDiv = document.querySelector(".tasks-container");
    tasksListDiv.innerHTML = "";

    for (let task of project.tasks) {
      const taskItem = document.createElement("task");
      taskItem.innerText = task.toString() + "\n";
      taskItem.className = "task";
      tasksListDiv.appendChild(taskItem);
    }
  };

  const viewProject = (project) => {
    activeProject = project;
    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = project.name;
    displayTasksList(project);
  };

  projectsController.createNewProject("Personal");
  projectsController.createNewProject("Work");
  projectsController.createNewProject("Gym");
  displayProjectsList();

  document.querySelector(".new-project-btn").addEventListener("click", () => {
    document.querySelector("dialog").showModal();
  });

  document.querySelector(".new-task-btn").addEventListener("click", () => {
    if (activeProject) {
      activeProject.addNewTask("marika " + activeProject.name);
      displayTasksList(activeProject);
    }
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", () => {
    const projectName = document.querySelector("#name").value;
    projectsController.createNewProject(projectName);
    displayProjectsList();
    form.reset();
  });
})();
