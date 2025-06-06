import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css'

function App() {
    // Estado que armazena as receitas buscadas
    const [recipes, setRecipes] = useState([]);

    // Estado que armazena a receita atualmente selecionada (para mostrar detalhes)
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    // Função que busca as receitas na API, usando o nome digitado
    const searchRecipes = async (query) => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      // Se não encontrar receitas, retorna array vazio
      setRecipes(data.meals || []);
    };

  return (
    <div className="container">
      <h1>Recipes</h1>
      <p className="tip">Type your recipe below or click "search" to view all.</p>

      {/* Componente de busca, passando a função de busca como prop */}
      <SearchBar onSearch={searchRecipes} />

      {/* Se nenhuma receita estiver selecionada, mostra a lista.
        Se houver uma selecionada, mostra os detalhes. */}
      {!selectedRecipe ? (
        <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      ) : (
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App
