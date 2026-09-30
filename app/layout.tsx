import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation/Navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "ROLAC | Rosa's Language Centre",
    template: "%s | ROLAC",
  },
  description:
    "Rosa's Language Centre (ROLAC) connects Ghana and the Francophone world through education, language, mobility, and opportunity.",
  openGraph: {
    type: "website",
    siteName: "ROLAC — Rosa's Language Centre",
    title: "ROLAC | Rosa's Language Centre",
    description:
      "Education, language, mobility, and opportunity across Ghana and Francophone Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROLAC | Rosa's Language Centre",
    description:
      "Education, language, mobility, and opportunity across Ghana and Francophone Africa.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navigation />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
