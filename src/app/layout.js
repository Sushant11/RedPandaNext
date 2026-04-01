import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./lib/BackToTop";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Red Panda Finance | Australian Mortgage Brokers",
  description:
    "Helping home buyers and investors navigate their property journey",
  keywords:
    "mortgage brokers Australia, home loans, investment loans, refinance, first home buyers, mortgage advice, property loans, home financing, loan brokers Australia, real estate finance, Red Panda Finance, Australia property market, mortgage solutions, property investment advice",
  openGraph: {
    url: "https://redpandafinance.com.au",
    siteName: "Red Panda Finance",
    images: [
      {
        url: "https://redpandafinance.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Red Panda Finance",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Panda Finance | Australian Mortgage Brokers",
    description:
      "Helping home buyers and investors navigate their property journey.",
    images: ["https://redpandafinance.com.au/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/mainlogo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
        <Header />
        <Analytics />
        <Toaster position="bottom-center" />
        <main>{children}</main>
        <SpeedInsights />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
