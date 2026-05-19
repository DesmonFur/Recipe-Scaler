export function calculateScaledAmount(
  baseAmount: number,
  baseServings: number,
  currentServings: number,
): number {
  const amountPerServing = baseAmount / baseServings;

  return amountPerServing * currentServings;
}
