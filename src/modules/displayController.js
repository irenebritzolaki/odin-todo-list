import { projectsController } from "./projects";
import { isToday, isTomorrow, isYesterday } from "date-fns";

export const displayController = (() => {
  const ALL_MODE = 0;
  const TODAY_MODE = 1;
  const NEXT7DAYS_MODE = 2;
  const PROJECT_MODE = 3;

  let activeProject = undefined;
  let viewMode = ALL_MODE;

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

    if (isToday(task.dueDate)) dueDate.innerText = "Today";
    else if (isTomorrow(task.dueDate)) dueDate.innerText = "Tomorrow";
    else if (isYesterday(task.dueDate)) dueDate.innerText = "Yesterday";
    else dueDate.innerText = task.dueDate;

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

  const displayTasks = (tasksArray) => {
    const tasksListDiv = document.querySelector(".tasks-container");
    tasksListDiv.innerHTML = "";
    for (let task of tasksArray) {
      tasksListDiv.appendChild(createTaskDiv(task));
    }
  };

  const viewAll = () => {
    viewMode = ALL_MODE;
    resetProjectSelectorDefault();

    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = "All Tasks";
    displayTasks(projectsController.getAllTasks());
  };

  const viewTodayTasks = () => {
    viewMode = TODAY_MODE;
    resetProjectSelectorDefault();

    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = "Today";
    displayTasks(projectsController.getTodayTasks());
    // todo default date today on form
  };

  const viewNext7DaysTasks = () => {
    viewMode = NEXT7DAYS_MODE;
    resetProjectSelectorDefault();

    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = "Next 7 Days";
    displayTasks(projectsController.getNext7DaysTasks());
    // todo default date today on form
  };

  const viewProject = (project) => {
    viewMode = PROJECT_MODE;
    activeProject = project;
    setProjectSelectorDefault(project);

    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = project.name;
    displayTasks(project.tasks);
  };

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

  const initDisplay = () => {
    displayProjectsList();
    updateProjectSelectorOptions();
    viewAll();
  };

  const addEventListeners = () => {
    document
      .querySelector(".left-panel .all-tasks")
      .addEventListener("click", viewAll);

    document
      .querySelector(".left-panel .today-tasks")
      .addEventListener("click", viewTodayTasks);

    document
      .querySelector(".left-panel .next7days-tasks")
      .addEventListener("click", viewNext7DaysTasks);

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
        priority = document.querySelector(
          "input[name='priority']:checked"
        ).value;

      const projectSelector = document.querySelector("#project-selector").value;
      projectsController
        .getProjectByName(projectSelector)
        .addNewTask(title, description, dueDate, priority);

      let tasks;
      switch (viewMode) {
        case ALL_MODE:
          tasks = projectsController.getAllTasks();
          break;
        case TODAY_MODE:
          tasks = projectsController.getTodayTasks();
          break;
        case NEXT7DAYS_MODE:
          tasks = projectsController.getNext7DaysTasks();
          break;
        case PROJECT_MODE:
          tasks = activeProject.tasks;
      }
      displayTasks(tasks);
      newTaskForm.reset();
    });

    document.querySelectorAll(".close-btn").forEach((btn) =>
      btn.addEventListener("click", (event) => {
        event.target.offsetParent.getElementsByTagName("form")[0].reset(); // event.target.offsetParent refers to dialog (new-project-dialog or new-task-dialog)
        event.target.offsetParent.close();
      })
    );
  };

  addEventListeners();

  return { initDisplay };
})();
