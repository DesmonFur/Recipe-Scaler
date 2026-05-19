const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function formatNumber(number: number): string {
  return formatter.format(number);
}
