//************************NUTRICION****************************/
import { navBarAux } from "../components/navBarAux.js";
import { CardsRecipe } from "../components/CardsRecipe.js";

const bodyNutrition = document.getElementById("body-nutrition");
const headerNutrition = document.getElementById("header-nutrition");
const mainNutrition = document.getElementById("main-nutrition");
mainNutrition.classList.add("mainNutrition");
const nutritionTitle = document.createElement("h3");
nutritionTitle.textContent = "Recetas";
nutritionTitle.classList.add("mainNutrition__title");
headerNutrition.appendChild(navBarAux);
bodyNutrition.appendChild(headerNutrition);
bodyNutrition.appendChild(mainNutrition);
mainNutrition.appendChild(nutritionTitle);
mainNutrition.appendChild(CardsRecipe);
//*******************************************************************/
