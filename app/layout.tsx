import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { keywords } from "@/lib/constants";
import type { Metadata } from "next";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Adjust based on your design
  variable: "--font-plus-jakarta-sans", // Optional CSS variable for the font
});

export const metadata: Metadata = {
  title: "Tycoonz Solutions",
  description: "Tycoonz Solutions - Navigating the Future.",
  keywords,
  robots: "follow, index",
  category:
    "Technology, Developer, Blockchain, Web3, AI, Crypto, Fintech, NFT, DeFi, Enterprise",
  openGraph: {
    title: "Tycoonz Solutions",
    description: "Tycoonz Solutions - Navigating the Future.",
    phoneNumbers: "+923174144853",
    emails: "info@tycoonzsolutions.com",
    countryName: "Pakistan",
    images: [],
    type: "website",
    locale: "en_US",
    siteName: "Tycoonz Solutions",
    url: "https://tycoonzsolutions.com",
    alternateLocale: "en_US",
    determiner: "the",
  },
  facebook: {
    appId: "123456789012345", // pending
  },
  manifest: new URL("https://tycoonzsolutions.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <body className="bg-[#000000] ">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          style={{ marginTop: "70px" }}
        />
      </body>
    </html>
  );
}
