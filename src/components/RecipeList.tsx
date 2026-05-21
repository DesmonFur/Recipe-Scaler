import type { Recipe } from "../types";
import { RecipeCard } from "./RecipeCard";
type RecipeListProps = {
  recipes: Recipe[];
  onDelete: (recipeId: Recipe["id"]) => void;
};

export function RecipeList({ recipes, onDelete }: RecipeListProps) {
  return (
    <div className="grid  grid-cols-[repeat(auto-fit,minmax(280px,1fr))] lg:grid-cols-3 gap-4 mt-12 min-h-56 md:max-w-7xl mx-auto mb-5 p-6">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))
      ) : (
        <p>No recipes added yet. Add your first recipe above. </p>
      )}
    </div>
  );
}
