import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./lib/BackToTop";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Red Panda Finance | Australain Mortgage Brokers",
  description:
    "Helping home buyers and investors navigate their property journey",
  keywords:
    "mortgage brokers Australia, home loans, investment loans, refinance, first home buyers, mortgage advice, property loans, home financing, loan brokers Australia, real estate finance, Red Panda Finance, Australia property market, mortgage solutions, property investment advice",
  openGraph: {
    url: "https://red-panda-next.vercel.app",
    siteName: "Test-Red Panda Finance",
    images: [
      {
        url: "https://red-panda-next.vercel.app/og-image.png", // update with your image path
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
    images: ["https://red-panda-next.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/mainlogo.png" />
        {/* Font Awesome CDN if using (better to use react-icons) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
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
