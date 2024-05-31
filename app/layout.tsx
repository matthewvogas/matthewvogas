import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import CustomCursorShadow  from './components/customCursor/CustomCursor'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Vogas",
  description: "Matthew Vogas Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#03040f] ${inter.className} mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 scroll-hidden`}>
        <CustomCursorShadow />
        {children}
      </body>
    </html>
  );
}
