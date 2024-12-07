import "./globals.css";
import { Poppins } from "next/font/google"
import Head from 'next/head';


const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'],})

export const metadata = {
  title: "LUI | Web Development Services",
  description: "Turn your ideas into software services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <head>
   <link rel="icon" href="/Hl.png" type="image/png" sizes="64x64" />
   </head>
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
