import Container from "../Container";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import { site } from "@/lib/site";

const stast = [
  { value: "3", label: "sistemas en producción" },
  { value: "3", label: "módulos integrados" },
  { value: "1", label: "PWA desplegada" },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-120 w-120 rounded-full bg-accent/30 blur-[120px]"
      />
      <Container>
        <div className="grid items-center gap-14 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-7">
            <p
              className="hero-in inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
              style={delay(0)}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500/60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-100-500" />
              </span>
              Disponible · Full Stack · Remoto o Morelia
            </p>

            <h1
              className="hero-in mt-6 font-sans text-[clamp(3.25rem,9vw,6.5rem)] font-extrabold leading-[0.92] tracking-tight"
              style={delay(90)}
            >
              David
              <br />
              Villagomez
            </h1>
            <p
              className="hero-in mt-6 max-w-xl text-lg text-muted sm:text-xl"
              style={delay(180)}
            >
              Construyo y despliego soluciones tecnológicas{" "}
              <mark className="bg-accent px-1 text-accent-ink">
                accesibles, óptimas y escalables
              </mark>
              .
            </p>
            <div
              className="hero-in mt-8 flex flex-wrap items-center gap-3"
              style={delay(270)}
            >
              <Magnetic>
                <a
                  href={site.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Descargar CV
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#proyectos"
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold transition-colors hover:border-ink"
                >
                  Ver proyectos
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </Magnetic>
            </div>
            <dl
              className="hero-in mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6"
              style={delay(360)}
            >
              {stast.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-bold tracking-tight">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-full w-full rounded-4xl bg-accent"
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-line bg-surface">
              <Image
                src="/retrato/david.webp"
                alt="David Villagomez, desarrollador full stack"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover grayscale transition duration-500 hover:grayscale-0"
                preload
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
