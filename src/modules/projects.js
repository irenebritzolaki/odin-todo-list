import { Task } from "./task";
import {
  isToday,
  isBefore,
  isAfter,
  addDays,
  subDays,
  startOfToday,
} from "date-fns";

export const projectsController = (function () {
  class Project {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }

    addNewTask(title, description, dueDate, priority) {
      const task = new Task(title, description, dueDate, priority, this);
      this.tasks.push(task);
    }
  }

  let projectsList = [];

  const addNewProject = (projectName) => {
    const project = new Project(projectName);
    projectsList.push(project);
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

  return {
    projectsList,
    addNewProject,
    getProjectByName,
    getTodayTasks,
    getAllTasks,
    getNext7DaysTasks,
  };
})();
