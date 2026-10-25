"use client";

import { useRef, type ReactNode } from "react";

export default function Magnetic({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function handleMove(event: React.PointerEvent<HTMLSpanElement>) {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.15;
    ref.current.style.transform = `translate(${Math.max(-8, Math.min(8, x))}px, ${Math.max(-8, Math.min(8, y))}px)`;
  }

  function reset() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </span>
  );
}
