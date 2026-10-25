import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./ui/Reveal";

export default function Section({
  id,
  titulo,
  index,
  eyebrow,
  tone = "paper",
  children,
  className = "",
}: {
  id: string;
  titulo: string;
  index?: string;
  eyebrow?: string;
  tone?: "paper" | "surface";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 sm:py-32${
        tone === "surface" ? "bg-surface" : ""
      } ${className}`}
    >
      <Container>
        {(index || eyebrow) && (
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {index && <span>{eyebrow}</span>}
              {index && eyebrow && (
                <span aria-hidden="true" className="h-px w-8 bg-line" />
              )}
              {eyebrow && <span>{eyebrow}</span>}
            </div>
          </Reveal>
        )}
        <Reveal delay={60}>
          <h2 className="mt-4 font-sans text-4xl font-extrabold tracking-[-0.035em] sm:text-6xl">
            {titulo}
          </h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
