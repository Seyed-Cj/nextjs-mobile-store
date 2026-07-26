/**
 * Converts English digits (0-9) in a string or number to Persian digits (۰-۹).
 */
export function toPersianDigits(input: number | string): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/[0-9]/g, (char) => persianDigits[Number(char)]);
}

/**
 * Formats a number as a localized Persian currency price string.
 * Example: formatPersianPrice(25000000) => "از ۲۵,۰۰۰,۰۰۰ تومان"
 */
export function formatPersianPrice(
  amount: number,
  currency: string = "تومان",
  prefix: string = "از"
): string {
  const formattedWithCommas = amount.toLocaleString("en-US");
  const persianFormatted = toPersianDigits(formattedWithCommas);
  
  if (prefix) {
    return `${prefix} ${persianFormatted} ${currency}`;
  }
  return `${persianFormatted} ${currency}`;
}
