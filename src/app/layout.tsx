import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LivingBackdrop } from "@/components/home/LivingBackdrop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sun Piha – Kiinteistönhuoltopalvelut | Helsinki, Espoo, Vantaa",
    template: "%s | Sun Piha",
  },
  description:
    "Monipuolisia kiinteistönhuoltopalveluita vuoden ympäri Helsingissä, Espoossa ja Vantaalla. Takaamme laadukkaan ja ammattitaitoisen palvelukokemuksen.",
  keywords: [
    "kiinteistönhuolto",
    "pihatyöt",
    "lumityöt",
    "nurmikon kunnossapito",
    "Helsinki",
    "Espoo",
    "Vantaa",
    "Sun Piha",
  ],
  openGraph: {
    title: "Sun Piha – Kiinteistönhuoltopalvelut",
    description:
      "Monipuolisia kiinteistönhuoltopalveluita vuoden ympäri Helsingissä, Espoossa ja Vantaalla.",
    locale: "fi_FI",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b100d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={inter.variable}>
      <body className="antialiased">
        <SmoothScrollProvider>
          <LivingBackdrop />
          <ScrollProgress />
          <Navbar />
          <main className="relative pb-24 xl:pb-0">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
