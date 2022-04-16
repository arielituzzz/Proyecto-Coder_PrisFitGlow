export const form = document.createElement("div");
const contactForm = document.createElement("form");
form.appendChild(contactForm);

/*
const formLeft = document.createElement("div");
const formRight = document.createElement("div");
*/

const formTitle = document.createElement("h3");
formTitle.textContent = "Contactate con nosotros";
formTitle.classList.add("form__title"); /* Esta muy bien la implementacion de la clase!, ahora te falta crearla.
Acordate que las clases del componente van en scss/components y las del layout general de la pagina que estes haciendo en scss/pages */
contactForm.appendChild(formTitle);

const inputName = document.createElement("input");
inputName.type = "text";
inputName.placeholder = "Nombre";
inputName.classList.add("input");
contactForm.appendChild(inputName);

const inputMail = document.createElement("input");
inputMail.type = "email";
inputMail.placeholder = "E-mail";
inputMail.classList.add("input");
contactForm.appendChild(inputMail);

const inputText = document.createElement("input");
inputText.type = "text";
inputText.placeholder = "Mensaje";
inputText.classList.add("input");
contactForm.appendChild(inputText);

const submit = document.createElement("input");
submit.type = "submit";
submit.value = "Enviar";
submit.classList.add("btn");
contactForm.appendChild(submit);

const formImg = document.createElement("img");
formImg.src = "/images/paul-hanaoka-HbyYFFokvm0-unsplash.png";
contactForm.appendChild(formImg);

const facebookLogo = document.createElement("img");
facebookLogo.src = "/images/logos/fb.png";
contactForm.appendChild(facebookLogo);

const instagramLogo = document.createElement("img");
instagramLogo.src = "/images/logos/Instagram.png";
contactForm.appendChild(instagramLogo);

const mailLogo = document.createElement("img");
mailLogo.src = "/images/logos/Mail.png";
contactForm.appendChild(mailLogo);