import { RecipeForm } from "./components/RecipeForm";
import { RecipeList } from "./components/RecipeList";
import "./App.css";
import type { Recipe } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [recipes, setRecipes] = useLocalStorage<Recipe[]>("recipes", []);

  const handleAdd = (newRecipe: Recipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };
  const handleDelete = (recipeId: Recipe["id"]) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== recipeId));
  };
  return (
    <>
      <RecipeForm onAdd={handleAdd} />
      <RecipeList recipes={recipes} onDelete={handleDelete} />
    </>
  );
}

export default App;
