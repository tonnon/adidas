import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adidas",
  description: "Adidas e-commerce with Nextjs and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <Navbar/>  
        {children}
      </body>
    </html>
  );
}
