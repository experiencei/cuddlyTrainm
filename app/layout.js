
import "./globals.css";
import localfont from "next/font/local"

const futura = localfont({
  src: [{
    path : "../public/fonts/futura/FuturaNewBook-Reg.ttf",
    weight: "700"
  },
],
variable : "--font-futura",
});


export const metadata = {
  title: "Peony",
  description: "Book Events , Restaurant , Services provider....",
  icons: {
    icon: '/assets/icons/logo.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${futura.variable}`}>{children}</body>
    </html>
  );
}
