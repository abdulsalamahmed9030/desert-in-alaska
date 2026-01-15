import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desert in Alaska",
  description: "Desert exploration and adventure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
    rel="stylesheet"
  />
</head>

      <body>{children}</body>
    </html>
  );
}
