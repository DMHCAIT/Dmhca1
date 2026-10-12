import type { ReactNode } from "react";

export function ResourceHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="resource-hero">
      <div className="container-home">
        <div className="resource-eyebrow">{eyebrow}</div>
        <h1 className="font-display">{title}</h1>
        {description && <p className="resource-hero-description">{description}</p>}
        {children}
      </div>
    </section>
  );
}
