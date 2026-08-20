import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";
import { CartProvider } from "@/lib/cart-context";
import { iranYekan } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "iPhone Shop",
  description: "Premium Apple products store",
};

import { getNavItems } from "@/lib/data/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await getNavItems();

  return (
    <html
      lang="fa"
      className={`${iranYekan.variable} h-full antialiased`}
      dir="rtl"
    >
      <body className="flex min-h-screen flex-col font-sans">
        <CartProvider>
          <Navbar items={navItems} />
          <main className="grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
