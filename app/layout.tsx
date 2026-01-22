import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ONG FILLES+ - Autonomisation des Filles",
  description: "FILLES+ est une ONG béninoise dédiée à l'autonomisation, l'éducation et la protection des filles et jeunes femmes.",
  keywords: ["ONG", "Filles", "Bénin", "Éducation", "Autonomisation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <body
        className="antialiased font-sans bg-slate-50 text-slate-900"
      >
        {children}
      </body>
    </html>
  );
}
