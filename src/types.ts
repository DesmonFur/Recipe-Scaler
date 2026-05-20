export type Ingredient = {
  id: string;
  name: string;
  amount: number;
  unit: string;
};

export type Recipe = {
  id: string;
  name: string;
  imageUrl?: string;
  baseServings: number;
  ingredients: Ingredient[];
};
