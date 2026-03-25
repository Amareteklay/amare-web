export const metadata = {
  title: 'Homo Adapticus',
  description: 'Adaptation in the age of AI.',
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