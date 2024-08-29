import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
<<<<<<< Updated upstream

=======
import {ClerkProvider} from '@clerk/nextjs';
import React from "react";
import Header from "../components/header";
>>>>>>> Stashed changes
const roboto = Roboto({weight: '400',  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses, create your budget and manage your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
<<<<<<< Updated upstream
      <body className={roboto.className}>{children}</body>
=======
      <body className={roboto.className}>
        <Header/>
        <main className="container">
        {children}
        </main>
        
        
        </body>
>>>>>>> Stashed changes
    </html>
    </ClerkProvider>
  );
}
