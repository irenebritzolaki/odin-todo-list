export const projectsController = (function () {
  class Project {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }

    addNewTask(task) {
      this.tasks.push(task);
    }
  }

  let projectsList = [];

  const createNewProject = (projectName) => {
    const project = new Project(projectName);
    projectsList.push(project);
  };

  return { projectsList, createNewProject };
})();
