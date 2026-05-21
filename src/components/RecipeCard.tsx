import type { Recipe } from "../types";
import { useState } from "react";
import { calculateScaledAmount } from "../utils/scalingUtils";
import { formatNumber } from "../utils/formatNumber";
type RecipeCardProps = {
  recipe: Recipe;
  onDelete: (recipeId: Recipe["id"]) => void;
};

export function RecipeCard({ recipe, onDelete }: RecipeCardProps) {
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
    <div className="flex flex-col  bg-slate-700 text-white gap-5 font-semibold">
      <img
        src={
          recipe.imageUrl
            ? recipe.imageUrl
            : "https://plus.unsplash.com/premium_photo-1719530305924-74a0118c0b7f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
      />
      <h3 className="text-2xl font-bold mt-2">{recipe.name}</h3>

      <h4 className=" px-2 font-bold text-lg text-left ">Ingredients:</h4>
      <ul className="font-semibold text-left px-2 ">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name}: {scaledIngredientAmount(ingredient.amount)}{" "}
            {ingredient.unit}
          </li>
        ))}
      </ul>

      <hr />
      <div className="flex justify-center gap-4">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-md bg-red-600 text-2xl font-extrabold transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          onClick={decrementServings}
          disabled={currentServings <= 1}
        >
          -
        </button>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-600 text-2xl font-extrabold transition hover:bg-emerald-700 cursor-pointer"
          onClick={incrementServings}
        >
          +
        </button>
      </div>
      <div className="flex mb-7 justify-around mt-auto font-bold text-lg ">
        <p className="">Base servings: {recipe.baseServings}</p>

        <p className="font-extrabold text-lg">
          Current servings: {currentServings}
        </p>
      </div>
      <div>
        <button
          className="mx-6 mb-6 rounded-md bg-emerald-600 px-4 py-3 text-base font-extrabold transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          onClick={() => setCurrentServings(recipe.baseServings)}
          disabled={currentServings === recipe.baseServings}
        >
          Reset
        </button>
        <button
          className="mx-6 mb-6 rounded-md bg-red-800 px-4 py-3 text-base font-extrabold transition hover:bg-red-900 cursor-pointer"
          onClick={() => onDelete(recipe.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
