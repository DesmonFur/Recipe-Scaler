import { useState } from "react";
import { RecipeForm } from "./components/RecipeForm";
import { RecipeList } from "./components/RecipeList";
import "./App.css";
import type { Recipe } from "./types";
function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleAdd = (newRecipe: Recipe) => {
    setRecipes((prev) => {
      return [...prev, newRecipe];
    });
  };
  return (
    <>
      <RecipeForm onAdd={handleAdd} />
      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
