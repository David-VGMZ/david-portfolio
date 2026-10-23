import type { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  id,
  titulo,
  children,
  className = "",
}: {
  id: string;
  titulo: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-zinc-200 py-24 dark:border-zinc-800 ${className}`}
    >
      <Container>
        <h2 className="reveal text-2xl font-semibold tracking-tight sm:text-3xl">
          {titulo}
        </h2>
        <div className="reveal mt-8">{children}</div>
      </Container>
    </section>
  );
}
