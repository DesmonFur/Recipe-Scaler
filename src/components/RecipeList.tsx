import type { Recipe } from "../types";
import { RecipeCard } from "./RecipeCard";
type RecipeListProps = {
  recipes: Recipe[];
};

export function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className="">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No recipes added yet. Add your first recipe above. </p>
      )}
    </div>
  );
}
