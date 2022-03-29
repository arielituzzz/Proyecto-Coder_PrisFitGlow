//************************TIENDA****************************/
import { navBarAux } from "../components/navBarAux.js";

const bodyShop = document.getElementById("body-shop");
const headerShop = document.getElementById("header-shop");
const mainShop = document.getElementById("main-shop");
headerShop.appendChild(navBarAux);
bodyShop.appendChild(headerShop);
bodyShop.appendChild(mainShop);
//*******************************************************************/
