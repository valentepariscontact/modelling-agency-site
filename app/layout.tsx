import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const brandDisplay = Cormorant_Garamond({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// app/layout.tsx

export const metadata = {
  title: "Valenté Models",
  description: "Model Agency",
  icons: {
    icon: "/logo2.svg", // Chemin vers ton logo dans le dossier public
    apple: "/logo2.svg", // Pour l'icône sur l'écran d'accueil iPhone
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${brandDisplay.variable} bg-background text-foreground flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <div className="mx-auto w-full max-w-[1560px] flex-1 px-4 md:px-8 lg:px-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
