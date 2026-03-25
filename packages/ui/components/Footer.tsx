import React from "react";

interface FooterProps {
  children?: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer style={{ marginTop: "var(--space-16)", paddingTop: "var(--space-8)", borderTop: "1px solid var(--color-border)", color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>
      {children ?? <p>© {new Date().getFullYear()}</p>}
    </footer>
  );
}
