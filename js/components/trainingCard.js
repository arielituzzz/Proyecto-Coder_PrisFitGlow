export const training = document.createElement("div");

const cards = document.createElement("div");
training.appendChild(cards);
cards.classList.add("cards");

//Izq
const leftCard = document.createElement("div");
cards.appendChild(leftCard);
leftCard.classList.add("cards__left", "card");

const imgLeftCard = document.createElement("div");
leftCard.appendChild(imgLeftCard);
imgLeftCard.classList.add("cards__left__img");

const h3LeftCard = document.createElement("h3");
h3LeftCard.textContent = "Entrenamientos mensuales";
leftCard.appendChild(h3LeftCard);
h3LeftCard.classList.add("cards__title");


//Medio

const middleCard = document.createElement("div");
cards.appendChild(middleCard);
middleCard.classList.add("cards__middle", "card");

const imgMiddleCard = document.createElement("div");
middleCard.appendChild(imgMiddleCard);
imgMiddleCard.classList.add("cards__middle__img");

const h3MiddleCard = document.createElement("h3");
h3MiddleCard.textContent = "Entrenamientos con plan nutricional";
middleCard.appendChild(h3MiddleCard);
h3MiddleCard.classList.add("cards__title");  


//Der

const rightCard = document.createElement("div");
cards.appendChild(rightCard);
rightCard.classList.add("cards__right", "card");

const imgRightCard = document.createElement("div");
rightCard.appendChild(imgRightCard);
imgRightCard.classList.add("cards__right__img");

const h3RightCard = document.createElement("h3");
h3RightCard.textContent = "Entrenamientos personalizados";
rightCard.appendChild(h3RightCard);
h3RightCard.classList.add("cards__title");  