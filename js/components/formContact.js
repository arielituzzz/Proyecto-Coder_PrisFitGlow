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
formTitle.classList.add("form__left__title"); 
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

const logos = document.createElement("div");
formRight.appendChild(logos);
logos.classList.add("form__right__logos");



const facebook = document.createElement("div");
logos.appendChild(facebook);
facebook.classList.add("form__right__logos__facebook");

const logoFacebook = document.createElement("div");
facebook.appendChild(logoFacebook);
logoFacebook.classList.add("form__right__logos__facebook__icono","iconos");

const textoFacebook = document.createElement("h4");
textoFacebook.textContent = "Facebook";
facebook.appendChild(textoFacebook);
textoFacebook.classList.add("form__right__logos__texto");




const instagram = document.createElement("div");
logos.appendChild(instagram);
instagram.classList.add("form__right__logos__instagram");

const logoInstagram = document.createElement("div");
instagram.appendChild(logoInstagram);
logoInstagram.classList.add("form__right__logos__instagram__icono", "iconos");

const textoInstagram = document.createElement("h4");
textoInstagram.textContent = "Instagram";
instagram.appendChild(textoInstagram);
textoInstagram.classList.add("form__right__logos__texto");


const mail = document.createElement("div");
logos.appendChild(mail);
mail.classList.add("form__right__logos__mail");

const logoMail = document.createElement("div");
mail.appendChild(logoMail);
logoMail.classList.add("form__right__logos__mail__icono", "iconos");

const textoMail = document.createElement("h4");
textoMail.textContent = "Mail";
mail.appendChild(textoMail);
textoMail.classList.add("form__right__logos__texto");
