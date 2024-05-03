// import type { Metadata } from 'next'
import "./globals.css";
import localfont from "next/font/local"
import { Navbar } from "./components/Navbar"




const futura = localfont({
  src: [{
    path : "../public/fonts/futura/FuturaNewBook-Reg.ttf",
    weight: "700"
  },
],
variable : "--font-futura",
});


export const metadata = {
  title: 'Peony',
  description: 'Book Events , Restaurant , Services provider....',
  icons: {
    icon: '/assets/icons/logo.svg'
  }
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" >
     <body className={`${futura.variable}`}>
      <main className='relative flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow flex-1'>
        {children}
        </div>
      </main>
    </body> 
    </html>
  )
}
