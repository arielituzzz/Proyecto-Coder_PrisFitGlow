const URL_CATEGORIES = "js/db/categories.json";
const pngLogo = "../../images/logo.png";
const linkHome = "../../index.html";
export const navBar = document.createElement("div");
navBar.classList.add("navBar");

const divLogo = document.createElement("div");
const divCategories = document.createElement("div");
divCategories.classList.add("navBar__categories");
const linkLogo = document.createElement("a");
const imgLogo = document.createElement("img");
linkLogo.setAttribute("href", linkHome);
imgLogo.setAttribute("src", pngLogo);
linkLogo.appendChild(imgLogo);
divLogo.appendChild(linkLogo);

navBar.appendChild(divLogo);
navBar.appendChild(divCategories);

fetch(URL_CATEGORIES)
  .then((res) => res.json())
  .then((data) => {
    for (const categorie of data) {
      const divCategorie = document.createElement("div");
      const linkCategorie = document.createElement("a");
      linkCategorie.setAttribute("href", categorie.link);
      linkCategorie.classList.add("navBar__categories__categorie__link");
      linkCategorie.textContent = categorie.name;
      divCategorie.appendChild(linkCategorie);
      divCategories.appendChild(divCategorie);
    }
  });
