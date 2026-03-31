import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Montserrat_Alternates, Pacifico, Poiret_One, Silkscreen } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  variable: '--font-montserrat',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
})

const poiret = Poiret_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poiret',
})

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-silkscreen',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShortLy",
  description: "url shortener",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${pacifico.variable} ${poiret.variable} ${silkscreen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Navbar/>
      {children}</body>
    </html>
  );
}
