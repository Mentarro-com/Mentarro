import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/pages/footer"
import Header from "./pages/header";
import ScrollUp from "./pages/scrollUp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentarro",
  description: "Consultancy and application Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ScrollUp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
