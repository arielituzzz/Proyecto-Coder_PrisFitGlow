//************************ENTRETENIMIENTO****************************/
import { navBarAux } from "../components/navBarAux.js";

const bodyTraining = document.getElementById("body-training");
const headerTraining = document.getElementById("header-training");
const mainTraining = document.getElementById("main-training");
headerTraining.appendChild(navBarAux);
bodyTraining.appendChild(headerTraining);
bodyTraining.appendChild(mainTraining);
//*******************************************************************/
