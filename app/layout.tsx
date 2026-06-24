import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Pratik Jadhav — Data Engineer',
  description:
    'Portfolio of Pratik Jadhav, a Data Engineer specializing in scalable data pipelines, lakehouse architectures, and real-time streaming systems.',
  openGraph: {
    title: 'Pratik Jadhav — Data Engineer',
    description: 'Building scalable data infrastructure that turns raw data into business value.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white text-zinc-900`}>{children}</body>
    </html>
  )
}
