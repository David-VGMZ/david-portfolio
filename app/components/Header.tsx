"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import ScrollProgress from "./ui/ScrollProgress";
import { links } from "./nav-links";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md transition-[height] duration-300 ${
        scrolled ? "h-14" : "h-16"
      }`}
    >
      <Container className="h-full">
        <nav
          aria-label="Navegación principal"
          className="flex h-full items-center justify-between gap-4"
        >
          <a
            href="#inicio"
            className="font-display text-base font-bold tracking-tight"
          >
            DV<span className="bg-accent px-1 text-accent-ink">.</span>
          </a>

          <ul className="ml-auto hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`rounded-full px-3 py-2 text-sm transition-colors ${
                    active === link.id
                      ? "bg-ink text-paper"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </nav>
      </Container>

      <ScrollProgress />
    </header>
  );
}
