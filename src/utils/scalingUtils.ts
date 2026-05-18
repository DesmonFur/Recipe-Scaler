export function calculateScaledAmount(
  baseAmount: number,
  baseServings: number,
  currentServings: number,
): number {
  let amountPerServing = baseAmount / baseServings;

  return amountPerServing * currentServings;
}
