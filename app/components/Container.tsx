import type { ReactNode } from "react";

export default function Container({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`max-w-5xl mx-auto w-full px-6 ${className}`}>
            {children}
        </div>
    );
}