import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { EmergencyBar } from "@/components/layout/EmergencyBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallButton } from "@/components/layout/MobileCallButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { hospitalSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Thika, Kenya`, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "Mary Help Hospital",
    "Mary Help of the Sick Mission Hospital",
    "hospital in Thika",
    "maternity Thika",
    "Catholic mission hospital Kenya",
    "dialysis Thika",
    "emergency hospital Kiambu",
  ],
  openGraph: { type: "website", locale: "en_KE", siteName: site.name },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f2e48",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Skip to main content
        </a>
        <JsonLd data={hospitalSchema()} />
        <EmergencyBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
