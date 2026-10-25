"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { links } from "./nav-links";
import { site } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px");
    function onChange() {
      if (query.matches) setOpen(false);
    }
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    panel.current?.querySelector<HTMLElement>("a, button")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel.current) return;

      const items = Array.from(
        panel.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
      );
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label="Abrir menú"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            id="menu-movil"
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
            className="fixed inset-0 z-60 overflow-y-auto bg-paper"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display font-bold">Menú</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Navegación móvil">
              <ul className="px-5 pt-4">
                {links.map((link, index) => (
                  <li key={link.href} className="border-b border-line">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4 font-display text-3xl font-bold tracking-tight"
                    >
                      <span className="font-mono text-xs text-muted">
                        0{index + 1}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-5 pt-8">
              <a
                href={site.cv}
                download
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper"
              >
                Descargar CV
              </a>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
