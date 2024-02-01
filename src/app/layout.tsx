import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My first nextjs app",
  description: "One emoji a day keeps a doctor away",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex justify-center max-w-screen-md mx-auto h-screen border-x-2 border-black overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
