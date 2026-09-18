import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garvit — Data Science | ML | Builder",
  description:
    "Garvit — Data Science student building with Python, ML, data and code.",
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