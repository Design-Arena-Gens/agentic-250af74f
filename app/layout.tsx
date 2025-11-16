import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gen Z Statue of Liberty",
  description: "A playful Gen Z reimagining of Lady Liberty with a neon crown."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
