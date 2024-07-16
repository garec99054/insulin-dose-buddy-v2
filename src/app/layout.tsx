import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TranslationProvider } from '../context/TranslationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Dose Buddy - Insulin Dosage Calculator',
  description: 'An insulin dosage calculator for patients',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <TranslationProvider>
        <body className={inter.className}>{children}</body>
      </TranslationProvider>
    </html>
  )
}