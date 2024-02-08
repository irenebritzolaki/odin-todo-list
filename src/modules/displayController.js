import { Project } from "./project";

export const displayController = (() => {
  const displayProject = (project) => {
    const projectsList = document.querySelector(".projects-list");
    const listItem = document.createElement("div");
    listItem.innerText = project.name;
    listItem.className = "project";

    projectsList.appendChild(listItem);
  };

  document.querySelector(".new-project-btn").addEventListener("click", () => {
    document.querySelector("dialog").show();
  });

  document
    .querySelector(".create-new-project-btn")
    .addEventListener("click", (e) => {
      e.preventDefault();
      const project = new Project(document.querySelector("#name").value);
      displayProject(project);
      document.querySelector("form").reset();
      document.querySelector("dialog").close();
    });
})();
