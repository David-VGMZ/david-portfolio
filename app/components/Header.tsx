import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about-me", label: "Sobre mí" },
  { href: "#proyects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <Container>
        <nav
          aria-label="Navegación principal"
          className="flex h-16 items-center justify-between"
        >
          <a
            href="#inicio"
            className="hidden font-semibold tracking-tight sm:block"
          >
            David Villagomez
          </a>
          <div className="ml-auto flex items-center gap-3 sm:gap-6">
            <ul className="flex items-center gap-3 text-xs text-zinc-600 sm:gap-6 sm:text-sm dark:text-zinc-400">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="whitespace-nowrap transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
