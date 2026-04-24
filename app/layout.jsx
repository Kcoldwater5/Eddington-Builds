import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://eddingtonbuilds.com"),
  title: {
    default: "Eddington Builds — Reliable Playground Installation Partners",
    template: "%s | Eddington Builds",
  },
  description:
    "Eddington Builds is a trusted commercial playground installation subcontractor serving playground companies, vendors, and project representatives. Safe, efficient, and professionally installed playgrounds.",
  keywords: [
    "commercial playground installation",
    "playground installer",
    "playground subcontractor",
    "school playground construction",
    "community playground installation",
    "safety surfacing",
    "Eddington Builds",
  ],
  authors: [{ name: "Eddington Builds" }],
  openGraph: {
    type: "website",
    title: "Eddington Builds — Reliable Playground Installation Partners",
    description:
      "Trusted commercial playground installation. Safe, efficient, and professionally completed work for playground companies and project representatives.",
    url: "https://eddingtonbuilds.com",
    siteName: "Eddington Builds",
    images: [
      {
        url: "/images/hero/hero-playground.jpg",
        width: 1200,
        height: 630,
        alt: "Completed commercial playground installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eddington Builds — Reliable Playground Installation Partners",
    description:
      "Trusted commercial playground installation subcontractor.",
    images: ["/images/hero/hero-playground.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#0b1a2b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-navy-900">{children}</body>
    </html>
  );
}
