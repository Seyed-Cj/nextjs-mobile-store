export function toPersianDigits(input: number | string): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/[0-9]/g, (char) => persianDigits[Number(char)]);
}

export function formatPersianPrice(
  amount: number,
  currency: string = "تومان",
  prefix: string = "از",
): string {
  const formattedWithCommas = amount.toLocaleString("en-US");
  const persianFormatted = toPersianDigits(formattedWithCommas);

  if (prefix) {
    return `${prefix} ${persianFormatted} ${currency}`;
  }
  return `${persianFormatted} ${currency}`;
}
