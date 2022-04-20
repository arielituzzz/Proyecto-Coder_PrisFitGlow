export const form = document.createElement("div");
const contactForm = document.createElement("form");
form.appendChild(contactForm);


const formLeft = document.createElement("div");
contactForm.appendChild(formLeft);
formLeft.classList.add("form__left")

const formRight = document.createElement("div");
contactForm.appendChild(formRight);
formRight.classList.add("form__right")

const formTitle = document.createElement("h3");
formTitle.textContent = "Contactate con nosotros";
formTitle.classList.add("form__left__title"); /* Esta muy bien la implementacion de la clase!, ahora te falta crearla.
Acordate que las clases del componente van en scss/components y las del layout general de la pagina que estes haciendo en scss/pages */
formLeft.appendChild(formTitle);

const inputName = document.createElement("input");
inputName.type = "text";
inputName.placeholder = "Nombre";
inputName.classList.add("form__left__inputNombre");
formLeft.appendChild(inputName);

const inputMail = document.createElement("input");
inputMail.type = "email";
inputMail.placeholder = "E-mail";
inputMail.classList.add("form__left__inputMail");
formLeft.appendChild(inputMail);

const inputText = document.createElement("input");
inputText.type = "text";
inputText.placeholder = "Mensaje";
inputText.classList.add("form__left__inputMensaje");
formLeft.appendChild(inputText);

const submit = document.createElement("input");
submit.type = "submit";
submit.value = "Enviar";
submit.classList.add("form__left__submit");
formLeft.appendChild(submit);

const formImg = document.createElement("img");
formImg.src = "/images/paul-hanaoka-HbyYFFokvm0-unsplash.png";
formRight.appendChild(formImg);

const facebookLogo = document.createElement("img");
facebookLogo.src = "/images/logos/fb.png";
formRight.appendChild(facebookLogo);

const instagramLogo = document.createElement("img");
instagramLogo.src = "/images/logos/Instagram.png";
formRight.appendChild(instagramLogo);

const mailLogo = document.createElement("img");
mailLogo.src = "/images/logos/Mail.png";
formRight.appendChild(mailLogo);