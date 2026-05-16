import type { Metadata } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingFlow from "@/components/booking/BookingFlow";
import FilmGrain from "@/components/motion/FilmGrain";
import Vignette from "@/components/motion/Vignette";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s · ${siteConfig.company.fullName}`,
  },
  description: siteConfig.seo.description,
  keywords: [
    "salon",
    "spa",
    "hair styling",
    "nail care",
    "massage therapy",
    "facials",
    "waxing",
    siteConfig.company.fullName,
  ],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.fullName,
    locale: siteConfig.seo.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    site: siteConfig.seo.twitter,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <FilmGrain />
        <Vignette color="#2c2925" />
        <Header />
        <BookingFlow>
          {children}
          <Footer />
        </BookingFlow>
      </body>
    </html>
  );
}
