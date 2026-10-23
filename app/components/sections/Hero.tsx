import Container from "../Container";

export default function Hero() {
  return (
    <section id="inicio" className="py-24 sm:py-32">
      <Container>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Desarrollador Fullstack
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          David Villagomez
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Construyo y despliego soluciones tecnológicas accesibles, óptimas y
          escalables.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Disponible para trabajar
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#proyects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-300"
          >
            Contacto
          </a>
        </div>
      </Container>
    </section>
  );
}
