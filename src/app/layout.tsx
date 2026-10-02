import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AppShell } from "@/components/AppShell";
import "./globals.css";


export const metadata: Metadata = {
  title: "EWB IUCEE IEEE MLRIT | Student Chapter",

  description:
    "Explore EWB-IUCEE-IEEE MLRIT, a student chapter promoting engineering innovation, sustainability, community engagement, and real-world projects.",

  keywords: [
    "EWB MLRIT",
    "IUCEE MLRIT",
    "IEEE MLRIT",
    "Engineers Without Borders MLRIT",
    "MLRIT Student Chapter",
    "Engineering Projects",
    "Sustainable Engineering",
  ],

  verification: {
    google: "-2xFbxT42jvYfe3u3rKJLQtTj1bO_f0ulYDnGUyIRwg",
  },

  openGraph: {
    title: "EWB IUCEE IEEE MLRIT",
    description:
      "Engineering for impact. Innovating for a sustainable future.",
    url: "https://ewb-iucee-ieee-mlrit.vercel.app/",
    siteName: "EWB IUCEE IEEE MLRIT",
    type: "website",
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <AppShell>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppShell>
      </body>
    </html>
  );
}
