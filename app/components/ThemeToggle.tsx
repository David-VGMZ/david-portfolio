"use client";

import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const current: Theme =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(current);
    document.documentElement.setAttribute("data-theme", current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label={
        theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
      }
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
    >
      <span className="relative block h-4 w-4">
        <Sun
          className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
            theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
          aria-hidden="true"
        />
        <Moon
          className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
            theme === "dark" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
