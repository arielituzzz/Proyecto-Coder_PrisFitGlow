//************************CONTACTO***********************************/
import { navBarAux } from "../components/navBarAux.js";
import { form } from "../components/formContact";


const bodyContact = document.getElementById("body-contact");
const headerContact = document.getElementById("header-contact");
const mainContact = document.getElementById("main-contact");
headerContact.appendChild(navBarAux);
bodyContact.appendChild(headerContact);
bodyContact.appendChild(mainContact);
//*******************************************************************/
