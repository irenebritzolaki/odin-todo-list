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
      taskItem.className = "task";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        task.toggleComplete();
      });
      if (task.completed) checkbox.checked = true;
      taskItem.appendChild(checkbox);

      const label = document.createElement("label");
      label.innerText = task.title;
      taskItem.appendChild(label);
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
    document.querySelector(".new-project-dialog").showModal();
  });

  const newProjectForm = document.querySelector(".new-project-dialog form");
  newProjectForm.addEventListener("submit", () => {
    const projectName = document.querySelector("#name").value;
    projectsController.createNewProject(projectName);
    displayProjectsList();
    newProjectForm.reset();
  });

  document.querySelector(".new-task-btn").addEventListener("click", () => {
    if (activeProject) {
      // activeProject.addNewTask("marika " + activeProject.name);
      document.querySelector(".new-task-dialog").showModal();
    }
  });

  const newTaskForm = document.querySelector(".new-task-dialog form");
  newTaskForm.addEventListener("submit", () => {
    // const projectName = document.querySelector("#name").value;
    // projectsController.createNewProject(projectName);
    // displayProjectsList();
    const formData = new FormData(newTaskForm).entries();
    console.log(...formData);

    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;

    let priority = undefined;
    if (document.querySelector("input[name='priority']:checked"))
      priority = document.querySelector("input[name='priority']:checked").value;

    activeProject.addNewTask(title, description, dueDate, priority);
    displayTasksList(activeProject);
    newTaskForm.reset();
  });
})();
