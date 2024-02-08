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
    document.querySelector("dialog").showModal();
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", () => {
    const project = new Project(document.querySelector("#name").value);
    displayProject(project);
    form.reset();
  });
})();
