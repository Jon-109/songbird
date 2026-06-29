import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mockingbird Hill Neighborhood Association",
  description: "Welcome to the Mockingbird Hill Neighborhood Association. Stay connected with community events, meetings, and news.",
  openGraph: {
    title: "Mockingbird Hill Neighborhood Association",
    description: "Welcome to the Mockingbird Hill Neighborhood Association. Stay connected with community events, meetings, and news.",
    images: [{ url: "/logo.svg" }],
  },
  twitter: {
    card: "summary",
    title: "Mockingbird Hill Neighborhood Association",
    description: "Welcome to the Mockingbird Hill Neighborhood Association. Stay connected with community events, meetings, and news.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
