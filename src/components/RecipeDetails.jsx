import React from 'react';

const RecipeDetails = ({ recipe, onBack }) => {
  // MONTA uma lista de ingredientes (até 20 possíveis campos na API)
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ing) ingredients.push(`${ing} - ${measure}`); // Junta ingrediente e medida ( ing = "Chicken" e measure = "500g") e coloca na array ingredients.
  }

  return (
    <div className="recipe-details">
        <button onClick={onBack}>Back to all recipes</button> {/* Volta para a lista */}
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />

      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li> // Mostra ingrediente e medida // key={idx} é a chave única exigida pelo React para listas (aqui é o índice do item).
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p className="instructions">{recipe.strInstructions}</p> {/* Texto com modo de preparo */}
    </div>
  );
};

export default RecipeDetails;
