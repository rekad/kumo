import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KumoRadio",
  description: "This is KumoRadio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
            <Image className="logo" width={96} height={96} src="/img/logo2.jpg" alt="logo" />
            <Link href="/">RADIO</Link>
            <Link href="/about">ABOUT</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
