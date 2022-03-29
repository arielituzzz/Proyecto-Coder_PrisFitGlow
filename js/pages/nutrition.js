//************************NUTRICION****************************/
import { navBarAux } from "../components/navBarAux.js";

const bodyNutrition = document.getElementById("body-nutrition");
const headerNutrition = document.getElementById("header-nutrition");
const mainNutrition = document.getElementById("main-nutrition");
headerNutrition.appendChild(navBarAux);
bodyNutrition.appendChild(headerNutrition);
bodyNutrition.appendChild(mainNutrition);
//*******************************************************************/
