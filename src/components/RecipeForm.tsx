import { useState } from "react";
import type { Recipe, Ingredient } from "../types";
import { FormField } from "./FormField";
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
  const [error, setError] = useState<string[]>([]);

  const handleAddIngredient = () => {
    setError([]);
    const newErrors: string[] = [];

    if (!ingredientDraft.name.trim()) {
      newErrors.push("Please fill out ingredient name");
    }
    if (ingredientDraft.amount <= 0)
      newErrors.push("Amount must be greater than 0");
    if (!ingredientDraft.unit.trim()) {
      newErrors.push("Unit cannot be empty");
    }

    if (newErrors.length > 0) {
      setError(newErrors);
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
    setError([]);
    const newErrors: string[] = [];

    if (!recipeName.trim()) {
      newErrors.push("recipe name cannot be empty");
    }
    if (ingredients.length === 0) {
      newErrors.push("Must add ingredients");
    }
    if (baseServings <= 0) {
      newErrors.push("Base servings must be greater than 0");
    }

    if (newErrors.length > 0) {
      setError(newErrors);
      return;
    }
    onAdd({
      id: crypto.randomUUID(),
      imageUrl: "",
      name: recipeName,
      baseServings: baseServings,
      ingredients: ingredients,
    });
    setRecipeName("");
    setIngredients([]);
    setBaseServings(1);
  };
  return (
    <div className="bg-slate-800 rounded-2xl p-8 w-1/2  mt-2.5 text-white mx-auto ">
      {error.length !== 0 && (
        <>
          <p className="text-red-500 font-medium">Please fix these errors:</p>
          {error.map((err) => (
            <p key={err} className="text-red-400 text-sm mt-1">
              {err}
            </p>
          ))}
        </>
      )}

      <h2 className="text-3xl font-medium p-2">Recipe Form</h2>

      <FormField
        label="Recipe Name"
        labelId="recipeName"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      ></FormField>
      <FormField
        label="Base Servings"
        labelId="baseServings"
        type="number"
        value={baseServings}
        onChange={(e) => setBaseServings(e.target.valueAsNumber || 0)}
      ></FormField>

      {/* ingredient form */}
      <h3 className="text-3xl font-medium p-2">Ingredient Form</h3>

      <FormField
        label="Ingredient Name"
        labelId="ingredientName"
        type="text"
        value={ingredientDraft.name}
        onChange={(e) =>
          setIngredientDraft((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      ></FormField>

      <FormField
        label="Ingredient Amount"
        labelId="ingredientAmount"
        type="number"
        value={ingredientDraft.amount}
        onChange={(e) =>
          setIngredientDraft((prev) => ({
            ...prev,
            amount: e.target.valueAsNumber || 0,
          }))
        }
      ></FormField>

      <div className="flex flex-col gap-1 mb-2.5 text-white ">
        <label className="font-medium" htmlFor="ingredientUnit">
          Ingredient Unit
        </label>
        <select
          id="ingredientUnit"
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
