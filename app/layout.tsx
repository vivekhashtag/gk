import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurukrupa Shravayantra Kendra - Software Development & IT Solutions Mumbai",
  description: "Leading software development company in Mumbai offering web development, mobile apps, and cloud solutions. End-to-end digital transformation services.",
  keywords: ["software development Mumbai", "web development", "mobile apps", "IT services", "cloud solutions"],
  authors: [{ name: "Gurukrupa Shravayantra Kendra" }],
  openGraph: {
    title: "Gurukrupa Shravayantra Kendra",
    description: "Transform your business with innovative software solutions",
    url: "https://gurukrupask.com",
    siteName: "Gurukrupa Shravayantra Kendra",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gurukrupa Shravayantra Kendra",
              "description": "Software Development Company",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": "+918779017795",
              "email": "sales.gurukrupask@gmail.com"
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
