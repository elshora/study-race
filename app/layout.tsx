import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// app/Layout.tsx
export const metadata: Metadata = {
  title: "Study Race",
  description: "Study Race Project under development",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/hat.svg", // Path to light mode favicon
        href: "/hat.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/hat.svg", // Path to dark mode favicon
        href: "/hat.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
