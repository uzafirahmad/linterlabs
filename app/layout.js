import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linter Labs",
  description: "Linter Labs is a software solutions company offering PCB design, software development, app development, and DevOps solutions tailored to your business needs.",
  keywords: "Linter Labs, software solutions, PCB design, app development, DevOps solutions, custom software, embedded systems, full-stack development, software engineering, technology services",
  alternates: {
    canonical: "https://linterlabs.com", // Replace with your actual domain
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
  language: "en",
  author: "Linter Labs Team",
  publisher: "Linter Labs Inc.",
  applicationName: "Linter Labs",
  twitter: {
    card: 'summary_large_image',
    title: 'Linter Labs',
    description: "Linter Labs is a software solutions company offering PCB design, software development, app development, and DevOps solutions tailored to your business needs.",
    images: [
      {
        url: 'https://linterlabs.com/seo_banner.png', // Replace with your banner
        alt: 'Linter Labs SEO Banner',
        width: 1200,
        height: 1200,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  openGraph: {
    title: 'Linter Labs',
    description: "Linter Labs is a software solutions company offering PCB design, software development, app development, and DevOps solutions tailored to your business needs.",
    url: 'https://linterlabs.com', // Replace with your actual domain
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://linterlabs.com/seo_banner.png', // Replace with your banner
        alt: 'Linter Labs SEO Banner',
        width: 1200,
        height: 1200,
      }
    ],
    site_name: 'Linter Labs',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="rgb(54,98,227)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={4}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="none"
            zIndex={1600}
            showAtBottom={false}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
