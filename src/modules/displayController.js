import {
  isToday,
  isTomorrow,
  isYesterday,
  isBefore,
  startOfToday,
  format,
} from "date-fns";
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

  let renameProjectMode = false;
  let projectToRename = undefined;

  const displayProjectsList = () => {
    const projectsListDiv = document.querySelector(".projects-list");
    projectsListDiv.innerHTML = "";

    for (let project of appController.projectsList) {
      const projectItem = document.createElement("div");
      projectItem.className = "project tab";

      const projectName = document.createElement("p");
      projectName.innerText = project.name;
      projectItem.appendChild(projectName);

      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons-div";

      const renameProjectBtn = document.createElement("button");
      renameProjectBtn.className = "rename-project-btn";
      renameProjectBtn.innerText = "R";
      buttonsDiv.appendChild(renameProjectBtn);
      renameProjectBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openRenameProject(project);
      });

      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "delete-project-btn";
      deleteProjectBtn.innerText = "D";
      buttonsDiv.appendChild(deleteProjectBtn);
      deleteProjectBtn.addEventListener("click", (e) => {
        // todo show modal for confirming delete
        e.stopPropagation();
        appController.deleteProject(project);
        updateProjectSelectorOptions();
        displayProjectsList();
        if (viewMode === PROJECT_MODE && project === activeProject) viewAll();
      });

      projectItem.appendChild(buttonsDiv);
      projectItem.addEventListener("click", () => viewProject(project));
      projectsListDiv.appendChild(projectItem);
    }
  };

  const setProjectModalMode = () => {
    document.querySelector(".project-dialog .dialog-title").innerText =
      renameProjectMode ? "Rename Project" : "New Project";
    document.querySelector(".submit-project-btn").innerText = renameProjectMode
      ? "Update Project"
      : "Create Project";
  };

  const openRenameProject = (project) => {
    projectToRename = project;
    renameProjectMode = true;
    document.querySelector("#project-name").value = project.name;

    setProjectModalMode();
    document.querySelector(".project-dialog").showModal();
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

    if (isBefore(task.dueDate, startOfToday()))
      dueDate.classList.add("expired");

    basicDiv.appendChild(dueDate);

    const viewBtn = document.createElement("button");
    viewBtn.className = "view-task-btn";
    viewBtn.innerText = "View";
    basicDiv.appendChild(viewBtn);

    const editBtn = document.createElement("button");
    editBtn.className = "edit-task-btn";
    editBtn.innerText = "Edit";
    basicDiv.appendChild(editBtn);
    editBtn.addEventListener("click", () => {
      openEditTask(task);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-task-btn";
    deleteBtn.innerText = "Delete";
    basicDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      task.project.deleteTask(task);
      updateDisplay();
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

    if (task.priority != "")
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

  const updateDisplay = () => {
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
  };

  const resetProjectSelectorDefault = () => {
    const selectedOption = document.querySelector(
      ".task-dialog form select option[selected]"
    );

    if (selectedOption) selectedOption.defaultSelected = false;
  };

  const setProjectSelectorDefault = (project) => {
    document.querySelector(
      `.task-dialog form select option[value='${project.name}']`
    ).defaultSelected = true;
  };

  const updateProjectSelectorOptions = () => {
    const projectSelectorOptions = document.querySelector(
      ".task-dialog form select optgroup"
    );
    projectSelectorOptions.innerHTML = "";
    for (let project of appController.projectsList) {
      const newOption = document.createElement("option");
      newOption.value = project.name;
      newOption.innerText = project.name;
      projectSelectorOptions.appendChild(newOption);
    }
  };

  const setTaskModalMode = () => {
    document.querySelector(".task-dialog .dialog-title").innerText =
      editTaskMode ? "Edit Task" : "New Task";
    document.querySelector(".submit-task-btn").innerText = editTaskMode
      ? "Update Task"
      : "Add Task";
  };

  const openEditTask = (task) => {
    taskToEdit = task;
    editTaskMode = true;
    document.querySelector("#task-title").value = task.title;
    document.querySelector("#task-description").description = task.description;

    if (task.dueDate != "-")
      document.querySelector("#task-due-date").value = format(
        task.dueDate,
        "yyyy-MM-dd"
      );

    if (task.priority != "")
      document.querySelector(`#${task.priority}`).checked = true;

    document.querySelector(`option[value=${task.project.name}`).selected = true;

    setTaskModalMode();
    document.querySelector(".task-dialog").showModal();
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
      setProjectModalMode();
      document.querySelector(".project-dialog").showModal();
    });

    const projectForm = document.querySelector(".project-dialog form");
    projectForm.addEventListener("submit", () => {
      const projectName = document.querySelector("#project-name").value;
      let project = projectToRename;

      if (renameProjectMode) projectToRename.rename(projectName);
      else project = appController.addNewProject(projectName);

      updateProjectSelectorOptions();
      displayProjectsList();
      viewProject(project);
      renameProjectMode = false;
      projectForm.reset();
    });

    document.querySelector(".new-task-btn").addEventListener("click", () => {
      setTaskModalMode();
      document.querySelector(".task-dialog").showModal();
    });

    const taskForm = document.querySelector(".task-dialog form");
    taskForm.addEventListener("submit", () => {
      const title = document.querySelector("#task-title").value;
      const description = document.querySelector("#task-description").value;
      const dueDate = document.querySelector("#task-due-date").value;

      let priority = "";
      if (document.querySelector("input[name='task-priority']:checked"))
        priority = document.querySelector(
          "input[name='task-priority']:checked"
        ).value;

      const projectSelector = document.querySelector(
        "#task-project-selector"
      ).value;

      if (!editTaskMode) {
        appController
          .getProjectByName(projectSelector)
          .addNewTask(title, description, dueDate, priority);
      } else {
        if (taskToEdit.project.name === projectSelector) {
          taskToEdit.update(title, description, dueDate, priority);
        } else {
          taskToEdit.project.deleteTask(taskToEdit);
          appController
            .getProjectByName(projectSelector)
            .addNewTask(title, description, dueDate, priority);
        }
        editTaskMode = false;
      }

      updateDisplay();
      taskForm.reset();
    });

    document.querySelectorAll(".close-btn").forEach((btn) =>
      btn.addEventListener("click", (event) => {
        event.target.offsetParent.getElementsByTagName("form")[0].reset(); // event.target.offsetParent refers to dialog (new-project-dialog or new-task-dialog)
        event.target.offsetParent.close();
        editTaskMode = false;
        renameProjectMode = false;
      })
    );
  };

  addEventListeners();

  return { initDisplay };
})();
