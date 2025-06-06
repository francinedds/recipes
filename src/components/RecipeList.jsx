import React from 'react';

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="recipe-card"
          onClick={() => onSelect(recipe)} // Seleciona a receita ao clicar
        >
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;