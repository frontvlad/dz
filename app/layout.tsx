import "./globals.scss";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Blog by Vlad",
  title: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}
