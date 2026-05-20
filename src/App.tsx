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
  return (
    <>
      <RecipeForm onAdd={handleAdd} />
      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
