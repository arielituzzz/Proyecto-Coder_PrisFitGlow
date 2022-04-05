//************************CONTACTO***********************************/
import { navBarAux } from "../components/navBarAux.js";
import { form } from "../components/formContact.js"; /* aca te agregue la extension .js. Recorda que este tipo de import
requieren que le especifiques la extension del archivo para que no se te rompa el codigo. A medida que hagas cambios chequea
con el inspector del navegador que mensajes te tira, asi te ayuda a entender que podes estar haciendo mal y de paso
practicas la lectura de errores que lamentablemente vas a vivir teniendolos (te lo digo de primera mano jajajaj) */

const bodyContact = document.getElementById("body-contact");
const headerContact = document.getElementById("header-contact");
const mainContact = document.getElementById("main-contact");
headerContact.appendChild(navBarAux);
bodyContact.appendChild(headerContact);
bodyContact.appendChild(mainContact);

/*mainContact.appendChild(form);*/
/* como primera accion te recomiendo que siempre que crees un componente lo exportes desde su archivo,
posteriormente lo importes en su respectivo archivo modelo y le hagas el appendChild como te hice aca a donde lo necesites tener asi ya despues trabajas
tranquilo solamente sobre el componente y vas viendo los cambios que haces */
//*******************************************************************/

/* Te deje comentarios en los archivos que creastes para que los revises tranqui*/

/********* VAS MUY BIEN JULIAN! A SEGUIRLE METIENDO! ***********/
