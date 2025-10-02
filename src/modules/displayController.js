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
  const UPCOMING_MODE = 2;
  const COMPLETED_MODE = 3;
  const EXPIRED_MODE = 4;
  const PROJECT_MODE = 5;

  let viewMode = ALL_MODE;
  let activeProject = undefined;
  let taskToEdit = undefined;

  const displayProjectsList = () => {
    const projectsListDiv = document.querySelector(".projects-list");
    projectsListDiv.innerHTML = "";

    for (let project of appController.projectsList) {
      const projectItem = document.createElement("div");
      projectItem.className = "project tab";
      projectItem.dataset.name = project.name;

      const projectName = document.createElement("p");
      projectName.className = "project-name";
      projectName.innerText = `${project.name}`;
      projectItem.appendChild(projectName);

      const counter = appController.countProjectIncomplete(project);
      const counterSpan = document.createElement("span");
      counterSpan.classList = "counter";
      counterSpan.innerText = counter;
      counterSpan.style.visibility = counter ? "visible" : "hidden";
      projectItem.appendChild(counterSpan);

      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons-div";

      const renameProjectBtn = document.createElement("button");
      renameProjectBtn.className =
        "rename-project-btn material-symbols-outlined";
      renameProjectBtn.innerText = "edit_square";
      buttonsDiv.appendChild(renameProjectBtn);
      renameProjectBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        setProjectModalMode("edit");
        loadProjectForm(project);
        document.querySelector(".project-dialog").showModal();
      });

      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className =
        "delete-project-btn material-symbols-outlined";
      deleteProjectBtn.innerText = "delete";
      buttonsDiv.appendChild(deleteProjectBtn);
      deleteProjectBtn.addEventListener("click", (e) => {
        // todo show modal for confirming delete
        e.stopPropagation();
        appController.deleteProject(project);
        updateProjectSelectorOptions();
        updateCounters();
        projectItem.remove();

        if (viewMode != PROJECT_MODE) renderContent();
        else if (project === activeProject) showPage(ALL_MODE);
      });

      projectItem.appendChild(buttonsDiv);
      projectItem.addEventListener("click", (e) => {
        setActiveTab(e.target);
        showPage(PROJECT_MODE, project);
      });
      projectsListDiv.appendChild(projectItem);
    }
  };

  const createTaskDiv = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const basicDiv = document.createElement("div");
    basicDiv.className = "basic";

    const customCheckbox = document.createElement("span");
    customCheckbox.className = "checkbox material-symbols-outlined";
    // customCheckbox.innerText = task.completed
    // ? "check_circle"
    // : "radio_button_unchecked";
    // checkbox.type = "checkbox";
    // checkbox.addEventListener("change", function () {
    //   task.toggleComplete();
    //   updateCounters(task.project);
    //   renderContent();
    // });
    if (task.completed) customCheckbox.classList.add("checked");
    basicDiv.appendChild(customCheckbox);

    const titleLabel = document.createElement("label");
    titleLabel.innerText = `${task.title}`;
    basicDiv.appendChild(titleLabel);

    const projectBtn = document.createElement("button");
    projectBtn.innerText = `${task.project.name}`;
    projectBtn.className = "go-to-project";
    projectBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setActiveTab(
        document.querySelector(`.project[data-name='${task.project.name}']`)
      );
      showPage(PROJECT_MODE, task.project);
    });
    if (viewMode === PROJECT_MODE) projectBtn.style.visibility = "hidden";

    basicDiv.appendChild(projectBtn);

    const dueDate = document.createElement("p");
    dueDate.className = "dueDate";

    if (isToday(task.dueDate)) dueDate.innerText = "Today";
    else if (isTomorrow(task.dueDate)) dueDate.innerText = "Tomorrow";
    else if (isYesterday(task.dueDate)) dueDate.innerText = "Yesterday";
    else
      dueDate.innerText = task.dueDate
        ? format(task.dueDate, "dd-MM-yyyy")
        : "-";

    if (isBefore(task.dueDate, startOfToday()))
      dueDate.classList.add("expired");

    basicDiv.appendChild(dueDate);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons-div";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-task-btn material-symbols-outlined";
    editBtn.innerText = "edit_square";
    buttonsDiv.appendChild(editBtn);
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setTaskModalMode("edit");
      taskToEdit = task;
      loadTaskForm(task);
      document.querySelector(".task-dialog").showModal();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-task-btn material-symbols-outlined";
    deleteBtn.innerText = "delete";
    buttonsDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      task.project.deleteTask(task);
      taskDiv.remove();
      updateCounters();
    });

    const viewBtn = document.createElement("button");
    viewBtn.className = "view-task-btn material-symbols-outlined";
    viewBtn.innerText = "info";
    buttonsDiv.appendChild(viewBtn);

    basicDiv.appendChild(buttonsDiv);
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

    viewBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (detailsDiv.style.display === "none")
        detailsDiv.style.display = "initial";
      else detailsDiv.style.display = "none";
    });

    if (task.priority != "")
      taskDiv.style.borderColor = `var(--${task.priority}-priority-color)`;

    taskDiv.addEventListener("click", function () {
      task.toggleComplete();
      customCheckbox.classList.toggle("checked");
      // customCheckbox.innerText = task.completed
      //   ? "check_circle"
      //   : "radio_button_unchecked";

      updateCounters(task.project);
      renderContent();
    });

    return taskDiv;
  };

  const displayTasks = (tasksArray) => {
    const tasksListDiv = document.querySelector(".tasks-container");
    tasksListDiv.innerHTML = "";
    for (let task of tasksArray) {
      tasksListDiv.appendChild(createTaskDiv(task));
    }
  };

  const updateContentTitle = () => {
    const contentTitleDiv = document.querySelector(".content-title");
    const icon = document.querySelector(".content .top .icon");

    switch (viewMode) {
      case ALL_MODE:
        icon.innerText = "calendar_month";
        contentTitleDiv.innerText = "All tasks";
        break;
      case TODAY_MODE:
        icon.innerText = "today";
        contentTitleDiv.innerText = "Today";
        break;
      case UPCOMING_MODE:
        icon.innerText = "date_range";
        contentTitleDiv.innerText = "Upcoming";
        break;
      case COMPLETED_MODE:
        icon.innerText = "task_alt";
        contentTitleDiv.innerText = "Completed";
        break;
      case EXPIRED_MODE:
        icon.innerText = "history";
        contentTitleDiv.innerText = "Expired";
        break;
      case PROJECT_MODE:
        icon.innerText = "";
        contentTitleDiv.innerText = `${activeProject.name}`;
    }
  };

  // when editing a task update all counters else (when just toggle) update only general counters and task's project counter
  const updateCounters = (taskProject) => {
    const allCounter = appController.countAllIncomplete();
    document.querySelector(".all-tasks .counter").innerText = allCounter;
    document.querySelector(".all-tasks .counter").style.visibility = allCounter
      ? "visible"
      : "hidden";

    const todayCounter = appController.countTodayIncomplete();
    document.querySelector(".today-tasks .counter").innerText = todayCounter;
    document.querySelector(".today-tasks .counter").style.visibility =
      todayCounter ? "visible" : "hidden";

    const upcomingCounter = appController.countUpcomingIncomplete();
    document.querySelector(".upcoming-tasks .counter").innerText =
      upcomingCounter;
    document.querySelector(".upcoming-tasks .counter").style.visibility =
      upcomingCounter ? "visible" : "hidden";

    if (!taskProject) {
      for (let project of appController.projectsList) {
        let counter = appController.countProjectIncomplete(project);
        document.querySelector(
          `.project[data-name='${project.name}'] .counter`
        ).innerText = counter;
        document.querySelector(
          `.project[data-name='${project.name}'] .counter`
        ).style.visibility = counter ? "visible" : "hidden";
      }
    } else {
      let counter = appController.countProjectIncomplete(taskProject);
      document.querySelector(
        `.project[data-name='${taskProject.name}'] .counter`
      ).innerText = counter;
      document.querySelector(
        `.project[data-name='${taskProject.name}'] .counter`
      ).style.visibility = counter ? "visible" : "hidden";
    }
  };

  const renderContent = () => {
    let tasks;
    switch (viewMode) {
      case ALL_MODE:
        tasks = appController.getAllTasks();
        break;
      case TODAY_MODE:
        tasks = appController.getTodayTasks();
        break;
      case UPCOMING_MODE:
        tasks = appController.getUpcomingTasks();
        break;
      case COMPLETED_MODE:
        tasks = appController.getCompletedTasks();
        break;
      case EXPIRED_MODE:
        tasks = appController.getExpiredTasks();
        break;
      case PROJECT_MODE:
        tasks = activeProject.tasks;
    }

    switch (document.querySelector("#selectSort").value) {
      case "date-asc":
        tasks = appController.sortByDate(tasks);
        break;
      case "date-desc":
        tasks = appController.sortByDate(tasks).reverse();
        break;
      case "priority-lth":
        tasks = appController.sortByPriority(tasks);
        break;
      case "priority-htl":
        tasks = appController.sortByPriority(tasks).reverse();
        break;
    }

    displayTasks(tasks);
  };

  const setActiveTab = (tab) => {
    if (document.querySelector(".tab.active"))
      document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
  };

  const showPage = (mode, project) => {
    viewMode = mode;
    activeProject = project;

    if (mode != PROJECT_MODE) resetProjectSelectorDefault();
    else setProjectSelectorDefault(project);
    // todo: if todays tasks, set today as default date

    updateContentTitle();
    renderContent();
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
      newOption.innerText = `${project.name}`;
      projectSelectorOptions.appendChild(newOption);
    }
  };

  const setProjectModalMode = (mode) => {
    if (mode === "new") {
      document.querySelector(".project-dialog .dialog-title").innerText =
        "New Project";
      document.querySelector(".submit-project-btn").innerText =
        "Create Project";
    } else {
      document.querySelector(".project-dialog .dialog-title").innerText =
        "Rename Project";
      document.querySelector(".submit-project-btn").innerText =
        "Update Project";
    }
  };

  const loadProjectForm = (project) => {
    document.querySelector("#project-key").value = project.name;
    document.querySelector("#project-name").value = project.name;
  };

  const setTaskModalMode = (mode) => {
    if (mode === "new") {
      document.querySelector(".task-dialog .dialog-title").innerText =
        "New Task";
      document.querySelector(".submit-task-btn").innerText = "Add Task";
    } else {
      document.querySelector(".task-dialog .dialog-title").innerText =
        "Edit Task";
      document.querySelector(".submit-task-btn").innerText = "Update Task";
    }
  };

  const loadTaskForm = (task) => {
    document.querySelector("#task-key").value = task.title; // temporary solution
    document.querySelector("#task-title").value = task.title;
    document.querySelector("#task-description").value = task.description;

    if (task.dueDate)
      document.querySelector("#task-due-date").value = task.dueDate;

    if (task.priority != "")
      document.querySelector(`#${task.priority}`).checked = true;

    document.querySelector(`option[value=${task.project.name}`).selected = true;
  };

  const initializeDisplay = () => {
    displayProjectsList();
    updateProjectSelectorOptions();
    updateCounters();
    showPage(ALL_MODE);
  };

  const addEventListeners = () => {
    document
      .querySelector(".left-panel .all-tasks")
      .addEventListener("click", (e) => {
        setActiveTab(e.target);
        showPage(ALL_MODE);
      });

    document
      .querySelector(".left-panel .today-tasks")
      .addEventListener("click", (e) => {
        setActiveTab(e.target);
        showPage(TODAY_MODE);
      });

    document
      .querySelector(".left-panel .upcoming-tasks")
      .addEventListener("click", (e) => {
        setActiveTab(e.target);
        showPage(UPCOMING_MODE);
      });

    document
      .querySelector(".left-panel .completed-tasks")
      .addEventListener("click", (e) => {
        setActiveTab(e.target);
        showPage(COMPLETED_MODE);
      });

    document
      .querySelector(".left-panel .expired-tasks")
      .addEventListener("click", (e) => {
        setActiveTab(e.target);
        showPage(EXPIRED_MODE);
      });

    document.querySelector(".new-project-btn").addEventListener("click", () => {
      setProjectModalMode("new");
      document.querySelector(".project-dialog").showModal();
    });

    const projectForm = document.querySelector(".project-dialog form");
    projectForm.addEventListener("submit", () => {
      const projectKey = document.querySelector("#project-key").value;
      const projectName = document.querySelector("#project-name").value;

      let project;

      if (projectKey !== "") {
        project = appController.getProjectByName(projectKey);
        project.rename(projectName);
      } else {
        project = appController.addNewProject(projectName);
      }

      updateProjectSelectorOptions();
      displayProjectsList();

      if (viewMode === PROJECT_MODE && activeProject === project) {
        updateContentTitle();
        setProjectSelectorDefault(project);
      } else {
        showPage(PROJECT_MODE, project);
      }

      setActiveTab(
        document.querySelector(`.project[data-name='${project.name}'`)
      );
      projectForm.reset();
    });

    document.querySelector(".new-task-btn").addEventListener("click", () => {
      setTaskModalMode("new");
      document.querySelector(".task-dialog").showModal();
    });

    document
      .querySelector("#selectSort")
      .addEventListener("change", () => renderContent());

    const taskForm = document.querySelector(".task-dialog form");
    taskForm.addEventListener("submit", () => {
      const taskKey = document.querySelector("#task-key").value;
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

      if (taskKey !== "") {
        // todo
        if (taskToEdit.project.name === projectSelector) {
          taskToEdit.update(title, description, dueDate, priority);
        } else {
          taskToEdit.project.deleteTask(taskToEdit);
          appController
            .getProjectByName(projectSelector)
            .addNewTask(title, description, dueDate, priority);
        }
      } else {
        appController
          .getProjectByName(projectSelector)
          .addNewTask(title, description, dueDate, priority);
      }

      renderContent();
      updateCounters();
      taskForm.reset();
    });

    document.querySelectorAll(".close-btn").forEach((btn) =>
      btn.addEventListener("click", (event) => {
        event.target.offsetParent.getElementsByTagName("form")[0].reset(); // event.target.offsetParent refers to dialog (new-project-dialog or new-task-dialog)
        event.target.offsetParent.close();
      })
    );
  };

  addEventListeners();

  return { initializeDisplay };
})();
