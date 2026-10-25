import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

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

const themeScript = `(function(){try{document.documentElement.classList.add("js");var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-accent-link"
        ></a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
