import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/motion/LenisProvider";
import Header from "@/components/layout/Header";
import TelemetryRail from "@/components/layout/TelemetryRail";
import SvgPipelineTrace from "@/components/motion/SvgPipelineTrace";

export const metadata: Metadata = {
  title: "Anik Dash — IT Manager | Cloud & DevOps | Business Technology",
  description:
    "Official portfolio of Anik Dash. IT Manager leading IT operations across 12 outlets, 40 Microsoft 365 licenses, and enterprise ERP & HRMS implementations for ~150 employees at Arabika Cafe. Certified AWS Solutions Architect & Azure Administrator Associate.",
  keywords: [
    "Anik Dash",
    "IT Manager",
    "Cloud & DevOps",
    "AWS Solutions Architect",
    "Azure Administrator",
    "Arabika Cafe",
    "Dhaka Bangladesh",
    "DevOps Engineer",
  ],
  authors: [{ name: "Anik Dash", url: "https://anik-portfolio-five.vercel.app/" }],
  creator: "Anik Dash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anik-portfolio-five.vercel.app/",
    title: "Anik Dash — IT Manager | Cloud & DevOps | Business Technology",
    description:
      "Enterprise IT management meets modern cloud infrastructure. Multi-outlet retail governance, HRMS implementations, Microsoft 365, and AWS/Azure cloud architecture.",
    siteName: "Anik Dash Portfolio",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F3EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@500;700;800&display=swap"
        />
      </head>
      <body className="relative bg-paper-cream text-carbon-text antialiased selection:bg-cloud-blue selection:text-white">
        <LenisProvider>
          {/* Continuous Signature Pipeline Vector */}
          <SvgPipelineTrace />

          {/* Sticky Navigation Header */}
          <Header />

          {/* Right-Side Telemetry Progress Rail */}
          <TelemetryRail />

          {/* Main Application Content */}
          <main className="relative z-20 flex flex-col">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
