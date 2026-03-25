import React from "react";
import "@amare-web/ui/tokens.css";

export const metadata = {
  title: "Amare Teklay",
  description: "Personal site of Amare Teklay",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
