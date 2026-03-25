import React from 'react'
import { Lora, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata = {
  title: 'Amare Teklay — PhD Economist & Researcher',
  description:
    'I study how people and systems adapt to change. ' +
    'Epidemics, behavior, AI, sustainability.',
  openGraph: {
    title: 'Amare Teklay',
    description: 'Researcher · Builder · Economist',
    url: 'https://amareteklay.com',
    siteName: 'Amare Teklay',
  },
  twitter: {
    card: 'summary',
    creator: '@amareteklay',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
