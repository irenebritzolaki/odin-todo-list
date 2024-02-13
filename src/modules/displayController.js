import { projectsController } from "./projects";

export const displayController = (() => {
  let activeProject = undefined;

  const displayProjectsList = () => {
    const projectsListDiv = document.querySelector(".projects-list");
    projectsListDiv.innerHTML = "";

    for (let project of projectsController.projectsList) {
      const projectItem = document.createElement("div");
      projectItem.innerText = project.name;
      projectItem.className = "project tab";
      projectItem.addEventListener("click", () => viewProject(project));
      projectsListDiv.appendChild(projectItem);
    }
  };

  const createTaskDiv = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const basicDiv = document.createElement("div");
    basicDiv.className = "basic";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      task.toggleComplete();
    });
    if (task.completed) checkbox.checked = true;
    basicDiv.appendChild(checkbox);

    const titleLabel = document.createElement("label");
    titleLabel.innerText = task.title;
    basicDiv.appendChild(titleLabel);

    const projectBtn = document.createElement("button");
    projectBtn.innerText = task.project.name;
    projectBtn.className = "go-to-project";
    projectBtn.addEventListener("click", () => viewProject(task.project));
    if (activeProject != undefined) projectBtn.style.visibility = "hidden";
    basicDiv.appendChild(projectBtn);

    const dueDate = document.createElement("p");
    dueDate.className = "dueDate";
    dueDate.innerText = task.dueDate;
    basicDiv.appendChild(dueDate);

    const viewBtn = document.createElement("button");
    viewBtn.className = "view-btn";
    viewBtn.innerText = "View";
    basicDiv.appendChild(viewBtn);

    taskDiv.appendChild(basicDiv);

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "details";
    detailsDiv.style.display = "none";

    const descriptionLabel = document.createElement("h4");
    descriptionLabel.innerText = "Description:";
    detailsDiv.appendChild(descriptionLabel);

    const description = document.createElement("p");
    description.className = "description";
    description.innerText = task.description;
    detailsDiv.appendChild(description);

    taskDiv.appendChild(detailsDiv);

    viewBtn.addEventListener("click", () => {
      if (detailsDiv.style.display === "none")
        detailsDiv.style.display = "initial";
      else detailsDiv.style.display = "none";
    });

    if (task.priority)
      taskDiv.style.borderColor = `var(--${task.priority}-priority-color)`;

    return taskDiv;
  };

  const displayTasksList = (project, resetPrevious = true) => {
    const tasksListDiv = document.querySelector(".tasks-container");
    if (resetPrevious) tasksListDiv.innerHTML = "";

    for (let task of project.tasks) {
      tasksListDiv.appendChild(createTaskDiv(task));
    }
  };

  const displayAllTasks = () => {
    activeProject = undefined;
    document.querySelector(".tasks-container").innerHTML = "";
    for (let project of projectsController.projectsList) {
      displayTasksList(project, false);
    }
  };

  const viewAll = () => {
    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = "All Tasks";
    displayAllTasks();
    resetProjectSelectorDefault();
  };

  const viewProject = (project) => {
    activeProject = project;
    setProjectSelectorDefault(project);

    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = project.name;
    displayTasksList(project);
  };

  document.querySelector(".new-project-btn").addEventListener("click", () => {
    document.querySelector(".new-project-dialog").showModal();
  });

  const newProjectForm = document.querySelector(".new-project-dialog form");
  newProjectForm.addEventListener("submit", () => {
    const projectName = document.querySelector("#name").value;
    projectsController.addNewProject(projectName);
    updateProjectSelectorOptions();
    displayProjectsList();
    newProjectForm.reset();
  });

  const resetProjectSelectorDefault = () => {
    const selectedOption = document.querySelector(
      ".new-task-dialog form select option[selected]"
    );

    if (selectedOption) selectedOption.defaultSelected = false;
  };

  const setProjectSelectorDefault = (project) => {
    document.querySelector(
      `.new-task-dialog form select option[value='${project.name}']`
    ).defaultSelected = true;
  };

  const updateProjectSelectorOptions = () => {
    const projectSelectorOptions = document.querySelector(
      ".new-task-dialog form select optgroup"
    );
    projectSelectorOptions.innerHTML = "";
    for (let project of projectsController.projectsList) {
      const newOption = document.createElement("option");
      newOption.value = project.name;
      newOption.innerText = project.name;
      projectSelectorOptions.appendChild(newOption);
    }
  };

  document.querySelector(".new-task-btn").addEventListener("click", () => {
    document.querySelector(".new-task-dialog").showModal();
  });

  const newTaskForm = document.querySelector(".new-task-dialog form");
  newTaskForm.addEventListener("submit", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;

    let priority = undefined;
    if (document.querySelector("input[name='priority']:checked"))
      priority = document.querySelector("input[name='priority']:checked").value;

    const projectSelector = document.querySelector("#project-selector").value;
    projectsController
      .getProjectByName(projectSelector)
      .addNewTask(title, description, dueDate, priority);

    activeProject ? displayTasksList(activeProject) : displayAllTasks();
    newTaskForm.reset();
  });

  const initDisplay = () => {
    displayProjectsList();
    updateProjectSelectorOptions();
    viewAll();
  };

  document
    .querySelector(".left-panel .all-tasks")
    .addEventListener("click", viewAll);

  document.querySelectorAll(".close-btn").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.target.offsetParent.getElementsByTagName("form")[0].reset(); // event.target.offsetParent refers to dialog (new-project-dialog or new-task-dialog)
      event.target.offsetParent.close();
    })
  );

  return { initDisplay };
})();
