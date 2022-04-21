export const CardsRecipe = document.createElement("div");
CardsRecipe.classList.add("cardsRecipe");

const URL_RECIPES = "../js/db/recipes.json";

fetch(URL_RECIPES)
  .then((res) => res.json())
  .then((data) => {
    for (const recipe of data) {
      const cardRecipe = document.createElement("div");
      cardRecipe.classList.add("cardsRecipe__card");
      const cardRecipeContent = document.createElement("div");
      cardRecipeContent.classList.add("cardsRecipe__card__content");
      cardRecipeContent.style.backgroundImage = `url(${recipe.img})`;
      cardRecipeContent.addEventListener("mouseover", () => {
        cardRecipeContent.style.background = "white";
        ingredientsTitle.textContent = "Ingredientes";
        ingredientsContent.textContent = recipe.ingredients;
        preparationTitle.textContent = "Preparacion";
        preparationContent.textContent = recipe.preparation;
      });
      cardRecipeContent.addEventListener("mouseleave", () => {
        cardRecipeContent.style.backgroundImage = `url(${recipe.img})`;
        ingredientsTitle.textContent = "";
        ingredientsContent.textContent = "";
        preparationTitle.textContent = "";
        preparationContent.textContent = "";
      });
      const cardRecipeTitle = document.createElement("div");
      cardRecipeTitle.textContent = recipe.title;
      cardRecipeTitle.classList.add("cardsRecipe__card__title");
      const divIngredients = document.createElement("div");
      divIngredients.classList.add("cardsRecipe__card__content__ingredients");
      const ingredientsTitle = document.createElement("div");
      ingredientsTitle.classList.add(
        "cardsRecipe__card__content__ingredients__title"
      );
      const ingredientsContent = document.createElement("div");
      ingredientsContent.classList.add(
        "cardsRecipe__card__content__ingredients__content"
      );
      const divPreparation = document.createElement("div");
      divPreparation.classList.add("cardsRecipe__card__content__preparation");
      const preparationTitle = document.createElement("div");
      preparationTitle.classList.add(
        "cardsRecipe__card__content__preparation__title"
      );
      const preparationContent = document.createElement("div");
      preparationContent.classList.add(
        "cardsRecipe__card__content__preparation__content"
      );
      divIngredients.appendChild(ingredientsTitle);
      divIngredients.appendChild(ingredientsContent);
      divPreparation.appendChild(preparationTitle);
      divPreparation.appendChild(preparationContent);
      cardRecipeContent.appendChild(divIngredients);
      cardRecipeContent.appendChild(divPreparation);
      cardRecipe.appendChild(cardRecipeContent);
      cardRecipe.appendChild(cardRecipeTitle);
      CardsRecipe.appendChild(cardRecipe);
    }
  });
