import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ovie Khaira | Information Technology",
  description:
    "Portfolio of Ovie Khaira, Information Technology graduate from Universitas Gadjah Mada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}