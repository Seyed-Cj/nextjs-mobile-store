import localFont from "next/font/local";

export const iranYekan = localFont({
  src: [
    {
      path: "../app/fonts/iranyekanwebmedium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/iranyekanwebmedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/iranyekanwebbold.woff",
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
