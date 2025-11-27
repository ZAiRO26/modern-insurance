import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Schema } from "@/components/ui/Schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2d52",
};

export const metadata: Metadata = {
  title: "Morris & Garritano | Insurance & Risk Management",
  description: "Trusted advisory since 1885. Property & Casualty, Employee Benefits, and Personal Insurance tailored to your needs.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased bg-white text-slate-900`}
      >
        <Schema />
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
