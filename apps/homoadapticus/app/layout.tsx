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
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Homo Adapticus — Journal of Intelligent Change',
  description:
    'Essays at the intersection of AI, complexity, and human resilience. ' +
    'For people who refuse to be spectators of the future.',
  openGraph: {
    title: 'Homo Adapticus',
    description: 'Adaptation in the age of AI.',
    url: 'https://homoadapticus.com',
    siteName: 'Homo Adapticus',
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
