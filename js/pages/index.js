import { navBar } from "../components/navBar.js";
import { presentation } from "../components/presentationIndex.js";

//************************INDEX***************************************/
const body = document.getElementById("body");
body.classList.add("body");
const header = document.getElementById("header");
const main = document.getElementById("main");
main.classList.add("main");
header.appendChild(navBar);
main.appendChild(presentation);
//*******************************************************************/
