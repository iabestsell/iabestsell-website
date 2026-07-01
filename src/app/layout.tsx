import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IA Bestsell Technologies | Engineering Better Businesses",
  description:
    "Enterprise cloud infrastructure, cybersecurity, DevOps, custom software, AI automation and managed IT services. Helping organisations modernise, secure and scale.",
  keywords: [
    "cloud solutions",
    "cybersecurity",
    "DevOps",
    "DevSecOps",
    "custom software",
    "AI automation",
    "managed IT services",
    "Microsoft solutions",
    "cloud migration",
    "infrastructure as code",
  ],
  openGraph: {
    title: "IA Bestsell Technologies | Engineering Better Businesses",
    description:
      "Enterprise cloud infrastructure, cybersecurity, DevOps, custom software, AI automation and managed IT services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white dark:bg-navy">{children}</body>
    </html>
  );
}
