import './globals.css';
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className="h-full bg-gray-100">
      <body  className="h-full">{children}</body>
    </html>
  )
}
