import type { Metadata, Viewport } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallButton } from "@/components/layout/MobileCallButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { hospitalSchema } from "@/lib/schema";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans", display: "swap", weight: ["400", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", display: "swap", weight: ["500", "600", "700"] });

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
  themeColor: "#0b6fc2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${sourceSans.variable} ${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Skip to main content
        </a>
        <JsonLd data={hospitalSchema()} />
        <TopBar />
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
