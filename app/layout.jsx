// import type { Metadata } from 'next'
import "./globals.css";
import localfont from "next/font/local";
import { Navbar } from "./components/Navbar";
import { Providers } from "@/components/providers";

const futura = localfont({
  src: [
    {
      path: "../public/fonts/futura/FuturaNewBook-Reg.ttf",
      weight: "700",
    },
  ],
  variable: "--font-futura",
});

export const metadata = {
  title: "Peony",
  description: "Book Events , Restaurant , Services provider....",
  icons: {
    icon: "/assets/icons/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${futura.variable}`}>
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            {/* Navbar is present in the layout because it will be shown on every pages for easier navigation */}
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
