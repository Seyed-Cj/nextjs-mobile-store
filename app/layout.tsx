import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { iranYekan } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "iPhone Shop",
  description: "Premium Apple products store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className={`${iranYekan.variable} h-full antialiased`} dir="rtl">
      <body className="font-sans">
        <Navbar />
        <main className="pt-11">{children}</main>
      </body>
    </html>
  );
}

