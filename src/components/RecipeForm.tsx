import { useState } from "react";
import type { Recipe, Ingredient } from "../types";
type RecipeFormProps = {
  onAdd: (recipe: Recipe) => void;
};
const UNITS = ["g", "kg", "ml", "l", "tsp", "tbsp", "cup", "oz", "lb"];

export function RecipeForm({ onAdd }: RecipeFormProps) {
  const [recipeName, setRecipeName] = useState<string>("");
  const [baseServings, setBaseServings] = useState<number>(1);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [ingredientDraft, setIngredientDraft] = useState<Ingredient>({
    id: "",
    name: "",
    amount: 0,
    unit: "",
  });

  const handleAddIngredient = () => {
    if (!ingredientDraft.name.trim() || !ingredientDraft.unit.trim()) {
      alert("please check to make sure name or unit is not empty");
      return;
    }
    if (!ingredientDraft.amount) {
      alert("amount cannot be 0");
      return;
    }
    setIngredients((prev) => {
      return [...prev, { ...ingredientDraft, id: crypto.randomUUID() }];
    });
    setIngredientDraft({
      id: "",
      name: "",
      amount: 0,
      unit: "",
    });
  };

  const createRecipe = () => {
    if (!recipeName.trim()) {
      alert("recipe name cannot be empty");
      return;
    }
    if (ingredients.length === 0) {
      alert("Must add ingredients");
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      name: recipeName,
      baseServings: baseServings,
      ingredients: ingredients,
    });
    setRecipeName("");
    setIngredients([]);
    setBaseServings(1);
  };
  return (
    <div className="bg-slate-800 rounded-2xl p-8 w-1/2  mt-2.5 text-white ">
      <p className="text-3xl font-medium p-2">Recipe Form</p>
      <div className="flex flex-col gap-2 mb-2.5">
        <label className="font-medium" htmlFor="recipeName">
          Recipe Name
        </label>
        <input
          className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-emerald-500"
          id="recipeName"
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 mb-2.5 text-white">
        <label className="font-medium" htmlFor="baseServings">
          Base Servings
        </label>
        <input
          className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-emerald-500"
          id="baseServings"
          type="number"
          value={baseServings}
          onChange={(e) => setBaseServings(e.target.valueAsNumber)}
        />
      </div>
      {/* ingredient form */}
      <p className="text-3xl font-medium p-2">Ingredient Form</p>

      <div className="flex flex-col gap-1 mb-2.5 text-white">
        <label className="font-medium" htmlFor="ingredientName">
          Ingredient Name
        </label>
        <input
          className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-emerald-500"
          id="ingredientName"
          type="text"
          value={ingredientDraft.name}
          onChange={(e) =>
            setIngredientDraft((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
      </div>
      <div className="flex flex-col gap-1 mb-2.5  text-white">
        <label className="font-medium" htmlFor="ingredientAmount">
          Ingredient Amount
        </label>
        <input
          className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-emerald-500"
          id="ingredientAmount"
          type="number"
          value={ingredientDraft.amount}
          onChange={(e) =>
            setIngredientDraft((prev) => {
              return { ...prev, amount: e.target.valueAsNumber };
            })
          }
        />
      </div>
      <div className="flex flex-col gap-1 mb-2.5 text-white ">
        <label className="font-medium" htmlFor="ingredientUnit">
          Ingredient Unit
        </label>
        <select
          className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-600"
          value={ingredientDraft.unit}
          onChange={(e) =>
            setIngredientDraft((prev) => ({ ...prev, unit: e.target.value }))
          }
        >
          <option value="">Select unit</option>
          {UNITS.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <div className="flex  justify-between mt-2.5">
        <button
          className="px-4 py-2 rounded-lg bg-emerald-600  text-white font-medium text-sm hover:bg-emerald-500 transition-colors"
          onClick={handleAddIngredient}
        >
          Add Ingredient
        </button>

        <button
          className="px-4 py-2 rounded-lg bg-emerald-600  text-white font-medium text-sm hover:bg-emerald-500 transition-colors"
          onClick={createRecipe}
        >
          Create Recipe
        </button>
      </div>

      <div className="flex flex-col mt-4">
        <p className="text-x">Current Ingredients:</p>
        <ul className="text-white text-xl">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}: {ingredient.amount}
              {ingredient.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
