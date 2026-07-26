import localFont from "next/font/local";

export const iranYekan = localFont({
  src: [
    {
      path: "../fonts/iranyekanwebmedium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/iranyekanwebmedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/iranyekanwebbold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iran-yekan",
  display: "swap",
});

export const fonts = {
  iranYekan,
} as const;

export type FontName = keyof typeof fonts;

