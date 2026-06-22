export function formatAmount(value: string, suffix: "000" | "00"): string {
  if (!value || value === "0") return suffix;
  return value + suffix;
}

export function formatWithComma(amount: number): string {
  return amount.toLocaleString("ko-KR");
}
