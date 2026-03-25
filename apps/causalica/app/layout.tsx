import type { Metadata } from 'next'
import { Lora, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora-var',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Causalica — Causal Inference, Made Practical',
  description:
    'A modern hub for learning and applying causal thinking. ' +
    'Textbook, tools, and consulting for researchers and analysts.',
  openGraph: {
    title: 'Causalica',
    description: 'Causal inference, made practical.',
    url: 'https://causalica.com',
    siteName: 'Causalica',
  },
  twitter: {
    card: 'summary',
    creator: '@amareteklay',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
