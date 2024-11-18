"use client";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

const monaSans = localFont({
  src: "./fonts/Mona-Sans.woff2",
  variable: "--font-mona-sans",
  weight: "100 900", // Full range of weights from thin to bold
  style: "normal italic", // Includes both normal and italic styles
  stretch: "75% 125%", // Adjusts width from condensed (75%) to expanded (125%) if supported
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} antialiased`}>
        <SessionProvider>
          <Toaster position="top-right" />
          <Nav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
