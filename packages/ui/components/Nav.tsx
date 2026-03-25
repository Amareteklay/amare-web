import React from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface NavProps {
  links?: NavLink[];
}

export function Nav({ links = [] }: NavProps) {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
