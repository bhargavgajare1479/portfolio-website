import type { Metadata } from "next";
import { ibmPlexSerif } from "@/fonts";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bhargavgajare.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bhargav Gajare | XR, Runtime & Systems Engineer",
    template: "%s | Bhargav Gajare",
  },
  description:
    "Portfolio of Bhargav Gajare — XR, Unity, runtime and systems engineer specializing in low-level performance, spatial computing architectures, and standalone VR optimization.",
  keywords: [
    "Bhargav Gajare",
    "XR Engineer",
    "Unity Developer",
    "Systems Engineer",
    "Spatial Computing",
    "Virtual Reality",
    "C#",
    "Low-Level Systems",
    "Graphics Optimization",
  ],
  authors: [{ name: "Bhargav Gajare" }],
  creator: "Bhargav Gajare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Bhargav Gajare",
    title: "Bhargav Gajare | XR, Runtime & Systems Engineer",
    description:
      "Explore projects, architecture case studies, and engineering achievements across spatial computing and systems programming.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhargav Gajare | XR, Runtime & Systems Engineer",
    description:
      "Explore projects, architecture case studies, and engineering achievements across spatial computing and systems programming.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${ibmPlexSerif.className} min-h-full flex flex-col font-serif`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScroll>
            <Header />
            <div className="flex-1 flex flex-col">
              {children}
            </div>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
