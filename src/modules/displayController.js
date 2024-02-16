import { isToday, isTomorrow, isYesterday, format } from "date-fns";
import { appController } from "./appController";

export const displayController = (() => {
  const ALL_MODE = 0;
  const TODAY_MODE = 1;
  const NEXT7DAYS_MODE = 2;
  const PROJECT_MODE = 3;

  let activeProject = undefined;
  let viewMode = ALL_MODE;

  let editTaskMode = false;
  let taskToEdit = undefined;

  const displayProjectsList = () => {
    const projectsListDiv = document.querySelector(".projects-list");
    projectsListDiv.innerHTML = "";

    for (let project of appController.projectsList) {
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
    if (viewMode === PROJECT_MODE) projectBtn.style.visibility = "hidden";

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

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = "Edit";
    basicDiv.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
      openEditTask(task);
    });

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
    displayTasks(appController.getAllTasks());
  };

  const viewTodayTasks = () => {
    viewMode = TODAY_MODE;
    resetProjectSelectorDefault();

    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = "Today";
    displayTasks(appController.getTodayTasks());
    // todo default date today on form
  };

  const viewNext7DaysTasks = () => {
    viewMode = NEXT7DAYS_MODE;
    resetProjectSelectorDefault();

    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = "Next 7 Days";
    displayTasks(appController.getNext7DaysTasks());
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
    for (let project of appController.projectsList) {
      const newOption = document.createElement("option");
      newOption.value = project.name;
      newOption.innerText = project.name;
      projectSelectorOptions.appendChild(newOption);
    }
  };

  const setModalMode = () => {
    document.querySelector(".dialog-title").innerText = editTaskMode
      ? "Edit Task"
      : "New Task";
    document.querySelector(".create-new-task-btn").innerText = editTaskMode
      ? "Update Task"
      : "Add Task";
  };

  const openEditTask = (task) => {
    taskToEdit = task;
    editTaskMode = true;
    document.querySelector("#title").value = task.title;
    document.querySelector("#description").description = task.description;

    if (task.dueDate != "-")
      document.querySelector("#due-date").value = format(
        task.dueDate,
        "yyyy-MM-dd"
      );

    if (task.priority != "")
      document.querySelector(`#${task.priority}`).checked = true;

    document.querySelector(`option[value=${task.project.name}`).selected = true;

    setModalMode();
    document.querySelector(".new-task-dialog").showModal();
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
      appController.addNewProject(projectName);
      updateProjectSelectorOptions();
      displayProjectsList();
      newProjectForm.reset();
    });

    document.querySelector(".new-task-btn").addEventListener("click", () => {
      setModalMode();
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

      if (!editTaskMode) {
        appController
          .getProjectByName(projectSelector)
          .addNewTask(title, description, dueDate, priority);
      } else {
        if (taskToEdit.project.name === projectSelector) {
          taskToEdit.update(title, description, dueDate, priority);
        } else {
          taskToEdit.project.deleteTask(taskToEdit.title);
          appController
            .getProjectByName(projectSelector)
            .addNewTask(title, description, dueDate, priority);
        }
        editTaskMode = false;
      }

      let tasks;
      switch (viewMode) {
        case ALL_MODE:
          tasks = appController.getAllTasks();
          break;
        case TODAY_MODE:
          tasks = appController.getTodayTasks();
          break;
        case NEXT7DAYS_MODE:
          tasks = appController.getNext7DaysTasks();
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
        editTaskMode = false;
      })
    );
  };

  addEventListeners();

  return { initDisplay };
})();
