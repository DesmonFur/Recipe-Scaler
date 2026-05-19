import type { Recipe } from "../types";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name}: {ingredient.amount}
            {""} {ingredient.unit}
          </li>
        ))}
      </ul>
      <p>Base Servings: {recipe.baseServings}</p>
    </div>
  );
}
