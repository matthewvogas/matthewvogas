import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from '@next/font/google';

import "./globals.css";
import { FontAutoCycle } from "./components/font-auto-cycle";

const inter = Inter({
  subsets: ['latin'],
});

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
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href={'./favicon.ico'} />
      </Head>
      <body className={`bg-background dark:bg-background-dark tracking-tight ${inter.className} mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 scroll-hidden`}>
        <FontAutoCycle />
        {children}
      </body>
    </html>
  );
}
