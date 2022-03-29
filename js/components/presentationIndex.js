const URL_CATEGORIES = "js/db/categories.json";
export const presentation = document.createElement("div");
const divTextPresentation = document.createElement("div");
const textPresentation = document.createElement("p");
textPresentation.textContent = "Empeza a cambiar tu estilo de vida hoy";
textPresentation.classList.add("presentation__textPresentation");
const linkTraining = document.createElement("a");
linkTraining.classList.add("presentation__linkTraining");
const btnTraining = document.createElement("button");
btnTraining.classList.add("presentation__linkTraining__btnTraining");
btnTraining.textContent = "EMPEZAR";
divTextPresentation.appendChild(textPresentation);

linkTraining.appendChild(btnTraining);
presentation.appendChild(divTextPresentation);
presentation.appendChild(linkTraining);
fetch(URL_CATEGORIES)
  .then((res) => res.json())
  .then((data) => {
    const findHrefTraining = data.find((e) => e.name === "Entrenamientos");
    linkTraining.setAttribute("href", findHrefTraining.link);
  });
