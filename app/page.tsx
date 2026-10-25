import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import Proyects from "./components/sections/Proyects";
import Contact from "./components/sections/Contact";
import { url } from "inspector";

const siteUrl = process.env.SITE_URL ?? "https://davidvillagomez.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Villagomez",
  jobTitle: "Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack especializado en negocios digitales con perfil híbrido en desarrollo de software, mantenimiento de hardware y producción multimedia.",
  url: siteUrl,
  email: "villagomezf12@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Morelia",
    addressRegion: "Michoacán",
    addressCountry: "MX",
  },
  sameAs: [
    "https://github.com/David-VGMZ",
    "https://www.linkedin.com/in/david-villagomez-carranza-5165b12b2/",
  ],
  knowsAbout: ["Next.js", "React", "Node.js", "TypeScript", "Firebase"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <AboutMe />
      <Proyects />
      <Contact />
    </>
  );
}
