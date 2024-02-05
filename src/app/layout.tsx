import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="flex justify-center max-w-screen-md mx-auto h-full border-x-2 border-black">
            <div>
              <Toaster />
            </div>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
