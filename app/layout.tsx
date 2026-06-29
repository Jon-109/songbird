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
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mockingbird Hill Neighborhood Association",
    description: "Welcome to the Mockingbird Hill Neighborhood Association. Stay connected with community events, meetings, and news.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mockingbird Hill Neighborhood Association",
    description: "Welcome to the Mockingbird Hill Neighborhood Association. Stay connected with community events, meetings, and news.",
    images: ["/opengraph-image"],
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
