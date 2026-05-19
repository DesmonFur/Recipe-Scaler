import type { Recipe } from "../types";
import { useState } from "react";
import { calculateScaledAmount } from "../utils/scalingUtils";
import { formatNumber } from "../utils/formatNumber";
type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [currentServings, setCurrentServings] = useState(recipe.baseServings);
  const incrementServings = (): void => {
    setCurrentServings((prev) => prev + 1);
  };

  const decrementServings = (): void => {
    setCurrentServings((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return 1;
    });
  };

  const scaledIngredientAmount = (ingredientAmount: number): string => {
    return formatNumber(
      calculateScaledAmount(
        ingredientAmount,
        recipe.baseServings,
        currentServings,
      ),
    );
  };
  return (
    <div>
      <h3>{recipe.name}</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name}: {scaledIngredientAmount(ingredient.amount)}{" "}
            {ingredient.unit}
          </li>
        ))}
      </ul>
      <p>Base servings: {recipe.baseServings}</p>
      <p>Current servings: {currentServings}</p>
      <button onClick={decrementServings} disabled={currentServings <= 1}>
        -
      </button>
      <button onClick={incrementServings}>+</button>
    </div>
  );
}
