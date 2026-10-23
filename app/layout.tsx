import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.SITE_URL ?? "https://davidvillagomez.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Villagomez - Desarrollador Web Full Stack",
    template: "%s - David Villagomez",
  },
  description:
    "Desarrollador Full Stack en Morelia, México. Construyo y despliego aplicaciones web accesibles, óptimas y escalables. Proyectos, experiencia y contacto.",
  keywords: [
    "David Villagomez",
    "desarrollador full stack",
    "desarrollador web",
    "Next.js",
    "React",
    "Node.js",
    "Morelia",
    "México",
  ],
  authors: [{ name: "David Villagomez", url: siteUrl }],
  creator: "David Villagomez",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "David Villagomez",
    title: "David Villagomez - Desarrollador Full Stack",
    description:
      "Construyo y despliego aplicaciones web accesibles, óptimas y escalables",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "David Villagomez - Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Villagomez - Desarrollador Full Stack",
    description:
      "Construyo y despliego aplicaciones web accesibles, óptimas y escalables",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
