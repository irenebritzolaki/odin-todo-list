import { Project } from "./project";
import {
  isToday,
  isBefore,
  isAfter,
  addDays,
  subDays,
  startOfToday,
} from "date-fns";

export const appController = (() => {
  let projectsList = [];

  const addNewProject = (projectName) => {
    const project = new Project(projectName);
    projectsList.push(project);
    updateLocalStorage();
    return project;
  };

  const deleteProject = (project) => {
    let index = -1;
    for (let i = 0; i < projectsList.length; i++) {
      if (projectsList[i] === project) index = i;
    }
    projectsList.splice(index, 1);
    updateLocalStorage();
  };

  // will use ids later due to name-conflicts
  const getProjectByName = (name) => {
    for (let project of projectsList) {
      if (project.name == name) return project;
    }
  };

  const getAllTasks = () => {
    let allTasks = [];
    for (let project of projectsList) allTasks = allTasks.concat(project.tasks);
    return allTasks;
  };

  const getTodayTasks = () => {
    let todayTasks = [];
    for (let project of projectsList) {
      for (let task of project.tasks) {
        if (isToday(task.dueDate)) todayTasks.push(task);
      }
    }

    return todayTasks;
  };

  const getNext7DaysTasks = () => {
    let tasks = [];
    for (let project of projectsList) {
      for (let task of project.tasks) {
        if (
          isAfter(task.dueDate, subDays(startOfToday(), 1)) &&
          isBefore(task.dueDate, addDays(startOfToday(), 7))
        )
          tasks.push(task);
      }
    }

    return tasks;
  };

  /* ??? when i'll use projectKey and taskKey i may not need these 2 functions, cause i'll use id/name 
  in task.project and not the whole project object. So i'll just update projectsList */
  const loadProjects = (projectsToLoad) => {
    for (let project of projectsToLoad) {
      let newProjectObject = addNewProject(project.name);
      for (let task of project.tasks) {
        newProjectObject.addNewTask(
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task.completed
        );
      }
    }
  };

  const updateLocalStorage = () => {
    let dataJSON = [];
    for (let project of projectsList) {
      let projectJSON = { name: project.name, tasks: [] };
      for (let task of project.tasks) {
        let taskJSON = {
          title: task.title,
          description: task.description,
          dueDate: task.dueDate,
          priority: task.priority,
          completed: task.completed,
        };
        projectJSON.tasks.push(taskJSON);
      }
      dataJSON.push(projectJSON);
    }

    localStorage.setItem("projects", JSON.stringify(dataJSON));
  };

  return {
    projectsList,
    loadProjects,
    addNewProject,
    deleteProject,
    getProjectByName,
    getTodayTasks,
    getAllTasks,
    getNext7DaysTasks,
    updateLocalStorage,
  };
})();
