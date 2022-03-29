const URL_CATEGORIES = "/js/db/categories.json";

export const navBarAux = document.createElement("div");
navBarAux.classList.add("navBarAux");
const pngLogo = "../../images/logo.png";
const linkHome = "../../index.html";
const divLogoAux = document.createElement("div");
const divCategoriesAux = document.createElement("div");
divCategoriesAux.classList.add("navBar__categories");
const linkLogoAux = document.createElement("a");
const imgLogoAux = document.createElement("img");
linkLogoAux.setAttribute("href", linkHome);
imgLogoAux.setAttribute("src", pngLogo);
linkLogoAux.appendChild(imgLogoAux);
divLogoAux.appendChild(linkLogoAux);

navBarAux.appendChild(divLogoAux);
navBarAux.appendChild(divCategoriesAux);

fetch(URL_CATEGORIES)
  .then((res) => res.json())
  .then((data) => {
    for (const categorie of data) {
      const divCategorieAux = document.createElement("div");
      const linkCategorieAux = document.createElement("a");
      linkCategorieAux.setAttribute("href", categorie.link);
      linkCategorieAux.classList.add(
        "navBarAux__categories__categorie__linkAux"
      );
      linkCategorieAux.textContent = categorie.name;
      divCategorieAux.appendChild(linkCategorieAux);
      divCategoriesAux.appendChild(divCategorieAux);
    }
  });
