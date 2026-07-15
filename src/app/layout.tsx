import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://iabestsell.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#081B33" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IA Bestsell Technologies | Engineering Better Businesses",
    template: "%s | IA Bestsell Technologies",
  },
  description:
    "Enterprise cloud infrastructure, cybersecurity, DevOps, DevSecOps, custom software, AI automation and managed IT services. Helping organisations modernise, secure and scale through innovative technology solutions.",
  keywords: [
    "cloud solutions",
    "cybersecurity",
    "DevOps",
    "DevSecOps",
    "custom software development",
    "AI automation",
    "managed IT services",
    "Microsoft 365",
    "Azure",
    "AWS",
    "cloud migration",
    "infrastructure as code",
    "IT consulting UK",
    "technology consulting",
    "cloud security",
    "zero trust",
  ],
  authors: [{ name: "IA Bestsell Technologies" }],
  creator: "IA Bestsell Technologies",
  publisher: "IA Bestsell Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "IA Bestsell Technologies",
    title: "IA Bestsell Technologies | Engineering Better Businesses",
    description:
      "Enterprise cloud infrastructure, cybersecurity, DevOps, custom software, AI automation and managed IT services. Secure by design.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "IA Bestsell Technologies - Engineering Better Businesses",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Bestsell Technologies | Engineering Better Businesses",
    description:
      "Enterprise cloud, cybersecurity, DevOps, custom software & managed IT services. Secure by design.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white dark:bg-navy">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-electric-blue focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IA Bestsell Technologies",
              url: "https://iabestsell.com",
              logo: "https://iabestsell.com/icon.svg",
              description:
                "Enterprise cloud infrastructure, cybersecurity, DevOps, custom software, AI automation and managed IT services.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-7939-653621",
                email: "iskandar@iabestsell.com",
                contactType: "sales",
                areaServed: ["GB", "Africa"],
                availableLanguage: "English",
              },
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                addressLocality: "London",
                addressCountry: "GB",
              },
              serviceType: [
                "Cloud Solutions",
                "Cybersecurity",
                "DevOps",
                "Custom Software Development",
                "AI Automation",
                "Managed IT Services",
                "Microsoft Solutions",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
