export const metadata = {
  title: "Causalica",
  description: "Causal inference, made practical.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
