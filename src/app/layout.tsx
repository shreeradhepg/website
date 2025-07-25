import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shree Radhe",
  description: "Shree Radhe Boys And Girls PG Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="customScrollBar  overflow-x-hidden w-screen">
      <body className={inter.className + " bg-background"}>
        <Navbar />
        <div className="flex sm:mt-32 mt-32">{children}</div>
      </body>
    </html>
  );
}
