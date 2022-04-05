// ************ Revisar porfa!! *************

export const form = document.createElement("div");
const contactForm = document.createElement("form");
const formTitle =
  document.createElement(
    "p"
  ); /*Esta etiqueta podria ser un <h3> o <legend> por ej,
pero no <p> porque te estas refiriendo a un titulo y tiene su debida jerarquia sobre todo para el SEO*/
formTitle.textContent = "Contactate con nosotros";
formTitle.classList.add(
  "form__title"
); /* Esta muy bien la implementacion de la clase!, ahora te falta crearla.
Acordate que las clases del componente van en scss/components y las del layout general de la pagina que estes haciendo en scss/pages */

form.appendChild(contactForm);

contactForm.appendChild(formTitle);
